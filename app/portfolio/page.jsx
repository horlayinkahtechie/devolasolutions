import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Portfolio from "./portfolio";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Portfolio | Hire a Web & Mobile App Developer in Nigeria | Devola Solutions",
  description:
    "Looking to hire a web developer or mobile app developer in Nigeria? Browse real projects by Devola Solutions — hotel booking systems, e-commerce stores, and mobile apps shipped for Nigerian businesses.",
  keywords: [
    "hire web developer Nigeria",
    "hire mobile app developer Nigeria",
    "hire Next.js developer",
    "hire React Native developer",
    "hire React developer Nigeria",
    "web development agency Lagos",
    "mobile app development company Nigeria",
    "freelance web developer Nigeria",
    "who to hire to build a website",
    "who to hire to build a mobile app",
    "best web developer to hire in Nigeria",
    "affordable website developer Nigeria",
    "custom web app developer Nigeria",
    "e-commerce website developer Nigeria",
    "hotel booking system developer",
    "Devola Solutions portfolio",
    "web development portfolio Nigeria",
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
    title: "Hire a Web & Mobile App Developer in Nigeria | Devola Solutions Portfolio",
    description:
      "Hotel booking systems, e-commerce stores, mobile apps, brand identities — real projects shipped for Nigerian businesses. Browse the work before you hire.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Web & Mobile App Developer in Nigeria | Devola Solutions",
    description:
      "Websites · Mobile apps · Brand identities · CAC registrations. Real work for Nigerian businesses. Browse our portfolio before you hire.",
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
