/* BlogPosting JSON-LD for a single post — same pattern as FaqSchema.jsx /
   OrganizationSchema.jsx. Publisher references the same identity used
   sitewide in OrganizationSchema. */
export default function ArticleSchema({ post, url }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImageUrl || undefined,
    datePublished: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
    dateModified: new Date(post.updatedAt).toISOString(),
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Devola Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://devolasolutions.com/devola-solutions-logo.png",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
