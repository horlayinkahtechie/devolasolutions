import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import WebDevelopment from "./webDevelopment";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Website Development Services Nigeria | Next.js & React Developers | Devola Solutions",
  description:
    "Custom websites built with Next.js & React — fast-loading, SEO-optimised, mobile-first. Landing pages, e-commerce stores, hotel & school websites, business portals. Lagos, Nigeria.",
  keywords: [
    "web development company Nigeria",
    "website developer Lagos",
    "Next.js developer Nigeria",
    "React developer Nigeria",
    "custom website Nigeria",
    "e-commerce website Nigeria",
    "landing page design Nigeria",
    "SEO website development Nigeria",
    "mobile-friendly website Nigeria",
    "business website Nigeria",
    "hotel website Nigeria",
    "school website Nigeria",
    "fast website Nigeria",
    "professional website development Nigeria",
    "website agency Lagos",
    "Devola web development",
    "build a website for my business",
    "website design company Lagos",
    "custom website design Nigeria",
    "small business website design Nigeria",
    "startup website developer Nigeria",
    "e-commerce website builder Nigeria",
    "online store developer Nigeria",
    "web app development Nigeria",
    "SaaS website developer Nigeria",
    "website redesign services Nigeria",
    "responsive website design Nigeria",
    "restaurant website developer Nigeria",
    "booking website developer Nigeria",
    "real estate website developer Nigeria",
    "portfolio website design Nigeria",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/services/web-development",
    siteName: "Devola Solutions",
    title: "Website Development Nigeria | Next.js & React | Devola Solutions",
    description:
      "Fast, SEO-optimised websites built with Next.js for Nigerian businesses. Landing pages, e-commerce, hotels, schools & custom portals. Mobile-first by default.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Nigeria | Devola Solutions",
    description:
      "Next.js & React websites — fast, SEO-ready, mobile-first. Landing pages · E-commerce · Hotels · Schools · Business portals. Nigerian dev team.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <WebDevelopment />
      <Footer />
    </div>
  );
}
