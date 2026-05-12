import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import AppDevelopment from "./app-development";

export const metadata = {
  title: "Mobile App Development Services | Devola Solutions",
  description:
    "iOS & Android apps built with React Native — one codebase, two platforms. From MVPs to full-scale fintech, logistics & e-commerce apps.",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <AppDevelopment />
      <Footer />
    </div>
  );
}
