import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Pricing from "./pricing";
import { alternateLocales, internationalReach } from "../_data/seo";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Pricing | Web, Mobile, Design & CAC Registration | Devola Solutions",
  description: `Clear, fixed pricing for every service and website/app type — landing pages from $160 (₦100k), mobile apps from $1,500, graphic design from ₦80k, CAC registration from ₦25k. No hidden fees. Local and international pricing shown automatically. Serving clients across ${internationalReach}.`,
  keywords: [
    "digital agency pricing",
    "website development cost",
    "mobile app development cost",
    "how much does a website cost",
    "how much does an app cost",
    "web development pricing in USD",
    "graphic design cost Nigeria",
    "CAC business registration cost Nigeria",
    "web developer price",
    "software development cost",
    "affordable web development",
    "Devola Solutions pricing",
    "web developer pricing for US clients",
    "web developer pricing for UK clients",
    "web developer pricing for Canada clients",
    "web developer pricing for Germany clients",
    "web developer pricing for Netherlands clients",
    "web developer pricing for Spain clients",
    "outsource web development pricing",
    "website development cost Nigeria",
    "mobile app development cost Nigeria",
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
    description: `Fixed, transparent pricing by website & app type. Landing pages from $160, mobile apps from $1,500, graphic design from ₦80k, CAC registration from ₦25k. Working with clients across ${internationalReach}.`,
    locale: "en_NG",
    alternateLocale: alternateLocales,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Devola Solutions",
    description:
      "No hidden fees. Landing pages from $160, mobile apps from $1,500, branding from ₦80k, CAC registration from ₦25k. Serving Nigeria, the US, UK, Canada, Germany, the Netherlands and Spain.",
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
