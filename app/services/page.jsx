import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import ServicesPage from "./services";

export const metadata = {
  title: "Services | Devola Solutions",
  description:
    "Web development, mobile apps, graphic design, and business registration — all under one roof. Explore Devola Solutions' full service offering.",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <ServicesPage />
      <Footer />
    </div>
  );
}
