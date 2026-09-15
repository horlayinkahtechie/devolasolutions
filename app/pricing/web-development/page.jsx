import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import WebDevelopment from "./web-development";
import { alternateLocales } from "../../_data/seo";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Website Development Cost in Nigeria 2025 | From ₦100k | Devola Solutions",
  description:
    "How much does a website cost in Nigeria? Fixed prices by type — landing page ₦100k, portfolio & company sites ₦250k, e-commerce from ₦350k, hotel booking ₦700k, school system ₦1.5M. Next.js & React.",
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
    title: "Website Development Pricing Nigeria | From ₦100k | Devola Solutions",
    description:
      "Fixed website pricing by type — no generic estimates. Landing pages, portfolios, e-commerce, hotel booking, CRM, school systems and more. Built with Next.js, delivered remotely to clients worldwide.",
    locale: "en_NG",
    alternateLocale: alternateLocales,
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Cost Nigeria | Devola Solutions",
    description:
      "A fixed price for every website type — from ₦100k landing pages to ₦1.5M school management systems. Next.js websites — fast, SEO-optimised, mobile-ready.",
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
