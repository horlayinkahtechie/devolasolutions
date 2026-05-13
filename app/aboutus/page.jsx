import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Aboutus from "./aboutus";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "About Devola Solutions | Nigerian Digital Agency | Our Story, Mission & Team",
  description:
    "Devola Solutions is a Nigerian digital agency building websites, mobile apps, brand identities, and registering businesses. Learn who we are, what drives us, and why clients trust us.",
  keywords: [
    "about Devola Solutions",
    "Nigerian digital agency",
    "web development agency Nigeria",
    "tech company Lagos Nigeria",
    "software agency Nigeria",
    "who are Devola Solutions",
    "Nigeria website development team",
    "digital agency story Nigeria",
    "reliable web developer Nigeria",
    "trusted tech agency Lagos",
    "Nigerian startup agency",
    "web and mobile agency Nigeria",
    "Nigeria branding company",
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
    title: "About Devola Solutions | Nigerian Digital Agency",
    description:
      "We're a Nigerian digital agency building websites, apps, brands, and registering businesses — all under one roof. Meet the team behind the work.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Devola Solutions | Nigerian Digital Agency",
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
