import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import FinalCTA from "../../_components/FinalCTA";
import ArticleSchema from "../../_components/ArticleSchema";
import { getPublishedPostBySlug, getRelatedPosts } from "../../_lib/blog-service";
import { alternateLocales } from "../../_data/seo";

const BASE_URL = "https://devolasolutions.com";

function formatDate(ms) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(ms));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) return {};

  const title = post.seo.metaTitle || post.title;
  const description = post.seo.metaDescription || post.excerpt;
  const canonical = post.seo.canonicalUrl || `/blog/${post.slug}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: `${title} | Devola Solutions`,
    description,
    robots: { index: !post.seo.noindex, follow: true },
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: "Devola Solutions",
      title,
      description,
      images: post.coverImageUrl ? [post.coverImageUrl] : undefined,
      publishedTime: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
      modifiedTime: new Date(post.updatedAt).toISOString(),
      locale: "en_NG",
      alternateLocale: alternateLocales,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.coverImageUrl ? [post.coverImageUrl] : undefined,
      creator: "@devolasolutions",
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post);

  return (
    <div>
      <Navbar />
      <ArticleSchema post={post} url={`${BASE_URL}/blog/${post.slug}`} />
      <main className="bg-[#fafafa]">
        <section className="px-6 md:px-12 pt-36 pb-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-8 flex-wrap">
              <Link href="/" className="hover:text-[#FF5C00] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#FF5C00] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-slate-900 font-bold">{post.title}</span>
            </div>

            <span className="text-xs font-bold uppercase tracking-wide text-[#FF5C00]">{post.category}</span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1] mt-3 mb-5">
              {post.title}
            </h1>
            <p className="text-sm text-slate-400">
              By {post.author} · {formatDate(post.publishedAt)} · {post.readingTimeMinutes} min read
            </p>
          </div>
        </section>

        {post.coverImageUrl && (
          <section className="px-6 md:px-12 pb-10">
            <div className="max-w-4xl mx-auto relative aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100">
              <Image src={post.coverImageUrl} alt={post.title} fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" unoptimized priority />
            </div>
          </section>
        )}

        <section className="px-6 md:px-12 pb-16">
          <article className="max-w-3xl mx-auto prose prose-slate prose-headings:font-black prose-headings:tracking-tight prose-a:text-[#FF5C00] prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.contentMarkdown}</ReactMarkdown>
          </article>

          {post.tags.length > 0 && (
            <div className="max-w-3xl mx-auto flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-100">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-[#FF5C00] hover:text-[#FF5C00] transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </section>

        {related.length > 0 && (
          <section className="px-6 md:px-12 pb-20 border-t border-slate-100 pt-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl font-black text-slate-900 mb-6">More on {post.category}</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl bg-white border border-slate-100 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <p className="text-sm font-black text-slate-900 group-hover:text-[#FF5C00] transition-colors leading-snug mb-1.5">
                      {r.title}
                    </p>
                    <p className="text-xs text-slate-400">{r.readingTimeMinutes} min read</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
