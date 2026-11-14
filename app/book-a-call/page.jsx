import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import BookACall from "./book-a-call";
import { alternateLocales } from "../_data/seo";
import { SLOT_DURATION_LABEL } from "../_lib/booking-config";

export const metadata = {
  metadataBase: new URL("https://devolasolutions.com"),
  title: "Book a Free 30-Minute Call | Devola Solutions",
  description:
    `Book a free, focused ${SLOT_DURATION_LABEL} call with Devola Solutions — pick a time instantly and get a Google Meet link by email with automatic reminders.`,
  robots: { index: true, follow: true },
  alternates: { canonical: "/book-a-call" },
  openGraph: {
    type: "website",
    url: "https://devolasolutions.com/book-a-call",
    siteName: "Devola Solutions",
    title: "Book a Free 30-Minute Call | Devola Solutions",
    description: "Pick a time instantly and talk it through before you commit to a project — completely free.",
    locale: "en_US",
    alternateLocale: alternateLocales,
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free 30-Minute Call | Devola Solutions",
    description: "Pick a time instantly and talk it through before you commit to a project — completely free.",
    creator: "@devolasolutions",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <BookACall />
      </main>
      <Footer />
    </div>
  );
}
