import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import MobileDevelopment from "./mobile-development";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Mobile App Development Cost in Nigeria 2025 | From ₦1.5M | Devola Solutions",
  description:
    "How much does a mobile app cost in Nigeria? Starter ₦1.5M, Business ₦3.55M, Enterprise custom. React Native — iOS & Android from one codebase. Fixed price, no hidden fees.",
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
    title: "Mobile App Development Pricing Nigeria | From ₦1.5M | Devola Solutions",
    description:
      "Transparent mobile app pricing for Nigerian businesses. Starter ₦1.5M, Business ₦3.55M, Enterprise custom. React Native — iOS & Android, one codebase.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Cost Nigeria | Devola Solutions",
    description:
      "Starter ₦1.5M · Business ₦3.55M · Enterprise custom. iOS & Android via React Native. 60% upfront, 40% on delivery.",
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
