import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Pricing from "./pricing";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Pricing in Nigeria | Web, Mobile, Design & CAC Registration | Devola Solutions",
  description:
    "Clear, fixed pricing for every service — website development from ₦200k, mobile apps from ₦1.5M, graphic design from ₦80k, CAC registration from ₦25k. No hidden fees. Billed in Naira.",
  keywords: [
    "digital agency pricing Nigeria",
    "website development cost Nigeria",
    "mobile app development cost Nigeria",
    "how much does a website cost in Nigeria",
    "how much does an app cost in Nigeria",
    "graphic design cost Nigeria",
    "CAC business registration cost Nigeria",
    "web developer price Nigeria",
    "Lagos tech agency pricing",
    "software development cost Nigeria",
    "Nigeria website price 2025",
    "affordable web development Nigeria",
    "Devola Solutions pricing",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/pricing",
    siteName: "Devola Solutions",
    title: "Pricing | Web, Mobile, Design & CAC Registration | Devola Solutions",
    description:
      "Fixed, transparent pricing for Nigerian businesses. Websites from ₦200k, mobile apps from ₦1.5M, graphic design from ₦80k, CAC registration from ₦25k.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Devola Solutions Nigeria",
    description:
      "No hidden fees. Website development from ₦200k, apps from ₦1.5M, branding from ₦80k, CAC registration from ₦25k.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <Pricing />
      <Footer />
    </div>
  );
}
