import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Portfolio from "./portfolio";

export const metadata = {
  title: "Portfolio | Devola Solutions",
  description:
    "See the work we've shipped — websites, mobile apps, brand identities, and business registrations. Real projects, real results for Nigerian businesses.",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <Portfolio />
      <Footer />
    </div>
  );
}
