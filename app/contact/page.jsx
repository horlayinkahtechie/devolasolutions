import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Contact from "./contact";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Contact Devola Solutions | Get a Free Project Quote | Nigeria Digital Agency",
  description:
    "Ready to build? Contact Devola Solutions for a free quote on your website, mobile app, branding, or CAC registration. We respond within 24 hours. Based in Nigeria.",
  keywords: [
    "contact Devola Solutions",
    "hire web developer Nigeria",
    "get website quote Nigeria",
    "web development inquiry Nigeria",
    "mobile app quote Nigeria",
    "free project quote Nigeria",
    "digital agency contact Lagos",
    "hire graphic designer Nigeria",
    "business registration inquiry Nigeria",
    "web developer for hire Nigeria",
    "get a quote website Nigeria",
    "Nigeria tech agency contact",
    "start a project Nigeria",
    "work with us Nigeria digital agency",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/contact",
    siteName: "Devola Solutions",
    title: "Contact Devola Solutions | Free Project Quote | Nigeria",
    description:
      "Tell us about your project — website, app, branding, or business registration. We'll respond within 24 hours with a clear quote and timeline.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Devola Solutions | Free Quote",
    description:
      "Website · App · Branding · CAC Registration. Tell us what you need — free quote, 24-hour response. Nigerian digital agency.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
