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

const tiers = [
  {
    tier: "Sole Proprietorship",
    price: "From ₦25,000",
    note: "service fee only",
    description:
      "Business name registration for freelancers and one-person businesses. Fast, simple, and fully handled.",
    cta: "Get Started",
    highlight: false,
    features: {
      "Business structure": "Sole Proprietorship",
      "Name availability search": true,
      "CAC filing & submission": true,
      "Certificate of registration": true,
      "Mem & Arts of Association": false,
      "Share certificates": false,
      "Company seal": false,
      "TIN registration": true,
      "SCUML enrolment": false,
      "Bank account guidance": false,
      "Annual returns (yr 1)": false,
      "Compliance checklist": true,
      "Digital document delivery": true,
      "Estimated turnaround": "3–5 days",
    },
  },
  {
    tier: "Limited Liability Co.",
    price: "From ₦80,000",
    note: "service fee only",
    description:
      "Full LLC incorporation including all statutory documents, post-registration compliance, and bank account guidance.",
    cta: "Most Popular",
    highlight: true,
    features: {
      "Business structure": "LLC",
      "Name availability search": true,
      "CAC filing & submission": true,
      "Certificate of registration": true,
      "Mem & Arts of Association": true,
      "Share certificates": true,
      "Company seal": true,
      "TIN registration": true,
      "SCUML enrolment": true,
      "Bank account guidance": true,
      "Annual returns (yr 1)": true,
      "Compliance checklist": true,
      "Digital document delivery": true,
      "Estimated turnaround": "5–7 days",
    },
  },
  {
    tier: "NGO / Non-Profit",
    price: "From ₦120,000",
    note: "service fee only",
    description:
      "Incorporated Trustees registration for foundations, faith organisations, associations, and non-profits.",
    cta: "Let's Talk",
    highlight: false,
    features: {
      "Business structure": "Incorporated Trustees",
      "Name availability search": true,
      "CAC filing & submission": true,
      "Certificate of registration": true,
      "Mem & Arts of Association": false,
      "Share certificates": false,
      "Company seal": false,
      "TIN registration": true,
      "SCUML enrolment": true,
      "Bank account guidance": true,
      "Annual returns (yr 1)": true,
      "Compliance checklist": true,
      "Digital document delivery": true,
      "Estimated turnaround": "7–14 days",
    },
  },
];

const featureRows = Object.keys(tiers[0].features);

const addOns = [
  {
    name: "Annual CAC returns",
    price: "From ₦15,000/year",
    desc: "We file your annual returns to keep the company in good standing.",
  },
  {
    name: "NAFDAC registration",
    price: "On request",
    desc: "For food, drugs, cosmetics, and regulated products.",
  },
  {
    name: "Business plan writing",
    price: "From ₦50,000",
    desc: "Investor-ready business plan and financial projections.",
  },
  {
    name: "Trademark registration",
    price: "From ₦60,000",
    desc: "Protect your brand name and logo with FIPO registration.",
  },
  {
    name: "VAT registration",
    price: "₦15,000",
    desc: "Federal Inland Revenue VAT registration for qualifying businesses.",
  },
  {
    name: "Address / Registered office",
    price: "From ₦20,000/year",
    desc: "Use our registered office address if you don't have a physical office.",
  },
];

const faqs = [
  {
    q: "What do the prices include?",
    a: "The prices above are our service fees. Government filing fees charged by the CAC are billed separately at their actual cost with zero markup. We'll give you a full breakdown before any payment is made.",
  },
  {
    q: "What is the payment structure?",
    a: "100% upfront for business registration. Government fees are collected separately once we've confirmed name availability and you're ready to proceed.",
  },
  {
    q: "What if my preferred business name is taken?",
    a: "We run a free name availability search before any payment. If your first choice is taken, we'll advise on alternatives at no extra charge.",
  },
  {
    q: "Do I need to come to any office?",
    a: "No. The entire process is handled remotely. We collect all required documents digitally and handle all CAC interactions on your behalf.",
  },
  {
    q: "What documents do I need to provide?",
    a: "A valid government ID (NIN slip, international passport, or driver's licence), your preferred business name options, a business address, and details of directors or shareholders for LLCs. We send a clear checklist once you engage us.",
  },
  {
    q: "How long does it actually take?",
    a: "Name search takes 1–2 hours. After we receive all your documents and payment, most registrations complete within the stated turnaround. Delays can occur during peak CAC periods.",
  },
];

export default function BusinessRegistrationPricing() {
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
              href="/services/business-registration"
              className="hover:text-[#FF5C00] transition-colors"
            >
              Business Registration
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Pricing</span>
          </div>

          <div className="max-w-2xl">
            <Label text="Pricing" />
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
              Business Registration
              <br />
              <span className="text-[#FF5C00]">Pricing.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Our service fee only. Government fees are billed separately at
              exact cost — no markups, ever.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRICING CARDS
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((p) => (
              <div
                key={p.tier}
                className={`relative rounded-3xl flex flex-col gap-6 p-8 overflow-hidden ${
                  p.highlight
                    ? "bg-slate-900 ring-2 ring-[#FF5C00]"
                    : "bg-white border border-slate-100"
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
                    className={`text-4xl font-extrabold ${p.highlight ? "text-white" : "text-slate-900"}`}
                  >
                    {p.price}
                  </p>
                  <p
                    className={`text-xs mt-1 font-medium ${p.highlight ? "text-slate-500" : "text-slate-400"}`}
                  >
                    {p.note}
                  </p>
                  <p
                    className={`text-sm mt-4 leading-relaxed ${p.highlight ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {p.description}
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className={`inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 mt-auto ${
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

          <div className="mt-6 bg-orange-50 border border-orange-100 rounded-2xl px-6 py-4 flex items-start gap-3 max-w-3xl mx-auto">
            <span className="text-[#FF5C00] font-black text-lg shrink-0">
              !
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Government fees are not included.</strong> CAC filing
              fees, stamp duties, and other government charges are billed
              separately at their actual cost. We will provide a full
              cost breakdown before you commit.
            </p>
          </div>
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
              Compare Every Package
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-2 sticky top-0 bg-[#fafafa] py-3 z-10">
            <div />
            {tiers.map((t) => (
              <div
                key={t.tier}
                className={`rounded-xl py-3 text-center ${t.highlight ? "bg-slate-900" : "bg-slate-100"}`}
              >
                <span
                  className={`text-[10px] font-black uppercase tracking-widest leading-tight px-1 block ${t.highlight ? "text-[#FF5C00]" : "text-slate-500"}`}
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
                {tiers.map((t) => {
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
            <Label text="Additional Services" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Beyond Registration
            </h2>
            <p className="text-slate-500 mt-3">
              Compliance and growth services you can add after your business is
              incorporated.
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
                Ready to make it official?
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Get in touch and we&apos;ll run a free name search and send you
                a complete cost breakdown within 24 hours.
              </p>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 bg-[#FF5C00] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-orange-500 transition-colors"
            >
              Start Registration →
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
