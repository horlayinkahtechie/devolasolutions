import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Portfolio from "./portfolio";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Portfolio | Websites, Apps & Branding Work | Devola Solutions Nigeria",
  description:
    "Browse real projects by Devola Solutions — hotel websites, mobile apps, brand identities, and more. See what we've shipped for Nigerian businesses and judge for yourself.",
  keywords: [
    "Devola Solutions portfolio",
    "web development portfolio Nigeria",
    "website examples Nigeria",
    "mobile app portfolio Nigeria",
    "graphic design portfolio Nigeria",
    "Nigerian developer work samples",
    "agency portfolio Lagos",
    "e-commerce website examples Nigeria",
    "branding portfolio Nigeria",
    "hotel website Nigeria example",
    "best websites built in Nigeria",
    "Nigeria app developer work",
    "case studies Nigeria digital agency",
    "real projects Nigerian web agency",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/portfolio",
    siteName: "Devola Solutions",
    title: "Portfolio | Real Work for Nigerian Businesses | Devola Solutions",
    description:
      "Hotels, mobile apps, brand identities, e-commerce stores — real projects shipped for real Nigerian businesses. Browse and judge for yourself.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Devola Solutions Nigeria",
    description:
      "Websites · Mobile apps · Brand identities · CAC registrations. Real work for Nigerian businesses. Browse our portfolio.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <Portfolio />
      <Footer />
    </div>
  );
}
