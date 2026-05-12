import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import BusinessRegistration from "./business-registration";

export const metadata = {
  title: "Business Registration Services | Devola Solutions",
  description:
    "CAC registration for sole proprietorships, LLCs, and NGOs in Nigeria. Done remotely — no office visits. TIN, SCUML & post-registration compliance included.",
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
