"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "../../../../_lib/slugify";

const inputBase =
  "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#FF5C00]/20 focus:border-[#FF5C00]";
const labelBase = "block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2";

function emptyPost() {
  return {
    title: "",
    slug: "",
    excerpt: "",
    contentMarkdown: "",
    category: "",
    tags: "",
    coverImageKey: null,
    status: "draft",
    seo: { metaTitle: "", metaDescription: "", focusKeyword: "", canonicalUrl: "", noindex: false },
  };
}

function postToFormState(post) {
  if (!post) return emptyPost();
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    contentMarkdown: post.contentMarkdown,
    category: post.category,
    tags: post.tags.join(", "),
    coverImageKey: post.coverImageKey,
    coverImageUrl: post.coverImageUrl,
    status: post.status,
    seo: {
      metaTitle: post.seo.metaTitle || "",
      metaDescription: post.seo.metaDescription || "",
      focusKeyword: post.seo.focusKeyword || "",
      canonicalUrl: post.seo.canonicalUrl || "",
      noindex: post.seo.noindex,
    },
  };
}

/** `existingSlug` is null for a new post, the current slug when editing. */
export default function PostEditor({ initialPost = null, existingSlug = null }) {
  const router = useRouter();
  const [form, setForm] = useState(() => postToFormState(initialPost));
  const [slugEdited, setSlugEdited] = useState(Boolean(initialPost));
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [localImagePreview, setLocalImagePreview] = useState(initialPost?.coverImageUrl || null);

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setForm((prev) => ({ ...prev, title, slug: slugEdited ? prev.slug : slugify(title) }));
  };

  const handleSlugChange = (e) => {
    setSlugEdited(true);
    setForm((prev) => ({ ...prev, slug: e.target.value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/blog/upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, contentType: file.type }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Couldn't start the upload.");

      const putRes = await fetch(data.uploadUrl, { method: "PUT", headers: { "Content-Type": file.type }, body: file });
      if (!putRes.ok) throw new Error("Image upload failed.");

      setForm((prev) => ({ ...prev, coverImageKey: data.key }));
      setLocalImagePreview(URL.createObjectURL(file));
    } catch (err) {
      setError(err.message || "Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const save = async (status) => {
    setSaving(true);
    setError(null);
    const payload = {
      ...form,
      status,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
    };
    try {
      const url = existingSlug ? `/api/admin/blog/${existingSlug}` : "/api/admin/blog";
      const method = existingSlug ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Couldn't save the post.");
      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      setError(err.message || "Couldn't save the post.");
      setSaving(false);
    }
  };

  return (
    <div className="px-8 py-10 max-w-6xl mx-auto">
      <h1 className="text-2xl font-black text-slate-900 mb-8">
        {existingSlug ? "Edit Post" : "New Post"}
      </h1>

      <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
        {/* Main column */}
        <div className="space-y-5">
          <div>
            <label className={labelBase}>Title</label>
            <input
              type="text"
              value={form.title}
              onChange={handleTitleChange}
              placeholder="How to Choose the Right Website Type for Your Business"
              className={inputBase}
            />
          </div>

          <div>
            <label className={labelBase}>Slug</label>
            <input type="text" value={form.slug} onChange={handleSlugChange} className={inputBase} />
            <p className="text-[10px] text-slate-400 mt-1.5">devolasolutions.com/blog/{form.slug || "…"}</p>
          </div>

          <div>
            <label className={labelBase}>Excerpt</label>
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
              rows={2}
              placeholder="A one or two sentence summary shown on the blog listing page."
              className={`${inputBase} resize-none`}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelBase}>Category</label>
              <input
                type="text"
                value={form.category}
                onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                placeholder="Web Development"
                className={inputBase}
              />
            </div>
            <div>
              <label className={labelBase}>Tags (comma-separated)</label>
              <input
                type="text"
                value={form.tags}
                onChange={(e) => setForm((prev) => ({ ...prev, tags: e.target.value }))}
                placeholder="SEO, Next.js, pricing"
                className={inputBase}
              />
            </div>
          </div>

          <div>
            <label className={labelBase}>Cover Image</label>
            {localImagePreview && (
              // eslint-disable-next-line @next/next/no-img-element -- a freshly-picked local file / R2.dev URL, not an optimizable static asset
              <img src={localImagePreview} alt="" className="w-full h-48 object-cover rounded-xl mb-3 border border-slate-100" />
            )}
            <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} className="text-sm" />
            {uploading && <p className="text-xs text-slate-400 mt-1.5">Uploading…</p>}
          </div>

          <div>
            <label className={labelBase}>Content (Markdown)</label>
            <div className="grid md:grid-cols-2 gap-4">
              <textarea
                value={form.contentMarkdown}
                onChange={(e) => setForm((prev) => ({ ...prev, contentMarkdown: e.target.value }))}
                rows={20}
                placeholder={"## A heading\n\nWrite in Markdown — **bold**, _italic_, [links](https://example.com), lists, etc."}
                className={`${inputBase} font-mono text-xs resize-none`}
              />
              <div className="border border-slate-200 rounded-xl px-4 py-3 overflow-y-auto prose prose-sm max-w-none prose-headings:font-black prose-a:text-[#FF5C00]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {form.contentMarkdown || "*Preview appears here as you type.*"}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        {/* SEO sidebar */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-5 lg:sticky lg:top-6">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">SEO</p>

          <div>
            <label className={labelBase}>Meta Title</label>
            <input
              type="text"
              value={form.seo.metaTitle}
              onChange={(e) => setForm((prev) => ({ ...prev, seo: { ...prev.seo, metaTitle: e.target.value } }))}
              placeholder={form.title || "Falls back to the post title"}
              className={inputBase}
            />
            <p className="text-[10px] text-slate-400 mt-1">{form.seo.metaTitle.length}/60 characters</p>
          </div>

          <div>
            <label className={labelBase}>Meta Description</label>
            <textarea
              value={form.seo.metaDescription}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, seo: { ...prev.seo, metaDescription: e.target.value } }))
              }
              rows={3}
              placeholder={form.excerpt || "Falls back to the excerpt"}
              className={`${inputBase} resize-none`}
            />
            <p className="text-[10px] text-slate-400 mt-1">{form.seo.metaDescription.length}/160 characters</p>
          </div>

          <div>
            <label className={labelBase}>Focus Keyword</label>
            <input
              type="text"
              value={form.seo.focusKeyword}
              onChange={(e) => setForm((prev) => ({ ...prev, seo: { ...prev.seo, focusKeyword: e.target.value } }))}
              placeholder="hire a web developer in Nigeria"
              className={inputBase}
            />
            <p className="text-[10px] text-slate-400 mt-1">Editorial guidance only — not rendered anywhere.</p>
          </div>

          <div>
            <label className={labelBase}>Canonical URL (optional)</label>
            <input
              type="text"
              value={form.seo.canonicalUrl}
              onChange={(e) => setForm((prev) => ({ ...prev, seo: { ...prev.seo, canonicalUrl: e.target.value } }))}
              placeholder="Leave blank to use this post's own URL"
              className={inputBase}
            />
          </div>

          <label className="flex items-center gap-2.5 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={form.seo.noindex}
              onChange={(e) => setForm((prev) => ({ ...prev, seo: { ...prev.seo, noindex: e.target.checked } }))}
              className="w-4 h-4 accent-[#FF5C00]"
            />
            Hide from search engines (noindex)
          </label>

          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <button
              type="button"
              onClick={() => save("published")}
              disabled={saving || uploading}
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-[#FF5C00] transition-colors disabled:opacity-60"
            >
              {saving ? "Saving…" : "Publish"}
            </button>
            <button
              type="button"
              onClick={() => save("draft")}
              disabled={saving || uploading}
              className="w-full bg-white border border-slate-200 text-slate-700 py-3 rounded-xl font-bold text-sm hover:border-slate-300 transition-colors disabled:opacity-60"
            >
              Save Draft
            </button>
          </div>

          {error && (
            <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2.5">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
