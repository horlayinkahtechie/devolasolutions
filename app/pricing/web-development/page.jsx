import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import WebDevelopment from "./web-development";
import { alternateLocales } from "../../_data/seo";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Website Development Cost 2026 | From $160 (₦100k) | Devola Solutions",
  description:
    "How much does a website cost? Fixed prices by type, in USD for international clients and Naira for Nigeria — landing page $160, portfolio & company sites $250–$400, e-commerce from $450, hotel booking $700, school system $2,500. Next.js & React, delivered remotely worldwide.",
  keywords: [
    "website development cost",
    "how much does a website cost",
    "website development company for international clients",
    "web development pricing in USD",
    "hire a web developer remotely",
    "Next.js developer price",
    "React developer cost",
    "landing page development cost",
    "e-commerce website development price",
    "business website development cost",
    "custom website development affordable",
    "SEO website development agency",
    "web development agency rates",
    "Devola web development pricing",
    "website development cost Nigeria",
    "website development cost for US clients",
    "website development cost for UK clients",
    "website development cost for Canada clients",
    "website development cost for Germany clients",
    "website development cost for Netherlands clients",
    "website development cost for Spain clients",
    "hire a Nigerian web developer remotely",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/pricing/web-development" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/pricing/web-development",
    siteName: "Devola Solutions",
    title: "Website Development Pricing | From $160 | Devola Solutions",
    description:
      "Fixed website pricing by type — no generic estimates. Landing pages, portfolios, e-commerce, hotel booking, CRM, school systems and more. Built with Next.js, delivered remotely to clients worldwide, priced in your currency.",
    locale: "en_NG",
    alternateLocale: alternateLocales,
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Cost | Devola Solutions",
    description:
      "A fixed price for every website type — from $160 landing pages to $2,500 school management systems. Next.js websites — fast, SEO-optimised, mobile-ready.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <WebDevelopment />
      </main>
      <Footer />
    </div>
  );
}
