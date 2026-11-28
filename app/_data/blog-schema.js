/* FIRESTORE SCHEMA for the blog — mirrors app/edu/_data/schema.js's and
   app/_data/booking-schema.js's role: one file to read to understand the
   data model. No framework imports. */

export const COLLECTIONS = {
  BLOG_POSTS: "blogPosts",
  ADMIN_AUDIT_LOGS: "adminAuditLogs",
  ADMIN_RATE_LIMITS: "adminRateLimits",
};

/**
 * @typedef {"draft"|"published"} BlogPostStatus
 *
 * @typedef {Object} BlogPostSeo
 * @property {string|null} metaTitle - falls back to `title` when empty.
 * @property {string|null} metaDescription - falls back to `excerpt` when empty.
 * @property {string|null} focusKeyword - editorial aid only, not rendered.
 * @property {string|null} canonicalUrl - override; defaults to the post's own URL.
 * @property {boolean} noindex
 *
 * @typedef {Object} BlogPost
 * @property {string} slug - doc id too (same "natural key as doc id" trick
 *   used by callBookings' startMs) — enforces uniqueness for free and makes
 *   lookups a direct doc read instead of a query.
 * @property {string} title
 * @property {string} excerpt
 * @property {string} contentMarkdown
 * @property {number} readingTimeMinutes - computed server-side on save via `reading-time`.
 * @property {string|null} coverImageKey - R2 object key.
 * @property {string|null} coverImageUrl - public R2.dev URL, snapshotted at
 *   save time (same reasoning as GOOGLE_MEET_LINK in the booking feature —
 *   never re-derived from the env var at render time).
 * @property {string} category
 * @property {string[]} tags
 * @property {string} author - flat string, defaults to "Devola Solutions".
 * @property {BlogPostStatus} status
 * @property {number|null} publishedAt - ms epoch; null while draft.
 * @property {number} createdAt
 * @property {number} updatedAt
 * @property {BlogPostSeo} seo
 */

export {};
