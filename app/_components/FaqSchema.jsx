/* FAQPage JSON-LD for FAQ content that's already written on the page —
   this is what search engines and AI answer engines (Google AI Overviews,
   ChatGPT, Perplexity) lift directly into their own answers. */
export default function FaqSchema({ faqs }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
