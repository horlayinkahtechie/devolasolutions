import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import MobileDevelopment from "./mobile-development";

export const metadata = {
  title: "App Development Pricing | Devola Solutions",
  description:
    "Transparent mobile app pricing — Starter ₦400k, Business ₦750k, Enterprise custom. iOS & Android, React Native.",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <MobileDevelopment />
      <Footer />
    </div>
  );
}
