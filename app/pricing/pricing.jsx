import Link from "next/link";
import { BsCheckLg, BsArrowRight } from "react-icons/bs";
import { BiGlobe, BiFile } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import FinalCTA from "../_components/FinalCTA";
import SolutionsCatalog from "../_components/SolutionsCatalog";
import OwnershipNote from "../_components/OwnershipNote";
import { formatPriceItem } from "../_lib/currency";
import { getServerCurrency } from "../_lib/currency-server";

const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

const quickNav = [
  { id: "solutions", icon: <BiGlobe />, label: "Websites & Apps" },
  { id: "design", icon: <MdOutlineDesignServices />, label: "Graphic Design" },
  { id: "reg", icon: <BiFile />, label: "Business Registration" },
];

/* Graphic Design and Business Registration aren't in the website/app type
   catalog (SolutionsCatalog) below — their tiers ARE the type (Essential vs.
   Brand Identity vs. Full Suite; Sole Proprietorship vs. LLC vs. NGO), so they
   stay here as dedicated pricing blocks. Web Development and Mobile App
   Development used to have a generic Starter/Business/Enterprise block here
   too, but that's been replaced by the per-type catalog below — a real fixed
   price per website/app type instead of a made-up generic package. */
const packagedServices = [
  {
    id: "design",
    icon: <MdOutlineDesignServices />,
    iconBg: "bg-purple-50 text-purple-600",
    label: "Graphic Design",
    tagline: "100% custom. No templates.",
    tiers: [
      {
        tier: "Essential",
        priceNGN: 35000,
        pricePrefix: "From ",
        highlight: false,
        features: [
          "1 design deliverable",
          "2 initial concepts",
          "2 revision rounds",
          "Jpeg formats",
          "Source files included",
          "Result in 2 days",
        ],
      },
      {
        tier: "Brand Identity",
        priceNGN: 100000,
        pricePrefix: "From ",
        highlight: true,
        features: [
          "Logo (primary + variations)",
          "Colour palette & typography",
          "Brand guideline document",
          "Business card design",
          "Fliers",
          "Invitation card",
          "Social media kit",
          "3 months support",
        ],
      },
      {
        tier: "Full Suite",
        customPrice: "Custom Quote",
        highlight: false,
        features: [
          "Full brand identity",
          "UI/UX design (Figma)",
          "Print & marketing suite",
          "Social media templates",
          "Monthly design retainer",
          "Priority turnaround",
        ],
      },
    ],
    link: "/pricing/graphic-design",
    serviceLink: "/services/graphic-design",
  },
  {
    id: "reg",
    icon: <BiFile />,
    iconBg: "bg-green-50 text-green-600",
    label: "Business Registration",
    tagline: "CAC-registered. 100% remote.",
    tiers: [
      {
        tier: "Sole Proprietorship",
        priceNGN: 25000,
        pricePrefix: "From ",
        highlight: false,
        features: [
          "Name availability search",
          "CAC filing & submission",
          "Certificate of registration",
          "TIN registration",
          "3–5 day turnaround",
        ],
      },
      {
        tier: "LLC",
        priceNGN: 80000,
        pricePrefix: "From ",
        highlight: true,
        features: [
          "Full CAC incorporation",
          "Mem & Arts of Association",
          "Share certificates",
          "TIN + SCUML",
          "Bank account guidance",
        ],
      },
      {
        tier: "NGO / Non-Profit",
        priceNGN: 120000,
        pricePrefix: "From ",
        highlight: false,
        features: [
          "Incorporated Trustees",
          "CAC IT 1 filing",
          "TIN registration",
          "SCUML enrolment",
          "Compliance checklist",
        ],
      },
    ],
    link: "/pricing/business-registration",
    serviceLink: "/services/business-registration",
  },
];

const guarantees = [
  {
    title: "No hidden fees",
    desc: "Service fees are fixed. Third-party costs are billed at exact cost — zero markup.",
  },
  {
    title: "60% upfront, 40% on delivery",
    desc: "We never ask for full payment before you've seen a finished product.",
  },
  {
    title: "Full ownership on delivery",
    desc: "Source code, design files, and every account — domain, hosting, database, storage — transfer to you on final handover.",
  },
  {
    title: "10% NGO & startup discount",
    desc: "Registered non-profits and early-stage startups receive 10% off any service.",
  },
];

