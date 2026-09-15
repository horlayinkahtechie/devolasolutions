import { BsBank, BsGlobe2 } from "react-icons/bs";

const servedCountries = [
  "🇳🇬 Nigeria",
  "🇺🇸 United States",
  "🇬🇧 United Kingdom",
  "🇨🇦 Canada",
  "🇩🇪 Germany",
  "🇳🇱 Netherlands",
  "🇪🇸 Spain",
];

const clients = [
  "GTA Hotels",
  "That Local Girl",
  "LolasElan",
  "Royal Moss Hotel",
  "LolasElan",
  "Amazon World",
  "PrimeTech Nigeria",
  "Yordson Apartments",
  "Ayora Tribe Limited",
  "Peace Apartments",
  "Precious apartments",
  "Campfleet",
  "Dwelcore", 
  "With Love by TLG",
  "Haut Logistics"
];

const TrustBar = () => (
  <section className="bg-white border-y border-slate-100 px-5 md:px-10 py-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4 mb-9">
        <span className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full px-4 py-2 w-fit shrink-0">
          <BsBank className="text-slate-500 text-sm" />
          <span className="text-xs font-bold text-slate-700">CAC Registered Business · RC 9717931</span>
        </span>
        <span className="text-sm text-slate-400 font-medium">
          Trusted by growing businesses and brands — including:
        </span>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center gap-14 w-max animate-marquee">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="text-lg sm:text-xl font-black tracking-tight text-slate-300 shrink-0 whitespace-nowrap"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-9 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <span className="inline-flex items-center gap-2 shrink-0">
          <BsGlobe2 className="text-slate-400 text-sm" />
          <span className="text-sm text-slate-400 font-medium">
            Remote-first — serving clients across:
          </span>
        </span>
        <div className="flex flex-wrap gap-2">
          {servedCountries.map((c) => (
            <span
              key={c}
              className="text-xs font-bold text-slate-600 bg-slate-50 border border-slate-100 rounded-full px-3 py-1.5"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustBar;
