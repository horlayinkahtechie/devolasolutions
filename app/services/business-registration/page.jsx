import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import BusinessRegistration from "./business-registration";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "CAC Business Registration Nigeria | LLC, Sole Proprietorship & NGO | Devola Solutions",
  description:
    "Register your business with the CAC in Nigeria — done fully remotely. Sole proprietorship, LLC, NGO. TIN, SCUML & post-registration compliance included. 3–7 days, no office visits.",
  keywords: [
    "CAC registration Nigeria",
    "business registration service Nigeria",
    "how to register a business in Nigeria",
    "company registration Lagos",
    "LLC registration Nigeria",
    "sole proprietorship registration Nigeria",
    "NGO registration Nigeria",
    "CAC registration agent Lagos",
    "business name registration Nigeria",
    "TIN registration Nigeria",
    "SCUML registration Nigeria",
    "remote business registration Nigeria",
    "CAC certified agent Nigeria",
    "post-registration compliance Nigeria",
    "Devola business registration",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/services/business-registration" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/services/business-registration",
    siteName: "Devola Solutions",
    title: "CAC Business Registration Nigeria | Done Remotely | Devola Solutions",
    description:
      "Register your Nigerian business remotely — Sole Proprietorship, LLC, or NGO. CAC-registered agents, TIN, SCUML & compliance. 3–7 days, no office visits.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAC Business Registration Nigeria | Devola Solutions",
    description:
      "Sole Proprietorship · LLC · NGO. Done fully remotely — no office visits. TIN, SCUML & compliance included. CAC-registered agents. 3–7 days.",
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
