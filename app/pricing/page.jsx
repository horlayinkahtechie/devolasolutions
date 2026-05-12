import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Pricing from "./pricing";

export const metadata = {
  title: "Pricing | Devola Solutions",
  description:
    "Transparent pricing for web development, mobile apps, graphic design, and business registration. Fixed fees, no hidden charges — billed in Nigerian Naira.",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <Pricing />
      <Footer />
    </div>
  );
}
