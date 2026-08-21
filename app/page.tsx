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
  title: "Devola Solutions | Hire a Web & Mobile App Developer in Nigeria",
  description:
    "Hire Devola Solutions to build your website or mobile app — a full-stack Nigerian dev team building fast websites, iOS & Android apps, brand identities, and handling CAC business registration at fixed, transparent prices.",
  keywords: [
    "hire web developer Nigeria",
    "hire mobile app developer Nigeria",
    "hire Next.js developer",
    "hire React Native developer",
    "hire full stack developer Nigeria",
    "digital agency Nigeria",
    "web development company Nigeria",
    "mobile app development company Nigeria",
    "website developer Lagos",
    "app developer Lagos",
    "graphic design Nigeria",
    "CAC business registration Nigeria",
    "affordable website Nigeria",
    "e-commerce website Nigeria",
    "Nigeria tech company",
    "Devola Solutions",
    "Website Developer in the UK",
    "Mobile App Developer in the UK",
    "Web Development Company in the UK",
    "Mobile App Development Company in the UK",
    "Digital Agency in the UK",
    "Website Developer in the US",
    "Mobile App Developer in the US",
    "Web Development Company in the US",
    "Mobile App Development Company in the US",
    "Digital Agency in the US",
    "Website Developer in Canada",
    "Mobile App Developer in Canada",
    "Web Development Company in Canada",
    "Mobile App Development Company in Canada",
    "Digital Agency in Canada",
    "Professional Website Developer",
    "Professional Mobile App Developer",
    "Professional Web Development Company",
    "Professional Mobile App Development Company",
    "Professional Digital Agency",
    "build a website for my business",
    "build a mobile app",
    "website design company",
    "app development company",
    "startup website developer",
    "small business website design",
    "custom software development",
    "web app developer",
    "SaaS developer Nigeria",
    "UI UX design agency",
    "logo and branding designer",
    "website and app development company",
    "who builds websites and apps",
    "full service digital agency",
    "website designer for small business",
    "custom web application developer",
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
    title: "Devola Solutions | Hire a Web & Mobile App Developer in Nigeria",
    description:
      "Nigeria's full-stack digital agency — hire us for websites, apps, branding & business registration under one roof. Fixed prices, no hidden fees.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Web & Mobile App Developer | Devola Solutions Nigeria",
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
