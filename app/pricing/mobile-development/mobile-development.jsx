import Link from "next/link";
import { BsCheckLg, BsDashLg } from "react-icons/bs";
import FinalCTA from "../../_components/FinalCTA";

const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

const pricing = [
  {
    tier: "Starter",
    price: "From ₦1,500,000",
    description:
      "Perfect for MVPs and simple apps that need to ship fast and validate an idea.",
    features: [
      "UI/UX Design",
      "iOS & Android",
      "Up to 15 screens",
      "User auth (email/phone)",
      "Basic push notifications",
      "Basic Admin Management System",
      "App Store submission",
      "2 weeks support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    tier: "Business",
    price: "From ₦3,550,000",
    description:
      "For apps that need payments, real-time features, and a proper admin dashboard.",
    features: [
      "Everything in tier 1",
      "iOS & Android",
      "Up to 40 screens",
      "Social Sign up/Sign in",
      "Payment integration",
      "Real-time features",
      "Advance push notifications",
      "Complex Admin Management System",
      "1 months support",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    tier: "Enterprise",
    price: "Custom Quote",
    description:
      "Complex platforms with custom backends, third-party APIs, and advanced architecture.",
    features: [
      "Everything in tier 2",
      "Unlimited screens",
      "Custom API / backend",
      "Multi-role user system",
      "Advanced analytics",
      "Dedicated timeline",
      "Ongoing support",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

const featureRows = Object.keys(pricing[0].features);

const addOns = [
  {
    name: "Extra screens",
    price: "₦25,000/screen",
    desc: "Additional screens beyond your tier limit.",
  },
  {
    name: "Third-party API integration",
    price: "From ₦50,000",
    desc: "Per external service (e.g. Google Maps, Twilio, etc.).",
  },
  {
    name: "Multi-language (i18n)",
    price: "From ₦80,000",
    desc: "Full app internationalisation for additional languages.",
  },
  {
    name: "Biometric authentication",
    price: "₦40,000",
    desc: "Face ID / fingerprint login on both platforms.",
  },
  {
    name: "Extended support",
    price: "₦35,000/month",
    desc: "Bug fixes, OS compatibility updates beyond included window.",
  },
  {
    name: "App Store optimisation",
    price: "₦45,000",
    desc: "Keyword research, A/B screenshots, and listing copy.",
  },
];

const faqs = [
  {
    q: "What is the payment structure?",
    a: "60% upfront to begin work, 40% before the final build is handed over. Enterprise projects use a milestone-based payment schedule agreed at the start.",
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
    q: "Can I add features after launch?",
    a: "Yes. Feature additions after the initial scope are quoted separately. We recommend planning a v2 scope before launch so we can structure the codebase for it.",
  },
  {
    q: "Do you maintain the app after support expires?",
    a: "Yes, via a monthly maintenance retainer. This covers OS compatibility updates (new iOS/Android releases), bug fixes, and performance monitoring.",
  },
];

export default function MobileDevelopmentPricing() {
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
              Fixed prices. No hidden fees. Developer account fees and
              third-party services billed separately at cost.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRICING CARDS
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <Label text="Pricing" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Clear Prices.
                <br />
                No Surprises.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricing.map((p) => (
              <div
                key={p.tier}
                className={`relative rounded-3xl flex flex-col gap-6 overflow-hidden ${
                  p.highlight
                    ? "bg-slate-900 p-8 ring-2 ring-[#FF5C00]"
                    : "bg-white border border-slate-100 p-8"
                }`}
              >
                {p.highlight && (
                  <div className="absolute top-5 right-5 bg-[#FF5C00] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Popular
                  </div>
                )}
                <div>
                  <p
                    className={`text-xs font-black uppercase tracking-widest mb-2 ${p.highlight ? "text-[#FF5C00]" : "text-slate-400"}`}
                  >
                    {p.tier}
                  </p>
                  <p
                    className={`text-3xl font-extrabold ${p.highlight ? "text-white" : "text-slate-900"}`}
                  >
                    {p.price}
                  </p>
                  <p
                    className={`text-sm mt-3 leading-relaxed ${p.highlight ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {p.description}
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <span
                        className={`shrink-0 ${p.highlight ? "text-[#FF5C00]" : "text-slate-400"}`}
                      >
                        ✓
                      </span>
                      <span
                        className={
                          p.highlight ? "text-slate-300" : "text-slate-600"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className={`inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                    p.highlight
                      ? "bg-[#FF5C00] text-white hover:bg-orange-500"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {p.cta} →
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            All prices are in Nigerian Naira (₦). Final quote depends on scope.{" "}
            <Link
              href="/#contact"
              className="text-slate-700 font-bold hover:text-[#FF5C00] transition-colors"
            >
              Get a free custom quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════
          FULL COMPARISON TABLE
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Label text="Full Breakdown" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Compare Every Feature
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-2 sticky top-0 bg-[#fafafa] py-3 z-10">
            <div />
            {pricing.map((t) => (
              <div
                key={t.tier}
                className={`rounded-xl py-3 text-center ${t.highlight ? "bg-slate-900" : "bg-slate-100"}`}
              >
                <span
                  className={`text-xs font-black uppercase tracking-widest ${t.highlight ? "text-[#FF5C00]" : "text-slate-500"}`}
                >
                  {t.tier}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-1">
            {featureRows.map((feature, i) => (
              <div
                key={feature}
                className={`grid grid-cols-4 gap-3 items-center rounded-xl px-4 py-3.5 ${i % 2 === 0 ? "bg-white border border-slate-100" : ""}`}
              >
                <span className="text-sm text-slate-700 font-medium">
                  {feature}
                </span>
                {pricing.map((t) => {
                  const val = t.features[feature];
                  return (
                    <div key={t.tier} className="flex justify-center">
                      {typeof val === "boolean" ? (
                        val ? (
                          <BsCheckLg className="text-green-500 text-base" />
                        ) : (
                          <BsDashLg className="text-slate-300 text-base" />
                        )
                      ) : (
                        <span
                          className={`text-xs font-bold text-center ${t.highlight ? "text-[#FF5C00]" : "text-slate-700"}`}
                        >
                          {val}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
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
              Extend Any Package
            </h2>
            <p className="text-slate-500 mt-3">
              Bolt on individual features without upgrading to a full higher
              tier.
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
                    {a.price}
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
                Not sure which tier fits?
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Book a free 20-minute discovery call and we&apos;ll map out the
                right scope for your budget.
              </p>
            </div>
            <Link
              href="/#contact"
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
