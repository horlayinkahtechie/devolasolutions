import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import WebDevelopmentUSA from "./web-development-usa";
import { alternateLocales } from "../_data/seo";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Web & Mobile App Development for US Businesses | Devola Solutions",
  description:
    "Website and mobile app development for US-based businesses — fixed USD pricing, Next.js & React Native, real projects already shipped for US clients (Dwelcore, Apex PC Repairs). 60% upfront, 40% on delivery.",
  keywords: [
    "web development company for US clients",
    "hire a web developer for a US business",
    "outsource web development USA",
    "remote web development team for US startups",
    "affordable web development USA",
    "mobile app development company for US clients",
    "hire React Native developer for US business",
    "Next.js development agency for US clients",
    "offshore web development team USA",
    "website development cost for US clients",
    "mobile app development cost for US clients",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/web-development-usa" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/web-development-usa",
    siteName: "Devola Solutions",
    title: "Web & Mobile App Development for US Businesses | Devola Solutions",
    description:
      "Fixed USD pricing, Next.js & React Native, real projects already shipped for US clients. 60% upfront, 40% on delivery.",
    locale: "en_US",
    alternateLocale: alternateLocales,
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Mobile App Development for US Businesses",
    description:
      "Fixed USD pricing. Real projects shipped for US clients. Next.js & React Native.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <WebDevelopmentUSA />
      </main>
      <Footer />
    </div>
  );
}
