import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Reviews from "./reviews";
import { alternateLocales } from "../_data/seo";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Client Reviews | Devola Solutions",
  description:
    "Real reviews from real Devola Solutions clients — websites, mobile apps, branding, and business registration. Most reviews link straight through to the live project or case study.",
  keywords: [
    "Devola Solutions reviews",
    "Devola Solutions client testimonials",
    "web development agency reviews",
    "Nigeria web developer reviews",
    "client feedback web development",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/reviews" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/reviews",
    siteName: "Devola Solutions",
    title: "Client Reviews | Devola Solutions",
    description:
      "Real reviews from real Devola Solutions clients, most linking straight through to the live project or case study.",
    locale: "en_NG",
    alternateLocale: alternateLocales,
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews | Devola Solutions",
    description:
      "Real reviews from real Devola Solutions clients, most linking straight through to the live project or case study.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
