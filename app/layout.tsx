import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OrganizationSchema from "./_components/OrganizationSchema";
import { CurrencyProvider } from "./_components/CurrencyProvider";
import { getServerCurrency } from "./_lib/currency-server";
import WhatsAppButton from "./_components/WhatsAppButton";
import Analytics from "./_components/Analytics";
import UtmCapture from "./_components/UtmCapture";
import PromoModal from "./_components/PromoModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devola Solutions — Web, Mobile & Business Growth Agency",
  description:
    "We build fast websites and mobile apps, and handle business registration for African businesses. Based in Lagos, Nigeria — working remotely with clients across Nigeria, the US, UK, Canada, Germany, the Netherlands and Spain.",
  // Drop the code Search Console gives you (Settings > Ownership verification
  // > HTML tag > just the content="..." value) into GOOGLE_SITE_VERIFICATION
  // in .env.local — no code change needed when you set it up.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currency = await getServerCurrency();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <UtmCapture />
        <OrganizationSchema />
        <CurrencyProvider initialCurrency={currency}>
          {children}
          <PromoModal />
        </CurrencyProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
