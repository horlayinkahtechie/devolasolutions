import { notFound } from "next/navigation";
import Navbar from "../../../_components/Navbar";
import Footer from "../../../_components/Footer";
import SolutionPricingDetail from "../../../_components/SolutionPricingDetail";
import { solutions, getSolution, getDisplayPrice } from "../../../_data/solutions";
import { alternateLocales } from "../../../_data/seo";

const shortCountries = ["US", "UK", "Canada", "Germany", "Netherlands", "Spain"];

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getSolution(slug);

  if (!s) {
    return { title: "Not found | Devola Solutions" };
  }

  // Metadata always quotes the canonical Naira price — it's crawled once,
  // not per-visitor, so it shouldn't flip with the on-page currency toggle.
  const displayPrice = getDisplayPrice(s, "NGN");
  const title = `${s.name} Cost | ${displayPrice} | Devola Solutions`;
  const description = `${s.summary} ${displayPrice}, fixed price. Full feature breakdown, ${s.timeline} timeline. Every account handed over to you after launch. Built in Nigeria, delivered remotely worldwide.`;
  const url = `https://devolasolutions.com/pricing/solutions/${s.slug}`;
  const keywords = [
    `${s.name} cost`,
    `${s.name} price Nigeria`,
    `hire a developer to build a ${s.name.toLowerCase()}`,
    `${s.name} developer for hire`,
    ...shortCountries.map((c) => `${s.name} for ${c} clients`),
  ];

  return {
    metadataBase: new URL("https://devolasolutions.com"),
    title,
    description,
    keywords,
    alternates: { canonical: `/pricing/solutions/${s.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: "Devola Solutions",
      title,
      description,
      locale: "en_NG",
      alternateLocale: alternateLocales,
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.name} | ${displayPrice} | Devola Solutions`,
      description: s.summary,
      creator: "@devolasolutions",
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  return (
    <div>
      <Navbar />
      <SolutionPricingDetail solution={solution} />
      <Footer />
    </div>
  );
}
