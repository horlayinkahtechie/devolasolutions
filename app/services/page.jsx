import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import ServicesPage from "./services";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Services | Web, Mobile, Design & Business Registration in Nigeria | Devola Solutions",
  description:
    "Web development, mobile app development, graphic design & CAC business registration — all under one roof. Nigeria's full-stack digital agency. Fixed prices, no hidden fees.",
  keywords: [
    "digital agency Nigeria",
    "web development company Nigeria",
    "mobile app development company Nigeria",
    "graphic design agency Nigeria",
    "CAC registration service Nigeria",
    "Lagos tech agency",
    "software development Nigeria",
    "full stack developer Nigeria",
    "branding agency Nigeria",
    "business registration agent Nigeria",
    "Nigeria digital agency services",
    "best web developer Nigeria",
    "website development Lagos",
    "Devola Solutions services",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/services",
    siteName: "Devola Solutions",
    title: "Services | Web, Mobile, Design & Business Registration | Devola Solutions Nigeria",
    description:
      "Everything a Nigerian business needs to launch and grow — websites, apps, branding, and CAC registration. One agency, fixed prices.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Devola Solutions Nigeria",
    description:
      "Web development · Mobile apps · Graphic design · CAC registration. Nigeria's full-stack digital agency. Fixed prices, no hidden fees.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <ServicesPage />
      <Footer />
    </div>
  );
}
