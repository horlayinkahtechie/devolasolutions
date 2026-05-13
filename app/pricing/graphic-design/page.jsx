import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import GraphicDesign from "./graphic-design";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Graphic Design Cost in Nigeria 2025 | Logo & Branding from ₦80k | Devola Solutions",
  description:
    "How much does graphic design cost in Nigeria? Essential ₦80k, Brand Identity ₦200k, Full Suite custom. Logo, branding, social media & print. Source files always included.",
  keywords: [
    "graphic design cost Nigeria",
    "logo design price Nigeria",
    "how much does logo design cost Nigeria",
    "brand identity cost Nigeria",
    "graphic designer Nigeria price 2025",
    "social media graphics cost Nigeria",
    "branding agency Nigeria pricing",
    "professional logo design Nigeria affordable",
    "flyer design cost Nigeria",
    "business card design Nigeria",
    "pitch deck design cost Nigeria",
    "Lagos graphic designer price",
    "custom logo design Nigeria",
    "Devola graphic design pricing",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/pricing/graphic-design" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/pricing/graphic-design",
    siteName: "Devola Solutions",
    title: "Graphic Design Pricing Nigeria | Logo & Branding from ₦80k | Devola Solutions",
    description:
      "Transparent design pricing for Nigerian businesses. Essential ₦80k, Brand Identity ₦200k, Full Suite custom. Source files included. 3 revision rounds guaranteed.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Cost Nigeria | Devola Solutions",
    description:
      "Essential ₦80k · Brand Identity ₦200k · Full Suite custom. Logo, branding, social media & print. Source files always yours.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <GraphicDesign />
      <Footer />
    </div>
  );
}
