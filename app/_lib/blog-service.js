import "server-only";
import readingTime from "reading-time";
import { getAdminDb } from "./firebase-admin";
import { COLLECTIONS } from "../_data/blog-schema";
import { getPublicImageUrl } from "./r2";
import { slugify } from "./slugify";

/* Centralizes the Firestore reads/writes for blog posts so the admin API
   routes and the public blog pages share exactly one source of truth for
   "what a valid post looks like" — rather than duplicating this logic in
   every route handler. */

export class SlugTakenError extends Error {}
export class ValidationError extends Error {}

function emptySeo() {
  return { metaTitle: null, metaDescription: null, focusKeyword: null, canonicalUrl: null, noindex: false };
}

function normalizeInput(input) {
  if (!input.title?.trim()) throw new ValidationError("Title is required.");
  if (!input.contentMarkdown?.trim()) throw new ValidationError("Content is required.");

  const slug = slugify(input.slug?.trim() || input.title);
  if (!slug) throw new ValidationError("Couldn't derive a valid slug from the title.");

  return {
    slug,
    title: input.title.trim(),
    excerpt: input.excerpt?.trim() || input.contentMarkdown.trim().slice(0, 160),
    contentMarkdown: input.contentMarkdown,
    category: input.category?.trim() || "General",
    tags: Array.isArray(input.tags) ? input.tags.map((t) => t.trim()).filter(Boolean) : [],
    author: input.author?.trim() || "Devola Solutions",
    coverImageKey: input.coverImageKey || null,
    status: input.status === "published" ? "published" : "draft",
    seo: {
      ...emptySeo(),
      ...(input.seo || {}),
    },
  };
}

/** Creates a new post. Throws SlugTakenError if the slug already exists. */
export async function createBlogPost(input) {
  const data = normalizeInput(input);
  const db = getAdminDb();
  const ref = db.collection(COLLECTIONS.BLOG_POSTS).doc(data.slug);

  const now = Date.now();
  const stats = readingTime(data.contentMarkdown);

  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (snap.exists) throw new SlugTakenError(`A post with slug "${data.slug}" already exists.`);

    tx.set(ref, {
      ...data,
      coverImageUrl: data.coverImageKey ? getPublicImageUrl(data.coverImageKey) : null,
      readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
      publishedAt: data.status === "published" ? now : null,
      createdAt: now,
      updatedAt: now,
    });
  });

  return getBlogPostBySlug(data.slug);
}

/** Updates an existing post by its CURRENT slug. `input.slug`, if different,
 *  renames it (a new doc id) — handled by the caller re-fetching afterward. */
export async function updateBlogPost(currentSlug, input) {
  const db = getAdminDb();
  const currentRef = db.collection(COLLECTIONS.BLOG_POSTS).doc(currentSlug);
  const currentSnap = await currentRef.get();
  if (!currentSnap.exists) throw new ValidationError("Post not found.");
  const existing = currentSnap.data();

  const data = normalizeInput({ ...existing, ...input, slug: input.slug ?? currentSlug });
  const stats = readingTime(data.contentMarkdown);
  const now = Date.now();
  const wasPublished = existing.status === "published";
  const publishedAt =
    data.status === "published" ? existing.publishedAt || now : wasPublished ? existing.publishedAt : null;

  const nextDoc = {
    ...data,
    coverImageUrl: data.coverImageKey ? getPublicImageUrl(data.coverImageKey) : null,
    readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
    publishedAt,
    createdAt: existing.createdAt,
    updatedAt: now,
  };

  if (data.slug === currentSlug) {
    await currentRef.set(nextDoc);
  } else {
    // Renaming the slug = a new doc id. Create-then-delete, inside a
    // transaction, so a collision on the new slug never silently clobbers
    // another post and never loses the old doc if the write fails.
    const nextRef = db.collection(COLLECTIONS.BLOG_POSTS).doc(data.slug);
    await db.runTransaction(async (tx) => {
      const nextSnap = await tx.get(nextRef);
      if (nextSnap.exists) throw new SlugTakenError(`A post with slug "${data.slug}" already exists.`);
      tx.set(nextRef, nextDoc);
      tx.delete(currentRef);
    });
  }

  return getBlogPostBySlug(data.slug);
}

export async function deleteBlogPost(slug) {
  const db = getAdminDb();
  await db.collection(COLLECTIONS.BLOG_POSTS).doc(slug).delete();
}

/** Admin view — returns the post regardless of status, or null. */
export async function getBlogPostBySlug(slug) {
  const db = getAdminDb();
  const snap = await db.collection(COLLECTIONS.BLOG_POSTS).doc(slug).get();
  return snap.exists ? snap.data() : null;
}

/** Public view — only returns the post if it's published. */
export async function getPublishedPostBySlug(slug) {
  const post = await getBlogPostBySlug(slug);
  return post && post.status === "published" ? post : null;
}

/**
 * Only `status` is ever applied as a real Firestore query filter (needing
 * exactly one composite index: `(status ASC, publishedAt DESC)`, declared
 * in firestore.indexes.json). `category`/`tag` are filtered in-memory
 * instead of adding a composite index per combination — fine at the post
 * volume a single-admin company blog will ever reach, and it keeps this
 * query shape from growing a new required index every time the admin UI
 * adds another filter.
 * @param {{status?: "draft"|"published", category?: string, tag?: string, limit?: number}} opts
 */
export async function listBlogPosts({ status, category, tag, limit = 200 } = {}) {
  const db = getAdminDb();
  let query = db.collection(COLLECTIONS.BLOG_POSTS);

  if (status === "published") {
    query = query.where("status", "==", "published").orderBy("publishedAt", "desc");
  } else {
    // Admin "all posts" / "drafts" views — every post has updatedAt
    // (publishedAt is null for drafts, which would sort oddly), filtered
    // to the requested status in-memory below.
    query = query.orderBy("updatedAt", "desc");
  }

  const snap = await query.limit(limit).get();
  let posts = snap.docs.map((d) => d.data());

  if (status && status !== "published") posts = posts.filter((p) => p.status === status);
  if (category) posts = posts.filter((p) => p.category === category);
  if (tag) posts = posts.filter((p) => p.tags.includes(tag));

  return posts;
}

/** Up to `limit` other published posts sharing the same category. */
export async function getRelatedPosts(post, limit = 3) {
  // A "related posts" section is a nice-to-have, never worth a 500 on the
  // post itself if the query fails for any reason.
  const all = await listBlogPosts({ status: "published", category: post.category, limit: limit + 1 }).catch(
    (err) => {
      console.error("Related posts fetch failed:", err);
      return [];
    }
  );
  return all.filter((p) => p.slug !== post.slug).slice(0, limit);
}
