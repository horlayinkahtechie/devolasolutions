import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import HowWeWork from "./HowWeWork";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "How We Work | 7-Phase Project Process | Devola Solutions Nigeria",
  description:
    "See exactly how Devola Solutions delivers projects — Discovery to Post-Launch in 7 clear phases. No black boxes, no surprises. Transparent timelines for websites, apps, design & CAC registration.",
  keywords: [
    "how Devola Solutions works",
    "web development process Nigeria",
    "how digital agency works Nigeria",
    "project delivery process Nigeria",
    "website development timeline Nigeria",
    "app development process Nigeria",
    "transparent web agency Nigeria",
    "how to hire web developer Nigeria",
    "software project workflow Nigeria",
    "client onboarding process Nigeria digital agency",
    "agency process Lagos",
    "website project phases Nigeria",
    "what to expect web developer Nigeria",
    "how long does a website take Nigeria",
  ],
  authors: [{ name: "Devola Solutions", url: "https://devolasolutions.com" }],
  creator: "Devola Solutions",
  publisher: "Devola Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/how-we-work",
    siteName: "Devola Solutions",
    title: "How We Work | Devola Solutions Nigeria",
    description:
      "7 clear phases from discovery to post-launch — no black boxes, no surprises. See how we deliver websites, apps, branding, and CAC registration projects.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work | Devola Solutions Nigeria",
    description:
      "7-phase process: Discovery → Proposal → Design → Development → Testing → Launch → Post-Launch. Transparent timelines. No surprises.",
    creator: "@devolasolutions",
  },
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
