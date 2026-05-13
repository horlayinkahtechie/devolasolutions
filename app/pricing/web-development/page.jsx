import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import WebDevelopment from "./web-development";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Website Development Cost in Nigeria 2025 | From ₦200k | Devola Solutions",
  description:
    "How much does a website cost in Nigeria? Starter ₦200k, Business ₦450k, Enterprise custom. Next.js & React. Fixed price, no hidden charges. See exactly what's included.",
  keywords: [
    "website development cost Nigeria",
    "how much does a website cost in Nigeria",
    "web development pricing Nigeria",
    "website price Nigeria 2025",
    "Next.js developer Nigeria price",
    "React developer cost Nigeria",
    "landing page cost Nigeria",
    "e-commerce website price Nigeria",
    "business website cost Nigeria",
    "Lagos web developer price",
    "custom website Nigeria affordable",
    "SEO website development Nigeria",
    "web development agency rates Nigeria",
    "Devola web development pricing",
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
    title: "Website Development Pricing Nigeria | From ₦200k | Devola Solutions",
    description:
      "Transparent website pricing for Nigerian businesses. Starter ₦200k, Business ₦450k, Enterprise custom. Built with Next.js — fast, SEO-ready, mobile-first.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Cost Nigeria | Devola Solutions",
    description:
      "Starter ₦200k · Business ₦450k · Enterprise custom. Next.js websites — fast, SEO-optimised, mobile-ready. Fixed price, no surprises.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <WebDevelopment />
      <Footer />
    </div>
  );
}
