import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import WebDevelopment from "./webDevelopment";

export const metadata = {
  title: "Web Development Services | Devola Solutions",
  description:
    "Custom websites built with Next.js, React & Tailwind — fast, SEO-optimised, and mobile-ready. Landing pages, e-commerce, hotels, schools & more.",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <WebDevelopment />
      <Footer />
    </div>
  );
}
