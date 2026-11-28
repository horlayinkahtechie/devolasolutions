import Link from "next/link";
import { listBlogPosts } from "../../../_lib/blog-service";
import DeletePostButton from "./_components/DeletePostButton";

function formatDate(ms) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(ms));
}

export default async function AdminBlogListPage() {
  const posts = await listBlogPosts({});

  return (
    <div className="px-8 py-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Blog Posts</h1>
          <p className="text-sm text-slate-500 mt-1">{posts.length} total</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-colors"
        >
          New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white border border-slate-100 rounded-2xl p-10 text-center text-sm text-slate-400">
          No posts yet — click &quot;New Post&quot; to write the first one.
        </div>
      ) : (
        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-left text-xs font-black uppercase tracking-wider text-slate-400">
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Updated</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.slug} className="border-b border-slate-50 last:border-0">
                  <td className="px-5 py-3.5 font-bold text-slate-900">{post.title}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        post.status === "published" ? "bg-green-50 text-green-700" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-500">{post.category}</td>
                  <td className="px-5 py-3.5 text-slate-500">{formatDate(post.updatedAt)}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center justify-end gap-4">
                      <Link
                        href={`/admin/blog/${post.slug}/edit`}
                        className="text-xs font-bold text-slate-600 hover:text-[#FF5C00] transition-colors"
                      >
                        Edit
                      </Link>
                      <DeletePostButton slug={post.slug} title={post.title} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
