import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import WebDevelopment from "./web-development";

export const metadata = {
  title: "Web Development Pricing | Devola Solutions",
  description:
    "Transparent web development pricing — Starter ₦150k, Business ₦350k, Enterprise custom. Fixed fees, no hidden charges.",
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
