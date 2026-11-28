import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Blog from "./blog";
import { alternateLocales } from "../_data/seo";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Blog | Devola Solutions",
  description:
    "Practical guides on web development, mobile apps, design, and business registration from Devola Solutions — written from real projects, not theory.",
  keywords: [
    "web development blog",
    "mobile app development blog",
    "Nigeria tech blog",
    "business registration guide Nigeria",
    "Devola Solutions blog",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/rss.xml" } },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/blog",
    siteName: "Devola Solutions",
    title: "Blog | Devola Solutions",
    description: "Practical guides on web development, mobile apps, design, and business registration.",
    locale: "en_NG",
    alternateLocale: alternateLocales,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Devola Solutions",
    description: "Practical guides on web development, mobile apps, design, and business registration.",
    creator: "@devolasolutions",
  },
};

export default function Page({ searchParams }) {
  return (
    <div>
      <Navbar />
      <main>
        <Blog searchParams={searchParams} />
      </main>
      <Footer />
    </div>
  );
}
