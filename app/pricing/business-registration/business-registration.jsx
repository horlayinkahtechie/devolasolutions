import Link from "next/link";
import FinalCTA from "../../_components/FinalCTA";

const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

const packages = [
  {
    tier: "Sole Proprietorship",
    description:
      "For freelancers, sole traders, and small businesses that want to trade legally under a registered business name.",
    features: [
      "Business name availability search",
      "CAC business name registration",
      "Official CAC certificate",
      "TIN registration",
      "Digital document delivery",
      "Basic registration guidance",
      "3–5 business days processing",
      "Post-registration support",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
  {
    tier: "Limited Liability Co.",
    description:
      "Full company incorporation for businesses that need a professional, scalable, and investor-ready legal structure.",
    features: [
      "Full CAC company incorporation",
      "Name reservation & approval",
      "Memorandum & Articles of Association",
      "Share certificates",
      "Company status report",
      "Company seal",
      "TIN registration",
      "SCUML registration",
      "Bank account setup guidance",
      "Digital delivery of all documents",
      "Priority processing",
      "Post-registration support",
    ],
    cta: "Get a Quote",
    highlight: true,
  },
  {
    tier: "NGO / Non-Profit",
    description:
      "For foundations, associations, clubs, and faith-based organisations that need formal recognition.",
    features: [
      "Incorporated Trustees registration",
      "CAC IT1 filing",
      "Constitution drafting assistance",
      "Trustee verification support",
      "Name reservation",
      "TIN registration",
      "Compliance checklist",
      "Publication guidance",
      "Document preparation support",
      "Digital delivery of all documents",
      "Ongoing registration assistance",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
];

const addOns = [
  {
    name: "Annual CAC Returns",
    desc: "We file your annual returns on time to keep your company in good standing with the CAC.",
  },
  {
    name: "NAFDAC Registration",
    desc: "For food, drugs, cosmetics, and other regulated products — handled end to end.",
  },
  {
    name: "Business Plan Writing",
    desc: "Investor-ready business plan with financial projections and market analysis.",
  },
  {
    name: "Trademark Registration",
    desc: "Protect your brand name and logo with a FIPO trademark registration.",
  },
  {
    name: "VAT Registration",
    desc: "Federal Inland Revenue VAT registration for businesses meeting the threshold.",
  },
  {
    name: "Registered Office Address",
    desc: "Use our address as your official registered office if you don't have a physical location.",
  },
];

const faqs = [
  {
    q: "How does pricing work?",
    a: "We provide a full cost breakdown before you commit to anything. Our quote covers service fees only — government filing fees charged by the CAC are billed separately at their actual cost with zero markup.",
  },
  {
    q: "What is the payment structure?",
    a: "100% upfront for our service fee. Government fees are collected separately once we have confirmed name availability and you are ready to proceed.",
  },
  {
    q: "What if my preferred business name is taken?",
    a: "We run a free name availability search before any payment. If your first choice is unavailable, we will advise on alternatives at no extra charge.",
  },
  {
    q: "Do I need to visit any office?",
    a: "No. The entire process is handled remotely. We collect all required documents digitally and manage all CAC interactions on your behalf.",
  },
  {
    q: "What documents do I need to provide?",
    a: "A valid government ID (NIN slip, international passport, or driver's licence), your preferred business name options, a business address, and director or shareholder details for LLCs. We send a clear checklist as soon as you engage us.",
  },
  {
    q: "How long does registration take?",
    a: "Name search takes 1–2 hours. After we receive all documents, most registrations complete within the stated turnaround. Delays can occur during peak CAC periods — we will always keep you informed.",
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
              <span className="text-[#FF5C00]">Packages.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every registration is different — government fees, name
              availability, and required documents vary per case. Get in touch
              for a free quote and full cost breakdown before you commit to
              anything.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PACKAGE CARDS
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {packages.map((p) => (
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
                    className={`text-xs font-black uppercase tracking-widest mb-3 ${p.highlight ? "text-[#FF5C00]" : "text-slate-400"}`}
                  >
                    {p.tier}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${p.highlight ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {p.description}
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`shrink-0 mt-0.5 ${p.highlight ? "text-[#FF5C00]" : "text-green-500"}`}
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
            <span className="text-[#FF5C00] font-black text-lg shrink-0">!</span>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Government fees are not included.</strong> CAC filing
              fees, stamp duties, and other government charges are billed
              separately at their actual cost — no markups. We will provide a
              full breakdown before any payment is made.
            </p>
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
                <span className="text-sm font-black text-slate-900">
                  {a.name}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {a.desc}
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#FF5C00] hover:underline mt-1 self-start"
                >
                  Get a quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FAQs
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Label text="Pricing FAQs" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Common Questions
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
              href="/contact"
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
