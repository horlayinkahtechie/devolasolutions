import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Contact from "./contact";

export const metadata = {
  title: "Contact Us | Devola Solutions",
  description:
    "Get in touch with Devola Solutions. Tell us about your project and we'll respond within 24 hours. Web development, mobile apps, graphic design, and business registration.",
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
