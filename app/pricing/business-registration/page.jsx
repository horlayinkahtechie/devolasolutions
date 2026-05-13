import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import BusinessRegistration from "./business-registration";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "CAC Business Registration Cost in Nigeria 2025 | From ₦25k | Devola Solutions",
  description:
    "How much does business registration cost in Nigeria? Sole Proprietorship ₦25k, LLC ₦80k, NGO ₦120k. CAC-registered agents. Done remotely — no office visits required.",
  keywords: [
    "CAC registration cost Nigeria",
    "business registration fee Nigeria 2025",
    "how much to register a business in Nigeria",
    "sole proprietorship registration cost Nigeria",
    "LLC registration fee Nigeria",
    "NGO registration cost Nigeria",
    "company registration Lagos",
    "CAC registration agent Nigeria",
    "business name registration Nigeria",
    "how to register a company in Nigeria",
    "business registration consultant Nigeria",
    "TIN registration Nigeria",
    "SCUML registration cost Nigeria",
    "Devola business registration pricing",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/pricing/business-registration" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/pricing/business-registration",
    siteName: "Devola Solutions",
    title: "CAC Business Registration Cost Nigeria 2025 | From ₦25k | Devola Solutions",
    description:
      "CAC registration for Nigerian businesses. Sole Proprietorship ₦25k, LLC ₦80k, NGO ₦120k. Done fully remotely — CAC-registered agents, 3–7 days.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAC Registration Cost Nigeria 2025 | Devola Solutions",
    description:
      "Sole Proprietorship ₦25k · LLC ₦80k · NGO ₦120k. Done remotely, 3–7 days. CAC-registered agents. TIN & SCUML included.",
    creator: "@devolasolutions",
  },
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
