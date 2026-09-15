import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OrganizationSchema from "./_components/OrganizationSchema";
import { CurrencyProvider } from "./_components/CurrencyProvider";
import { getServerCurrency } from "./_lib/currency-server";

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
        <OrganizationSchema />
        <CurrencyProvider initialCurrency={currency}>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
