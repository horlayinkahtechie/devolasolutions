import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import GraphicDesign from "./graphic-design";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Graphic Design Services Nigeria | Logo, Branding & Social Media | Devola Solutions",
  description:
    "Professional graphic design in Nigeria — logos, brand identity, social media graphics, pitch decks & print. 100% custom, no templates. Source files & full ownership included.",
  keywords: [
    "graphic designer Nigeria",
    "logo designer Lagos",
    "brand identity designer Nigeria",
    "professional logo design Nigeria",
    "social media graphics Nigeria",
    "pitch deck designer Nigeria",
    "flyer design Nigeria",
    "business card design Nigeria",
    "branding agency Nigeria",
    "custom logo design Nigeria",
    "graphic design company Lagos",
    "print design Nigeria",
    "visual identity Nigeria",
    "brand style guide Nigeria",
    "Devola graphic design",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/services/graphic-design" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/services/graphic-design",
    siteName: "Devola Solutions",
    title: "Graphic Design Nigeria | Logo, Branding & Social Media | Devola Solutions",
    description:
      "100% custom design — logos, brand identity, social media graphics, pitch decks & print. No templates. Source files and full ownership always included.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Nigeria | Devola Solutions",
    description:
      "Logos · Brand identity · Social media · Pitch decks · Print. 100% custom, no templates. Full file ownership — Nigerian design team.",
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
