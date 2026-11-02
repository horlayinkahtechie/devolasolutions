"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiX } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi";
import { useCurrency } from "./CurrencyProvider";
import { trackEvent } from "../_lib/analytics";
import {
  internationalDiscountPercent,
  internationalDiscountLabel,
  localDiscountPercent,
  localDiscountLabel,
} from "../_data/solutions";

const SEEN_KEY = "devola_promo_seen";
const SHOW_DELAY_MS = 1200;

/* One promo per currency — USD's international discount applies to every
   website & app type; NGN's discount is web-only (see localDiscountPercent
   in _data/solutions.jsx), so its copy is scoped accordingly rather than
   overclaiming mobile too. */
const PROMO = {
  USD: {
    percent: internationalDiscountPercent,
    eyebrow: internationalDiscountLabel,
    heading: `${internationalDiscountPercent}% Off Every Website & App — For a Limited Time.`,
    body: `We're currently running a ${internationalDiscountPercent}% discount for clients outside Nigeria. It's already applied to every price on the site — nothing to enter, nothing to ask for.`,
  },
  NGN: {
    percent: localDiscountPercent,
    eyebrow: localDiscountLabel,
    heading: `${localDiscountPercent}% Off Website Development — For a Limited Time.`,
    body: `We're currently running a ${localDiscountPercent}% discount on every website type. It's already applied to every price shown — nothing to enter, nothing to ask for.`,
  },
};

/* Shown once per browser session, whichever page the visitor lands on
   first — not shown on /edu (a different product, wrong context for a
   sales promo). */
export default function PromoModal() {
  const { currency } = useCurrency();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const promo = PROMO[currency] || PROMO.NGN;

  useEffect(() => {
    if (pathname?.startsWith("/edu")) return;

    let seen = true;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      // sessionStorage unavailable (private browsing etc.) — show once per
      // page load instead of skipping it entirely.
    }
    if (seen) return;

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // Nothing to do if this fails — worst case it shows again later.
      }
      trackEvent("promo_modal_shown", { currency, discount_percent: promo.percent });
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
    // Only ever run once per mount — currency/pathname are read once at the
    // moment this evaluates, not re-checked on every client-side navigation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const close = () => setOpen(false);
  const handleCtaClick = () => {
    trackEvent("promo_modal_cta_click", { currency, discount_percent: promo.percent });
    setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-5 bg-slate-900/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-modal-title"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors duration-200"
        >
          <BiX size={20} />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF5C00] flex items-center justify-center mb-5">
          <HiSparkles size={22} />
        </div>

        <p className="text-[#FF5C00] text-[11px] font-bold uppercase tracking-widest mb-2">
          {promo.eyebrow}
        </p>
        <h2 id="promo-modal-title" className="text-2xl font-black text-slate-900 leading-tight mb-3">
          {promo.heading}
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed mb-7">
          {promo.body}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/pricing"
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300"
          >
            See Discounted Pricing →
          </Link>
          <button
            type="button"
            onClick={close}
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-6 py-3.5 rounded-full font-bold text-sm hover:border-slate-300 transition-all duration-300"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
