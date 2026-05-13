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
    tier: "Essential",
    price: "From ₦35,000",
    description:
      "Perfect for businesses that need a professional design asset delivered quickly and affordably.",

    features: [
      "1 professional design deliverable",
      "2 initial design concepts",
      "Up to 2 revision rounds",
      "High-resolution PNG & JPEG files",
      "Source files included",
      "Commercial usage rights",
      "Fast 2-day delivery",
    ],

    cta: "Get Started",
    highlight: false,
  },

  {
    tier: "Brand Identity",
    price: "From ₦100,000",
    description:
      "A complete visual identity system for businesses that want a strong and consistent brand presence.",

    features: [
      "Primary logo + logo variations",
      "Brand colour palette",
      "Typography selection",
      "Brand guideline document",
      "Business card design",
      "Flyer design",
      "Invitation card design",
      "Social media kit",
      "Profile & cover graphics",
      "Source files included",
      "Priority revisions",
      "1 month support",
    ],

    cta: "Most Popular",
    highlight: true,
  },

  {
    tier: "Full Brand Suite",
    price: "Custom Quote",
    description:
      "A premium branding solution that combines identity design, UI/UX, marketing assets, and ongoing creative support.",

    features: [
      "Everything in Brand Identity",
      "Complete UI/UX design in Figma",
      "Website or app design system",
      "Marketing & print materials",
      "Social media templates",
      "Presentation / pitch deck design",
      "Monthly design retainer",
      "Unlimited design requests",
      "Priority turnaround time",
      "Dedicated creative support",
    ],

    cta: "Let's Talk",
    highlight: false,
  },
];

const featureRows = Object.keys(pricing[0].features);

const addOns = [
  {
    name: "Logo design only",
    price: "From ₦60,000",
    desc: "Standalone logo without a full brand identity package.",
  },
  {
    name: "Social media templates",
    price: "From ₦40,000",
    desc: "5 customisable post/story templates in Canva or Figma.",
  },
  {
    name: "Pitch deck design",
    price: "From ₦80,000",
    desc: "Up to 20 slides — layout, icons, and infographics.",
  },
  {
    name: "Extra revision round",
    price: "₦10,000/round",
    desc: "Additional round beyond what your package includes.",
  },
  {
    name: "Rush delivery",
    price: "+50% of project fee",
    desc: "Delivery within 3 business days.",
  },
  {
    name: "Print vendor management",
    price: "₦20,000",
    desc: "We liaise with a printer and manage your print production.",
  },
];

const faqs = [
  {
    q: "What do I need to provide before work starts?",
    a: "A creative brief covering your brand story, target audience, competitor references, colours you like/dislike, and any existing assets. We send you a questionnaire to make this easy.",
  },
  {
    q: "What is the payment structure?",
    a: "50% upfront to begin, 50% before final file delivery. For ongoing retainers, payment is monthly in advance.",
  },
  {
    q: "What if I don't like the initial concepts?",
    a: "We present 2–3 distinct directions based on your brief. If none land, we dig deeper into your feedback and present a fresh round at no extra charge — this has rarely been needed.",
  },
  {
    q: "Do I own the final designs?",
    a: "Yes, 100%. You receive full intellectual property rights to all delivered work, including editable source files.",
  },
  {
    q: "Can you work from an existing brand?",
    a: "Absolutely. We can extend, refresh, or apply an existing brand system to new deliverables without starting from scratch.",
  },
];

export default function GraphicDesignPricing() {
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
              href="/services/graphic-design"
              className="hover:text-[#FF5C00] transition-colors"
            >
              Graphic Design
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Pricing</span>
          </div>

          <div className="max-w-2xl">
            <Label text="Pricing" />
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
              Graphic Design
              <br />
              <span className="text-[#FF5C00]">Pricing.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Fixed scopes, clear deliverables, and no revision surprises. You
              always know exactly what you&apos;re getting.
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
            <Link
              href="/pricing/graphic-design"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#FF5C00] transition-colors group shrink-0"
            >
              View full pricing breakdown
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
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
              Need a single asset outside a full package? Pick exactly what you
              need.
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
                Not sure which package you need?
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Tell us what you&apos;re building and we&apos;ll recommend the
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
