import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import EcommerceWebsiteDevelopment from "./ecommerce-website-development";
import { alternateLocales } from "../_data/seo";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "E-Commerce Website Development for International Clients | Devola Solutions",
  description:
    "Custom e-commerce websites for international clients — fixed USD pricing, real stores already live (That Local Girl, Ayora Tribe), Stripe & Paystack payments, multi-currency support. 60% upfront, 40% on delivery.",
  keywords: [
    "e-commerce website development company",
    "hire an e-commerce website developer",
    "custom e-commerce website development",
    "online store development for international clients",
    "Next.js e-commerce developer",
    "Shopify alternative custom e-commerce",
    "e-commerce website development cost",
    "e-commerce developer for US clients",
    "e-commerce developer for UK clients",
    "e-commerce developer for Canada clients",
    "multi-currency e-commerce website developer",
    "Stripe e-commerce website development",
    "custom online store developer",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ecommerce-website-development" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/ecommerce-website-development",
    siteName: "Devola Solutions",
    title: "E-Commerce Website Development for International Clients | Devola Solutions",
    description:
      "Real e-commerce stores already live for international clients. Fixed USD pricing, Stripe & Paystack payments, multi-currency. 60% upfront, 40% on delivery.",
    locale: "en_US",
    alternateLocale: alternateLocales,
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Website Development for International Clients",
    description:
      "Fixed USD pricing. Real online stores already shipped. Stripe & Paystack, multi-currency, full admin dashboard.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <EcommerceWebsiteDevelopment />
      </main>
      <Footer />
    </div>
  );
}
