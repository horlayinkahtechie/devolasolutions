import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import ServicesPage from "./services";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Services | Hire a Web Developer, Mobile App Developer & More | Devola Solutions",
  description:
    "Need to hire a web developer or mobile app developer in Nigeria? Devola Solutions offers web development, mobile apps, graphic design & CAC business registration — all under one roof, fixed prices.",
  keywords: [
    "hire web developer Nigeria",
    "hire mobile app developer Nigeria",
    "hire Next.js developer",
    "hire React Native developer",
    "who to hire for website development",
    "who to hire for mobile app development",
    "web development company Nigeria",
    "mobile app development company Nigeria",
    "graphic design agency Nigeria",
    "CAC registration service Nigeria",
    "full stack developer Nigeria",
    "software development Nigeria",
    "branding agency Nigeria",
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
    title: "Hire a Web & Mobile App Developer | Services | Devola Solutions Nigeria",
    description:
      "Everything a Nigerian business needs to launch and grow — hire us for websites, apps, branding, and CAC registration. One agency, fixed prices.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Web & Mobile App Developer | Devola Solutions Services",
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
