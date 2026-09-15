import Link from "next/link";
import FinalCTA from "../../_components/FinalCTA";
import SolutionsCatalog from "../../_components/SolutionsCatalog";
import OwnershipNote from "../../_components/OwnershipNote";
import { formatPriceItem } from "../../_lib/currency";
import { getServerCurrency } from "../../_lib/currency-server";

const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

const addOns = [
  {
    name: "Extra screens",
    priceNGN: 25000,
    priceSuffix: "/screen",
    desc: "Additional screens beyond what's listed for your app type.",
  },
  {
    name: "Third-party API integration",
    priceNGN: 50000,
    pricePrefix: "From ",
    desc: "Per external service (e.g. Google Maps, Twilio, etc.).",
  },
  {
    name: "Multi-language (i18n)",
    priceNGN: 80000,
    pricePrefix: "From ",
    desc: "Full app internationalisation for additional languages.",
  },
  {
    name: "Biometric authentication",
    priceNGN: 40000,
    desc: "Face ID / fingerprint login on both platforms.",
  },
  {
    name: "Extended support",
    priceNGN: 35000,
    priceSuffix: "/month",
    desc: "Bug fixes, OS compatibility updates beyond included window.",
  },
  {
    name: "App Store optimisation",
    priceNGN: 45000,
    desc: "Keyword research, A/B screenshots, and listing copy.",
  },
];

const faqs = [
  {
    q: "What is the payment structure?",
    a: "60% upfront to begin work, 40% before the final build is handed over. Large custom projects (like fintech or logistics apps) use a milestone-based payment schedule agreed at the start.",
  },
  {
    q: "Are Apple Developer and Google Play accounts included?",
    a: "Developer account fees ($100/year Apple, ~$25 one-time Google) are billed separately at cost. If you already have accounts we use those at no extra charge.",
  },
  {
    q: "What happens if Apple or Google rejects the app?",
    a: "Rejection fixes and resubmission are included within the post-launch support window. We've never had a final app permanently rejected.",
  },
  {
    q: "The price doesn't cover a feature I need — what happens?",
    a: "Each price covers the exact scope listed on that app type's page. Features outside that scope are quoted separately as add-ons, and the total price increases accordingly — always confirmed in writing before we start.",
  },
  {
    q: "Do you maintain the app after support expires?",
    a: "Yes, via a monthly maintenance retainer. This covers OS compatibility updates (new iOS/Android releases), bug fixes, and performance monitoring.",
  },
];

export default async function MobileDevelopmentPricing() {
  const currency = await getServerCurrency();
  return (
    <div className="bg-[#fafafa]">
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-20">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mb-10">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services/app-development"
              className="hover:text-[#FF5C00] transition-colors"
            >
              App Development
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Pricing</span>
          </div>

          <div className="max-w-2xl">
            <Label text="Pricing" />
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
              App Development
              <br />
              <span className="text-[#FF5C00]">Pricing.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              No estimates, no ranges — a fixed price for every app type we
              build. Pick yours below to see the exact price and everything
              included. Developer account fees and third-party services are
              billed separately at cost.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRICE BY APP TYPE
      ══════════════════════════════ */}
      <div className="border-t border-slate-100">
        <SolutionsCatalog
          filter="mobile"
          id="app-types"
          heading="App Pricing by Type"
          subheading="Every app type has a fixed starting price and a full feature list on its own page. Click yours to see exactly what's included — e-commerce, utility bill payment, fintech and logistics & delivery."
        />
      </div>

      {/* ══════════════════════════════
          OWNERSHIP / ACCOUNT HANDOVER
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <OwnershipNote />
        </div>
      </section>

      {/* ══════════════════════════════
          ADD-ONS
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Label text="Optional Add-Ons" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Extend Any App
            </h2>
            <p className="text-slate-500 mt-3">
              Bolt on individual features to any app type. Any add-on you
              choose is added on top of that type&apos;s listed price.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((a) => (
              <div
                key={a.name}
                className="bg-white border border-slate-100 rounded-2xl px-6 py-5 flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-black text-slate-900">
                    {a.name}
                  </span>
                  <span className="text-sm font-black text-[#FF5C00] shrink-0">
                    {formatPriceItem(a, currency)}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PAYMENT & FAQ
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Label text="Pricing FAQs" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Common Pricing Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="bg-white border border-slate-100 rounded-2xl px-7 py-6"
              >
                <h3 className="text-sm font-black text-slate-900 mb-2">
                  {f.q}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-slate-900 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white font-black text-lg">
                Not sure which type fits?
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Book a free 20-minute discovery call and we&apos;ll map out the
                right scope for your budget.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-[#FF5C00] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-orange-500 transition-colors"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
