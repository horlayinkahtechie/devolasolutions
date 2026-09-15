import { countryLabels } from "../_data/seo";

/* Sitewide JSON-LD. This is the authoritative, non-spammy way to tell search
   engines which countries we serve — areaServed — rather than stuffing every
   page's <meta keywords> with country names. */
export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Devola Solutions",
    url: "https://devolasolutions.com",
    logo: "https://devolasolutions.com/devola-solutions-logo.png",
    image: "https://devolasolutions.com/devola-solutions-logo.png",
    description:
      "Devola Solutions is a Nigeria-based web & mobile app development agency working remotely with clients in Nigeria, the United States, the United Kingdom, Canada, Germany, the Netherlands, Spain and beyond.",
    email: "devolasolutions@gmail.com",
    telephone: "+2348169415526",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    areaServed: countryLabels.map((name) => ({
      "@type": "Country",
      name,
    })),
    sameAs: [
      "https://instagram.com/dev_olayinka",
      "https://x.com/dev_olayinka",
      "https://linkedin.com/dev_olayinka",
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Registration" } },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
