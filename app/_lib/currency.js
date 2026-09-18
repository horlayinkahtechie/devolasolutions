/* Shared, framework-agnostic currency helpers — safe to import from both
   Server and Client Components (no next/headers here, see currency-server.js
   for the request-aware helper). */

export const NGN_PER_USD = 1500;

export function ngnToUsd(ngn) {
  return ngn / NGN_PER_USD;
}

export function formatMoney(ngnAmount, currency = "NGN") {
  if (currency === "USD") {
    const usd = Math.round(ngnToUsd(ngnAmount));
    return `$${usd.toLocaleString("en-US")}`;
  }
  return `₦${Math.round(ngnAmount).toLocaleString("en-NG")}`;
}

/* `prefix` e.g. "From " / "Up to ", `suffix` e.g. "/page" / "/month". */
export function formatPrice(ngnAmount, currency = "NGN", { prefix = "", suffix = "" } = {}) {
  return `${prefix}${formatMoney(ngnAmount, currency)}${suffix}`;
}

/* For pricing-table rows shaped as {priceNGN, pricePrefix, priceSuffix} or,
   for non-numeric cells like "Custom Quote", {customPrice}. */
export function formatPriceItem(item, currency = "NGN") {
  if (item.customPrice) return item.customPrice;
  return formatPrice(item.priceNGN, currency, {
    prefix: item.pricePrefix || "",
    suffix: item.priceSuffix || "",
  });
}

/* Applies a % discount to an NGN amount, rounded to the nearest naira. */
export function applyDiscount(ngnAmount, discountPercent = 0) {
  if (!discountPercent) return ngnAmount;
  return Math.round(ngnAmount * (1 - discountPercent / 100));
}
