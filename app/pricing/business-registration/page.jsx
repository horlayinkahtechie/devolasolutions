import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import BusinessRegistration from "./business-registration";

export const metadata = {
  title: "Business Registration Pricing | Devola Solutions",
  description:
    "CAC registration pricing — Sole Proprietorship ₦25k, LLC ₦80k, NGO ₦120k. Government fees billed separately at cost.",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <BusinessRegistration />
      <Footer />
    </div>
  );
}
