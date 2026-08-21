import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import AppDevelopment from "./app-development";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Mobile App Development Nigeria | iOS & Android | React Native | Devola Solutions",
  description:
    "iOS & Android apps built with React Native — one codebase, two stores. MVPs to full-scale fintech, logistics, e-commerce & health apps. Nigerian dev team, App Store submission included.",
  keywords: [
    "mobile app development company Nigeria",
    "app developer Lagos",
    "React Native developer Nigeria",
    "iOS app developer Nigeria",
    "Android app developer Nigeria",
    "fintech app development Nigeria",
    "e-commerce app development Nigeria",
    "logistics app development Nigeria",
    "health app developer Nigeria",
    "MVP app development Nigeria",
    "cross-platform app development Nigeria",
    "custom mobile app Nigeria",
    "app development agency Lagos",
    "App Store submission Nigeria",
    "Google Play developer Nigeria",
    "Devola app development",
    "build a mobile app for my business",
    "hire an app developer Nigeria",
    "app design and development Nigeria",
    "on-demand app developer Nigeria",
    "delivery app developer Nigeria",
    "social app developer Nigeria",
    "app developer for startups Nigeria",
    "build an app from scratch Nigeria",
    "app prototype developer Nigeria",
    "native app developer Nigeria",
    "booking app developer Nigeria",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/services/app-development" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/services/app-development",
    siteName: "Devola Solutions",
    title: "Mobile App Development Nigeria | iOS & Android | Devola Solutions",
    description:
      "React Native apps for iOS & Android — one codebase, two platforms. Fintech, logistics, e-commerce & health apps. App Store & Play Store submission included.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Nigeria | Devola Solutions",
    description:
      "iOS & Android via React Native. Fintech · E-commerce · Logistics · Health. One codebase, two platforms. Nigerian dev team — App Store submission included.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <AppDevelopment />
      <Footer />
    </div>
  );
}