export default async function Pricing() {
  const currency = await getServerCurrency();
  return (
    <div className="bg-[#fafafa]">
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-24">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-10">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors duration-200">Home</Link>
            <span className="text-slate-300">›</span>
            <span className="text-slate-700 font-bold">Pricing</span>
          </nav>

          <div className="max-w-3xl">
            <Label text="Pricing" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
              Priced by Type.
              <br />
              <span className="text-[#FF5C00]">No Guesswork.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              No generic estimates — a fixed price for exactly what you&apos;re
              building. Third-party costs are always billed at exact cost, no
              markups, ever.
            </p>
          </div>

          {/* Quick nav pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {quickNav.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-sm font-bold px-5 py-2.5 rounded-full hover:border-[#FF5C00] hover:text-[#FF5C00] transition-all duration-200"
              >
                <span className="text-base">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          GUARANTEE STRIP
      ══════════════════════════════ */}
      <section className="border-t border-b border-slate-100 bg-white py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g) => (
            <div key={g.title} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                ✓
              </span>
              <div>
                <p className="text-sm font-black text-slate-900">{g.title}</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          WEBSITE & APP PRICING BY TYPE
      ══════════════════════════════ */}
      <SolutionsCatalog
        id="solutions"
        heading="Website & App Pricing by Type"
        subheading="Every website and mobile-app type below has a fixed starting price and a full feature breakdown on its own page — no forms, nothing hidden."
      />

      {/* ══════════════════════════════
          DESIGN & REGISTRATION PRICING
      ══════════════════════════════ */}
      {packagedServices.map((s, si) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-24 px-6 md:px-12 border-t border-slate-100 ${si % 2 !== 0 ? "bg-white" : ""}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Service header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-14 gap-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center text-2xl shrink-0`}
                >
                  {s.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    {s.label}
                  </h2>
                  <p className="text-slate-500 text-sm">{s.tagline}</p>
                </div>
              </div>

              <div className="flex gap-3 shrink-0">
                <Link
                  href={s.serviceLink}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors border border-slate-200 px-5 py-2.5 rounded-full hover:border-slate-400"
                >
                  Service page
                </Link>
                <Link
                  href={s.link}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF5C00] hover:text-orange-600 transition-colors border border-orange-200 px-5 py-2.5 rounded-full hover:border-orange-400"
                >
                  Full breakdown <BsArrowRight />
                </Link>
              </div>
            </div>

            {/* Tier cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {s.tiers.map((t) => (
                <div
                  key={t.tier}
                  className={`relative rounded-3xl flex flex-col gap-6 p-8 ${
                    t.highlight
                      ? "bg-slate-900 ring-2 ring-[#FF5C00]"
                      : "bg-[#fafafa] border border-slate-100"
                  }`}
                >
                  {t.highlight && (
                    <div className="absolute top-5 right-5 bg-[#FF5C00] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                      Popular
                    </div>
                  )}

                  <div>
                    <p
                      className={`text-xs font-black uppercase tracking-widest mb-2 ${t.highlight ? "text-[#FF5C00]" : "text-slate-400"}`}
                    >
                      {t.tier}
                    </p>
                    <p
                      className={`text-3xl font-extrabold ${t.highlight ? "text-white" : "text-slate-900"}`}
                    >
                      {formatPriceItem(t, currency)}
                    </p>
                  </div>

                  <ul className="space-y-2.5 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm">
                        <BsCheckLg
                          className={`shrink-0 ${t.highlight ? "text-[#FF5C00]" : "text-green-500"}`}
                        />
                        <span
                          className={
                            t.highlight ? "text-slate-300" : "text-slate-600"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?service=${encodeURIComponent(s.label)}`}
                    className={`inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                      t.highlight
                        ? "bg-[#FF5C00] text-white hover:bg-orange-500"
                        : "bg-white border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900"
                    }`}
                  >
                    {t.customPrice ? "Let's Talk →" : "Get Started →"}
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href={s.link}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#FF5C00] transition-colors group"
              >
                See full feature comparison for {s.label}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ══════════════════════════════
          PAYMENT TERMS
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF5C00] shrink-0" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                  Payment Terms
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                How Payment
                <br />
                Works at Devola.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                We never ask for full payment before you&apos;ve seen results.
                Our structure protects both sides and keeps the project moving.
              </p>
            </div>
            <div className="space-y-5">
              {[
                {
                  step: "60%",
                  title: "Upfront to begin",
                  desc: "Paid after scope sign-off. This kickstarts design and development.",
                },
                {
                  step: "40%",
                  title: "On final delivery",
                  desc: "Paid before handover of source code, files, and login credentials.",
                },
                {
                  step: "Alt",
                  title: "Milestone billing",
                  desc: "Large custom projects use an agreed milestone schedule instead of 60/40.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF5C00] flex items-center justify-center text-white text-xs font-black shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{item.title}</p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          OWNERSHIP / ACCOUNT HANDOVER
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <OwnershipNote />
        </div>
      </section>

      {/* ══════════════════════════════
          PRICING FAQs
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Label text="Pricing FAQs" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Common Pricing
              <br />
              Questions.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Are these prices fixed or can they change?",
                a: "Website and app-type prices are fixed for the exact scope listed on that type's page — no vague estimates. Graphic Design and Business Registration prices are starting points that can vary with complexity. Either way, you get a written quote before any work begins.",
              },
              {
                q: "What's not included in the service fee?",
                a: "Domain registration, web hosting, Apple/Google developer account fees, CAC government filing fees, and any third-party software subscriptions are billed separately at exact cost with zero markup.",
              },
              {
                q: "Can I add features or upgrade later?",
                a: "For website and app types, additional features beyond the listed scope are quoted separately and added on top of the price. For Graphic Design and Business Registration, you can move up to a higher tier at any time by paying the difference.",
              },
              {
                q: "Do you offer payment in instalments?",
                a: "Standard projects use 60% upfront and 40% on delivery. Large custom projects use a milestone schedule. We don't offer open-ended instalment plans beyond the project agreement.",
              },
              {
                q: "What happens if my project goes over scope?",
                a: "Any work outside the agreed scope is quoted separately as a written change request — with a clear price and timeline impact — before we act on it. No surprise invoices.",
              },
            ].map((f) => (
              <div
                key={f.q}
                className="bg-white border border-slate-100 rounded-2xl px-7 py-6 hover:shadow-sm hover:border-slate-200 transition-all duration-200"
              >
                <h3 className="text-sm font-black text-slate-900 mb-2">
                  {f.q}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
