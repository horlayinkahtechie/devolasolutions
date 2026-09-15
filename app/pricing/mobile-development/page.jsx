import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import MobileDevelopment from "./mobile-development";
import { alternateLocales } from "../../_data/seo";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Mobile App Development Cost in Nigeria 2025 | From ₦3.5M | Devola Solutions",
  description:
    "How much does a mobile app cost in Nigeria? Fixed prices by app type — utility bill payment ₦3.5M, e-commerce app + web + admin ₦6M, fintech & logistics apps up to ₦15M. React Native, iOS & Android.",
  keywords: [
    "mobile app development cost Nigeria",
    "how much does an app cost in Nigeria",
    "app development pricing Nigeria",
    "React Native developer Nigeria price",
    "iOS app development cost Nigeria",
    "Android app development cost Nigeria",
    "fintech app development cost Nigeria",
    "e-commerce app cost Nigeria",
    "Lagos app developer price",
    "custom mobile app Nigeria",
    "app development agency Nigeria rates",
    "cross-platform app cost Nigeria",
    "mobile app developer Nigeria affordable",
    "Devola app development pricing",
    "mobile app development cost for US clients",
    "mobile app development cost for UK clients",
    "mobile app development cost for Canada clients",
    "mobile app development cost for Germany clients",
    "mobile app development cost for Netherlands clients",
    "mobile app development cost for Spain clients",
    "hire a React Native developer remotely",
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
    title: "Mobile App Development Pricing Nigeria | From ₦3.5M | Devola Solutions",
    description:
      "Fixed mobile app pricing by type — no generic estimates. Utility bill payment, e-commerce, fintech and logistics apps. React Native — iOS & Android, delivered remotely to clients worldwide.",
    locale: "en_NG",
    alternateLocale: alternateLocales,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Cost Nigeria | Devola Solutions",
    description:
      "A fixed price for every app type — from ₦3.5M utility bill payment apps to fintech & logistics apps up to ₦15M. iOS & Android via React Native. 60% upfront, 40% on delivery.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <MobileDevelopment />
      <Footer />
    </div>
  );
}
