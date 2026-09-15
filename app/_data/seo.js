/* ─────────────────────────────────────────────
   SHARED INTERNATIONAL SEO DATA
   Devola is based in Nigeria but works remotely
   with clients abroad. This is the single source
   for the markets we target across metadata.
───────────────────────────────────────────── */

export const targetCountries = [
  { name: "Nigeria", locale: "en_NG" },
  { name: "the United States", locale: "en_US" },
  { name: "the United Kingdom", locale: "en_GB" },
  { name: "Canada", locale: "en_CA" },
  { name: "Germany", locale: "de_DE" },
  { name: "the Netherlands", locale: "nl_NL" },
  { name: "Spain", locale: "es_ES" },
];

/* Primary locale is Nigeria (en_NG) — everything else goes in alternateLocale. */
export const alternateLocales = targetCountries
  .filter((c) => c.locale !== "en_NG")
  .map((c) => c.locale);

/* Human-readable phrase for descriptions, e.g.
   "Nigeria, the United States, the United Kingdom, Canada, Germany, the Netherlands and Spain" */
export const internationalReach = targetCountries
  .map((c) => c.name)
  .slice(0, -1)
  .join(", ")
  .concat(` and ${targetCountries[targetCountries.length - 1].name}`);

/* Short list used for JSON-LD areaServed and similar structured fields. */
export const countryLabels = [
  "Nigeria",
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "Netherlands",
  "Spain",
];
