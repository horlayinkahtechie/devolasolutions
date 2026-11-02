import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import MobileDevelopment from "./mobile-development";
import { alternateLocales } from "../../_data/seo";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Mobile App Development Cost 2026 | From $1,500 | Devola Solutions",
  description:
    "How much does a mobile app cost? Fixed prices by app type, in USD for international clients and Naira for Nigeria — e-commerce app from $1,500, bill payment app $3,000, social media app up to $10,000, fintech up to $8,000, logistics & delivery $15,000. React Native, iOS & Android.",
  keywords: [
    "mobile app development cost",
    "how much does an app cost",
    "mobile app development company for international clients",
    "app development pricing in USD",
    "React Native developer price",
    "iOS app development cost",
    "Android app development cost",
    "fintech app development cost",
    "e-commerce app development cost",
    "custom mobile app development",
    "app development agency rates",
    "cross-platform app development cost",
    "hire a React Native developer remotely",
    "Devola app development pricing",
    "mobile app development cost Nigeria",
    "mobile app development cost for US clients",
    "mobile app development cost for UK clients",
    "mobile app development cost for Canada clients",
    "mobile app development cost for Germany clients",
    "mobile app development cost for Netherlands clients",
    "mobile app development cost for Spain clients",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/pricing/mobile-development" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/pricing/mobile-development",
    siteName: "Devola Solutions",
    title: "Mobile App Development Pricing | From $1,500 | Devola Solutions",
    description:
      "Fixed mobile app pricing by type — no generic estimates. E-commerce, bill payment, social media, fintech and logistics apps. React Native — iOS & Android, delivered remotely to clients worldwide, priced in your currency.",
    locale: "en_NG",
    alternateLocale: alternateLocales,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Cost | Devola Solutions",
    description:
      "A fixed price for every app type — from $1,500 e-commerce apps to $15,000 logistics & delivery platforms. iOS & Android via React Native. 60% upfront, 40% on delivery.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <MobileDevelopment />
      </main>
      <Footer />
    </div>
  );
}
