import type { Metadata } from "next";
import Hero from "./_components/Hero";
import TrustBar from "./_components/TrustBar";
import Services from "./_components/Services";
import WhyUs from "./_components/WhyUs";
import FinalCTA from "./_components/FinalCTA";
import Navbar from "./_components/Navbar";
import FAQs from "./_components/FAQs";
import Portfolio from "./_components/Portfolio";
import Footer from "./_components/Footer";
import About from "./_components/About";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Devola Solutions | Web Development, Mobile Apps & Business Registration in Nigeria",
  description:
    "Devola Solutions is a Nigerian digital agency building fast websites, iOS & Android apps, brand identities, and handling CAC business registration — all at fixed, transparent prices.",
  keywords: [
    "digital agency Nigeria",
    "web development company Nigeria",
    "website developer Lagos",
    "mobile app development Nigeria",
    "graphic design Nigeria",
    "CAC business registration Nigeria",
    "best web developer Nigeria",
    "affordable website Nigeria",
    "Next.js developer Nigeria",
    "React Native developer Nigeria",
    "logo designer Nigeria",
    "Nigeria tech company",
    "e-commerce website Nigeria",
    "app developer Lagos",
    "Devola Solutions",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com",
    siteName: "Devola Solutions",
    title: "Devola Solutions | Web, Mobile, Design & CAC Registration in Nigeria",
    description:
      "Nigeria's full-stack digital agency — websites, apps, branding & business registration under one roof. Fixed prices, no hidden fees.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devola Solutions | Nigerian Digital Agency",
    description:
      "Websites · Mobile apps · Brand identity · CAC Registration. Fixed prices, Nigerian team, world-class delivery.",
    creator: "@devolasolutions",
    site: "@devolasolutions",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <Portfolio  />
      <FAQs />
      <Testimonials />
      <FinalCTA />

      <Footer />
    </main>
  );
}
