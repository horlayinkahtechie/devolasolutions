"use client";

import { useState } from "react";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { formatMoney, applyDiscount } from "../_lib/currency";
import { useCurrency } from "./CurrencyProvider";

export default function HotelPricingToggle({
  basePrice,
  withAddonPrice,
  addonLabel,
  addonDescription,
  baseFeatures = [],
  addonFeatures = [],
  serviceLabel,
  typeName,
  discountPercent,
  discountLabel,
}) {
  const { currency } = useCurrency();
  const [withAddon, setWithAddon] = useState(false);
  const discountedBase = applyDiscount(basePrice, discountPercent);
  const discountedWithAddon = applyDiscount(withAddonPrice, discountPercent);
  const price = withAddon ? discountedWithAddon : discountedBase;
  const originalPrice = withAddon ? withAddonPrice : basePrice;
  const features = withAddon ? [...baseFeatures, ...addonFeatures] : baseFeatures;
  const money = (n) => formatMoney(n, currency);

  const contactHref = `/contact?${new URLSearchParams({
    service: serviceLabel || "Web Development",
    type: typeName || "Hotel Website with Booking System",
    package: withAddon ? `With ${addonLabel}` : `Without ${addonLabel}`,
    price: money(price),
  }).toString()}`;

  return (
    <div className="bg-slate-900 rounded-3xl p-8 md:p-10 ring-2 ring-[#FF5C00]">
      {/* Toggle row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-8 border-b border-slate-800">
        <div className="max-w-md">
          <p className="text-white font-black text-base">Add {addonLabel}?</p>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed">
            {addonDescription}
          </p>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={withAddon}
          onClick={() => setWithAddon((v) => !v)}
          className={`relative w-16 h-9 rounded-full shrink-0 transition-colors duration-300 ${
            withAddon ? "bg-[#FF5C00]" : "bg-slate-700"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white transition-transform duration-300 ${
              withAddon ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* Price */}
      <div className="pt-8">
        <div className="flex items-center gap-3 mb-2">
          <p className="text-[#FF5C00] text-[10px] font-black uppercase tracking-widest">
            {withAddon
              ? "Hotel booking site + " + addonLabel
              : "Hotel booking site"}
          </p>
          {discountPercent && (
            <span className="bg-[#FF5C00] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shrink-0">
              {discountLabel || `${discountPercent}% Off`}
            </span>
          )}
        </div>
        {discountPercent && (
          <p className="text-slate-500 text-lg line-through leading-none mb-1.5">
            {money(originalPrice)}
          </p>
        )}
        <p className="text-4xl md:text-5xl font-black text-white">
          {money(price)}
        </p>
        <p className="text-slate-400 text-sm mt-2">
          {withAddon
            ? `Includes the ${addonLabel.toLowerCase()} (+${money(
                discountedWithAddon - discountedBase
              )}).`
            : `Toggle above to add the ${addonLabel.toLowerCase()} for ${money(
                discountedWithAddon
              )} total.`}
        </p>
      </div>

      {/* Features */}
      <ul className="mt-8 grid sm:grid-cols-2 gap-2.5">
        {features.map((f) => {
          const isAddon = addonFeatures.includes(f);
          return (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <BsCheckLg
                className={`shrink-0 mt-0.5 ${
                  isAddon ? "text-[#FF5C00]" : "text-green-500"
                }`}
              />
              <span className="text-slate-300">
                {f}
                {isAddon && (
                  <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wide text-[#FF5C00]">
                    · add-on
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ul>

      <Link
        href={contactHref}
        className="mt-8 inline-flex items-center justify-center gap-2 bg-[#FF5C00] text-white py-3.5 px-8 rounded-full font-bold text-sm hover:bg-orange-500 transition-all duration-300"
      >
        Start This Project →
      </Link>
    </div>
  );
}
