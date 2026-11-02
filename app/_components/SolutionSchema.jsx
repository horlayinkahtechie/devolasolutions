import { applyDiscount } from "../_lib/currency";

/* Service + Offer JSON-LD for one website/app type, in both NGN and USD.
   Offer price is real and structured (not buried in prose) so Google rich
   results and AI answer engines can cite the actual price — not a scraped
   guess at it. */
export default function SolutionSchema({ solution: s }) {
  const url = `https://devolasolutions.com/pricing/solutions/${s.slug}`;

  const offerFor = (currency) => {
    if (s.tiers) {
      const prices = s.tiers.map((t) =>
        currency === "USD" ? t.priceUSD : applyDiscount(t.priceNGN, t.discountPercent)
      );
      return {
        "@type": "AggregateOffer",
        priceCurrency: currency,
        lowPrice: Math.min(...prices),
        highPrice: Math.max(...prices),
        offerCount: s.tiers.length,
        availability: "https://schema.org/InStock",
        url,
      };
    }
    return {
      "@type": "Offer",
      priceCurrency: currency,
      price: currency === "USD" ? s.priceUSD : applyDiscount(s.priceNGN, s.discountPercent),
      availability: "https://schema.org/InStock",
      url,
    };
  };

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.name,
    name: `${s.name} — Devola Solutions`,
    provider: {
      "@type": "ProfessionalService",
      name: "Devola Solutions",
      url: "https://devolasolutions.com",
    },
    areaServed: "Worldwide",
    description: s.summary,
    offers: [offerFor("NGN"), offerFor("USD")],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
