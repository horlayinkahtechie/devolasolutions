"use client";

/* Thin wrapper around gtag.js — every call is a safe no-op if analytics
   isn't configured (no env vars set) or hasn't loaded yet, so this can be
   called from anywhere without guarding every call site. */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || null;
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || null;
export const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || null;

function gtag(...args) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag(...args);
}

/** A GA4 event — e.g. trackEvent("whatsapp_click", { page: "/contact" }). */
export function trackEvent(name, params = {}) {
  gtag("event", name, params);
}

/** Fires the Google Ads conversion action for a submitted lead. Requires both
 * NEXT_PUBLIC_GOOGLE_ADS_ID and NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL to be
 * set (Google Ads > Goals > Conversions > your action > "See conversion tag
 * setup" gives you the send_to value, formatted AW-XXXXXXXXX/XXXXXXXXXXXXX —
 * the label is the part after the slash). */
export function trackLeadConversion(extra = {}) {
  if (!GOOGLE_ADS_ID || !GOOGLE_ADS_CONVERSION_LABEL) return;
  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
    ...extra,
  });
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const UTM_STORAGE_KEY = "devola_utm";

/** Reads whichever ad-attribution data was captured on landing (see
 * UtmCapture.jsx) — works even if the visitor has since navigated to a page
 * (like /contact) that no longer has the UTM params in its own URL. */
export function getStoredUtm() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function storeUtmFromLocation() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid");
    const data = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) data[k] = v;
    });
    if (gclid) data.gclid = gclid;
    if (Object.keys(data).length === 0) return;
    // A fresh set of UTM params (a new ad click) always overwrites whatever
    // was stored before, so a later click is never shadowed by an earlier one.
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage can throw in private-browsing contexts — fine to skip.
  }
}

/** True if the stored attribution data looks like a paid Google click. */
export function isGoogleAdsLead(utm) {
  if (!utm) return false;
  if (utm.gclid) return true;
  return utm.utm_source === "google" && (utm.utm_medium === "cpc" || utm.utm_medium === "ppc");
}
