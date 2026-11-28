/* Pure, framework-free — safe to import from both the server-only
   blog-service.js (final validation) and the client-side post editor
   (live slug preview as the admin types a title). */
export function slugify(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
