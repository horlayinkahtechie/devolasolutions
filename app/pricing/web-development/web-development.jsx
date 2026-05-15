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
    price: "From ₦200,000",
    description:
      "Perfect for startups and small businesses that need a professional online presence.",

    features: [
      "Modern and mobile responsive design",
      "Up to 5 pages",
      "Contact form integration",
      "WhatsApp integration",
      "Basic SEO setup",
      "Fast loading performance",
      "Social media links integration",
      "SSL security setup",
      "Free deployment",
      "2 weeks delivery",
      "1 week post-launch support",
    ],

    cta: "Get Started",
    highlight: false,
  },

  {
    tier: "Business",
    price: "From ₦450,000",
    description:
      "Ideal for growing businesses that need advanced functionality and content management.",

    features: [
      "Everything in Starter",
      "Up to 15 pages",
      "CMS / Blog integration",
      "Payment gateway integration",
      "Admin dashboard",
      "Custom animations",
      "Product management system",
      "Up to 200 product uploads",
      "Email notification system",
      "User authentication",
      "Advanced SEO optimization",
      "Analytics integration",
      "Database integration",
      "1 currency support",
      "Priority support",
      "1 month post-launch support",
    ],

    cta: "Most Popular",
    highlight: true,
  },

  {
    tier: "Enterprise",
    price: "From ₦800,000",
    description:
      "Best for SaaS platforms, large businesses, and fully custom web applications.",

    features: [
      "Everything in Business",
      "Unlimited pages",
      "Custom backend development",
      "API integrations",
      "Advanced authentication",
      "Role-based access system",
      "Multi-currency support",
      "Custom dashboard & analytics",
      "Booking or reservation systems",
      "Scalable cloud database architecture",
      "Advanced security implementation",
      "Performance optimization",
      "Third-party integrations",
      "Dedicated project timeline",
      "Ongoing maintenance & support",
    ],

    cta: "Let's Talk",
    highlight: false,
  },
];

const featureRows = Object.keys(pricing[0].features);

const addOns = [
  {
    name: "Extra pages",
    price: "₦15,000/page",
    desc: "Additional pages beyond your tier limit.",
  },
  {
    name: "Logo & brand identity",
    price: "From ₦80,000",
    desc: "Full logo design and brand guidelines.",
  },
  {
    name: "Copywriting",
    price: "From ₦30,000",
    desc: "Professional copy for up to 5 pages.",
  },
  {
    name: "Extended support",
    price: "₦25,000/month",
    desc: "Beyond included support window.",
  },
  {
    name: "Speed optimisation audit",
    price: "₦40,000",
    desc: "Detailed PageSpeed improvements on an existing site.",
  },
  {
    name: "Monthly maintenance",
    price: "₦20,000/month",
    desc: "Updates, security patches, and monitoring.",
  },
];

const faqs = [
  {
    q: "Are government or hosting fees included in the price?",
    a: "No. The prices above are our service fees only. Domain registration, hosting (Vercel, Netlify, AWS), and third-party service subscriptions are billed separately at cost with no markup.",
  },
  {
    q: "What payment structure do you use?",
    a: "We require 50% upfront to begin work and the remaining 50% before final delivery and handover. For Enterprise projects we agree on a milestone-based payment plan.",
  },
  {
    q: "Can I upgrade from Starter to Business later?",
    a: "Yes. You can upgrade at any time by paying the difference. We never lock you into a tier.",
  },
  {
    q: "What if my project needs features from a higher tier?",
    a: "We'll recommend the right tier during our discovery call. If a single feature from a higher tier is needed, we can often add it as an add-on to your chosen tier.",
  },
  {
    q: "Do you offer discounts for NGOs or startups?",
    a: "Yes, we offer a 10% discount for registered NGOs and early-stage startups. Mention this during your discovery call.",
  },
];

export default function WebDevelopmentPricing() {
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
              href="/services/web-development"
              className="hover:text-[#FF5C00] transition-colors"
            >
              Web Development
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Pricing</span>
          </div>

          <div className="max-w-2xl">
            <Label text="Pricing" />
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
              Web Development
              <br />
              <span className="text-[#FF5C00]">Pricing.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              No hidden fees. Government and hosting costs are always billed at
              cost with zero markup.
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
                  href="/contact"
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
              href="/contact"
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

          {/* Header row */}
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
              Add individual services to any tier without jumping to a higher
              package.
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
                Book a free 20-minute discovery call and we&apos;ll recommend
                the right package for your goals.
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
