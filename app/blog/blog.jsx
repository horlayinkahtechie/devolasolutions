import Link from "next/link";
import Image from "next/image";
import { listBlogPosts } from "../_lib/blog-service";

const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">{text}</span>
  </div>
);

const PAGE_SIZE = 9;

function formatDate(ms) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(ms));
}

export default async function Blog({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || null;
  const tag = params?.tag || null;
  const page = Math.max(1, Number(params?.page) || 1);

  // Never let a transient Firestore issue (or the one-time missing-index
  // error before firestore.indexes.json is deployed) take down the whole
  // public page — degrade to "no posts" instead of a 500.
  const allPosts = await listBlogPosts({ status: "published", category, tag }).catch((err) => {
    console.error("Blog listing fetch failed:", err);
    return [];
  });
  const categories = [...new Set(allPosts.map((p) => p.category))];
  const totalPages = Math.max(1, Math.ceil(allPosts.length / PAGE_SIZE));
  const posts = allPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const filterQuery = (overrides) => {
    const next = new URLSearchParams();
    if (overrides.category !== undefined ? overrides.category : category) {
      next.set("category", overrides.category !== undefined ? overrides.category : category);
    }
    if (overrides.page) next.set("page", String(overrides.page));
    const qs = next.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  return (
    <div className="bg-[#fafafa]">
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-16">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-10">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Blog</span>
          </div>
          <Label text="Insights" />
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
            The Devola <span className="text-[#FF5C00]">Blog</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            Practical guides on web development, mobile apps, design, and
            business registration — written from real projects, not theory.
          </p>
        </div>
      </section>

      {categories.length > 0 && (
        <section className="px-6 md:px-12 pb-4">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                !category ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300"
              }`}
            >
              All
            </Link>
            {categories.map((c) => (
              <Link
                key={c}
                href={filterQuery({ category: c, page: undefined })}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  category === c ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300"
                }`}
              >
                {c}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl">📝</div>
              <p className="text-slate-400 text-sm font-medium">
                {tag || category ? "No posts match this filter yet." : "No posts yet — check back soon."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-3xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    {post.coverImageUrl ? (
                      <Image
                        src={post.coverImageUrl}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{post.category}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col gap-2.5 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#FF5C00]">{post.category}</span>
                    <h2 className="text-base font-black text-slate-900 group-hover:text-[#FF5C00] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <p className="text-xs text-slate-400 mt-auto pt-2">
                      {formatDate(post.publishedAt)} · {post.readingTimeMinutes} min read
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={filterQuery({ page: p })}
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    p === page ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  {p}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
