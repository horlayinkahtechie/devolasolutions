import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import HowWeWork from "./HowWeWork";

export const metadata = {
  title: "How We Work | Devola Solutions",
  description:
    "Our 7-phase project process — from discovery call to post-launch support. No black boxes, no surprises. See exactly how we deliver web, app, design, and registration projects.",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <HowWeWork />
      <Footer />
    </div>
  );
}
