import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import GraphicDesign from "./graphic-design";

export const metadata = {
  title: "Graphic Design Services | Devola Solutions",
  description:
    "Brand identity, logos, social media graphics, pitch decks & print materials. 100% custom design — no templates, full file ownership.",
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
