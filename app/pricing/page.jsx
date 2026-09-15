import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Pricing from "./pricing";
import { alternateLocales, internationalReach } from "../_data/seo";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Pricing | Web, Mobile, Design & CAC Registration | Devola Solutions",
  description: `Clear, fixed pricing for every service and website/app type — landing pages from ₦100k, mobile apps from ₦3.5M, graphic design from ₦80k, CAC registration from ₦25k. No hidden fees. Serving clients across ${internationalReach}.`,
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
    "web developer pricing for US clients",
    "web developer pricing for UK clients",
    "web developer pricing for Canada clients",
    "web developer pricing for Germany clients",
    "web developer pricing for Netherlands clients",
    "web developer pricing for Spain clients",
    "outsource web development pricing",
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
    description: `Fixed, transparent pricing by website & app type. Landing pages from ₦100k, mobile apps from ₦3.5M, graphic design from ₦80k, CAC registration from ₦25k. Working with clients across ${internationalReach}.`,
    locale: "en_NG",
    alternateLocale: alternateLocales,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Devola Solutions Nigeria",
    description:
      "No hidden fees. Landing pages from ₦100k, apps from ₦3.5M, branding from ₦80k, CAC registration from ₦25k. Serving Nigeria, the US, UK, Canada, Germany, the Netherlands and Spain.",
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
