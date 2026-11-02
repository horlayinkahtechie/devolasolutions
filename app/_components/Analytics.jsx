"use client";

import Script from "next/script";
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID } from "../_lib/analytics";

/* Loads gtag.js once, site-wide, and configures whichever IDs are set.
   Renders nothing until NEXT_PUBLIC_GA_MEASUREMENT_ID is in .env.local — so
   the site works identically with analytics on or off, no code change
   needed either way. NEXT_PUBLIC_GOOGLE_ADS_ID is optional on top of that,
   for Google Ads conversion tracking (see _lib/analytics.js). */
export default function Analytics() {
  if (!GA_MEASUREMENT_ID) return null;

  const configCalls = [`gtag('config', '${GA_MEASUREMENT_ID}');`];
  if (GOOGLE_ADS_ID) configCalls.push(`gtag('config', '${GOOGLE_ADS_ID}');`);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          ${configCalls.join("\n")}
        `}
      </Script>
    </>
  );
}
