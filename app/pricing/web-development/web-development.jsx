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
    name: "Extra pages",
    priceNGN: 15000,
    priceSuffix: "/page",
    desc: "Additional pages beyond what's listed for your website type.",
  },
  {
    name: "Logo & brand identity",
    priceNGN: 80000,
    pricePrefix: "From ",
    desc: "Full logo design and brand guidelines.",
  },
  {
    name: "Copywriting",
    priceNGN: 30000,
    pricePrefix: "From ",
    desc: "Professional copy for up to 5 pages.",
  },
  {
    name: "Extended support",
    priceNGN: 25000,
    priceSuffix: "/month",
    desc: "Beyond the support window included with your build.",
  },
  {
    name: "Speed optimisation audit",
    priceNGN: 40000,
    desc: "Detailed PageSpeed improvements on an existing site.",
  },
  {
    name: "Monthly maintenance",
    priceNGN: 20000,
    priceSuffix: "/month",
    desc: "Updates, security patches, and monitoring.",
  },
];

const faqs = [
  {
    q: "Are government or hosting fees included in the price?",
    a: "No. The prices shown are our build fees only. Domain registration, hosting (Vercel, Netlify, AWS), and third-party service subscriptions are billed separately at cost with no markup.",
  },
  {
    q: "What payment structure do you use?",
    a: "We collect 60% upfront to begin work and the remaining 40% before final delivery and handover. Large custom projects use a milestone-based payment plan agreed at the start.",
  },
  {
    q: "The price listed doesn't cover everything I need — what happens?",
    a: "Each price covers the exact scope listed on that website type's page. If you want features outside that scope, we quote them separately as add-ons and the total price increases accordingly — we'll always confirm this in writing before starting.",
  },
  {
    q: "My website type isn't a perfect match — can you still help?",
    a: "Yes. The listed types cover our most common builds. If yours is a mix of two types or something more specific, tell us during your discovery call and we'll quote it against the closest match plus any extra features.",
  },
  {
    q: "Do you offer discounts for NGOs or startups?",
    a: "Yes, we offer a 10% discount for registered NGOs and early-stage startups. Mention this during your discovery call.",
  },
];

export default async function WebDevelopmentPricing() {
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
              No estimates, no ranges — a fixed price for every website type we
              build. Pick yours below to see the exact price and everything
              included. Government and hosting costs are always billed at cost
              with zero markup.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRICE BY WEBSITE TYPE
      ══════════════════════════════ */}
      <div className="border-t border-slate-100">
        <SolutionsCatalog
          filter="web"
          id="website-types"
          heading="Website Pricing by Type"
          subheading="Every website type has a fixed price and a full feature list on its own page. Click yours to see exactly what's included — portfolio, company, e-commerce, hotel, CRM, school, real estate and more."
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
              Extend Any Website
            </h2>
            <p className="text-slate-500 mt-3">
              Add individual features to any website type without changing its
              core scope. Any add-on you choose is added on top of that type&apos;s
              listed price.
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
                Book a free 20-minute discovery call and we&apos;ll recommend
                the right build for your goals.
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
