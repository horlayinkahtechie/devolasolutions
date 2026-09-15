"use client";

import { useCurrency } from "./CurrencyProvider";

/* Small ₦ / $ switcher. Lets a visitor override auto-detected currency —
   useful for Nigerians on a VPN, or foreign visitors who'd rather see Naira. */
export default function CurrencyToggle({ className = "" }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center bg-slate-100 rounded-full p-1 shrink-0 ${className}`}
      role="group"
      aria-label="Currency"
    >
      {[
        { code: "NGN", label: "₦ NGN" },
        { code: "USD", label: "$ USD" },
      ].map((c) => (
        <button
          key={c.code}
          type="button"
          onClick={() => setCurrency(c.code)}
          aria-pressed={currency === c.code}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            currency === c.code
              ? "bg-slate-900 text-white"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
