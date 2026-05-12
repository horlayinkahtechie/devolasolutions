import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Aboutus from "./aboutus";

export const metadata = {
  title: "About Us | Devola Solutions",
  description:
    "Learn about Devola Solutions — our story, mission, team, and the technologies we use to build world-class digital products.",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <Aboutus />
      <Footer />
    </div>
  );
}
