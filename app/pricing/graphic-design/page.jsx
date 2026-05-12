import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import GraphicDesign from "./graphic-design";

export const metadata = {
  title: "Graphic Design Pricing | Devola Solutions",
  description:
    "Transparent graphic design pricing — Essential ₦80k, Brand Identity ₦200k, Full Brand Suite custom. Source files always included.",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <GraphicDesign />
      <Footer />
    </div>
  );
}
