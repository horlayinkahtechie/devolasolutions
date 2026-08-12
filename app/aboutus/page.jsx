import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Aboutus from "./aboutus";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "About Devola Solutions | Reliable Web & Mobile App Developers in Nigeria",
  description:
    "Meet the Nigerian web and mobile app development team behind Devola Solutions — who we are, what drives us, and why businesses hire us to build and ship their projects.",
  keywords: [
    "reliable web developer Nigeria",
    "trusted mobile app developer Nigeria",
    "hire a Nigerian web development team",
    "experienced app developers Nigeria",
    "about Devola Solutions",
    "Nigerian digital agency",
    "web development agency Nigeria",
    "tech company Lagos Nigeria",
    "who are Devola Solutions",
    "Nigeria website development team",
    "trusted tech agency Lagos",
    "web and mobile agency Nigeria",
    "best digital agency Nigeria",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/about",
    siteName: "Devola Solutions",
    title: "About Devola Solutions | Reliable Web & Mobile App Developers",
    description:
      "We're a Nigerian digital agency building websites, apps, brands, and registering businesses — all under one roof. Meet the team behind the work before you hire us.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Devola Solutions | Nigerian Web & Mobile App Developers",
    description:
      "Websites · Apps · Branding · CAC Registration. Nigerian team, world-class delivery. Learn who we are and how we work.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <Aboutus />
      <Footer />
    </div>
  );
}
