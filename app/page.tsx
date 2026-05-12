import Hero from "./_components/Hero";
import Services from "./_components/Services";
import WhyUs from "./_components/WhyUs";
import FinalCTA from "./_components/FinalCTA";
import Navbar from "./_components/Navbar";
import FAQs from "./_components/FAQs";
import Portfolio from "./_components/Portfolio";
import Footer from "./_components/Footer";
import About from "./_components/About";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Portfolio />
      <FAQs />
      <Testimonials />
      <FinalCTA />

      <Footer />
    </main>
  );
}
