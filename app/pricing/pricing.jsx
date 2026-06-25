import Link from "next/link";
import { BsCheckLg, BsArrowRight } from "react-icons/bs";
import { BiGlobe, BiPhone, BiFile } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import FinalCTA from "../_components/FinalCTA";

const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

const services = [
  {
    id: "web",
    icon: <BiGlobe />,
    iconBg: "bg-blue-50 text-blue-600",
    label: "Web Development",
    tagline: "Hand-coded. Fast. SEO-ready.",
    tiers: [
      {
        tier: "Starter",
        price: "From ₦200,000",
        highlight: false,
        features: [
          "Up to 5 pages",
          "Mobile responsive",
          "Basic SEO setup",
          "Contact form",
          "2 weeks delivery",
          "1 week support",
        ],
      },
      {
        tier: "Business",
        price: "From ₦450,000",
        highlight: true,
        features: [
          "Everything in tier 1",
          "Up to 15 pages",
          "CMS / Blog integration",
          "Advanced SEO",
          "Payment gateway",
          "Custom animations",
          "Admin management system",
          "1 months support",
        ],
      },
      {
        tier: "Enterprise",
        price: "From ₦800,000",
        highlight: false,
        features: [
          "Everything in tier 2",
          "Unlimited pages",
          "Custom backend / API",
          "User authentication",
          "Database design",
          "Admin management system",
          "Dedicated timeline",
          "6 months support",
        ],
      },
    ],
    link: "/pricing/web-development",
    serviceLink: "/services/web-development",
  },
  {
    id: "app",
    icon: <BiPhone />,
    iconBg: "bg-orange-50 text-[#FF5C00]",
    label: "Mobile App Development",
    tagline: "iOS & Android. One codebase.",
    tiers: [
      {
        tier: "Starter",
        price: "From ₦1,500,000",
        highlight: false,
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
      },
      {
        tier: "Business",
        price: "From ₦3,550,000",
        highlight: true,
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
      },
      {
        tier: "Enterprise",
        price: "Custom Quote",
        highlight: false,
        features: [
          "Everything in tier 2",
          "Unlimited screens",
          "Custom API / backend",
          "Multi-role user system",
          "Advanced analytics",
          "Dedicated timeline",
          "Ongoing support",
        ],
      },
    ],
    link: "/pricing/mobile-development",
    serviceLink: "/services/app-development",
  },
  {
    id: "design",
    icon: <MdOutlineDesignServices />,
    iconBg: "bg-purple-50 text-purple-600",
    label: "Graphic Design",
    tagline: "100% custom. No templates.",
    tiers: [
      {
        tier: "Essential",
        price: "From ₦35,000",
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
        price: "From ₦100,000",
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
        price: "Custom Quote",
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
        price: "From ₦25,000",
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
        price: "From ₦80,000",
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
        price: "From ₦120,000",
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
    title: "50% upfront, 50% on delivery",
    desc: "We never ask for full payment before you've seen a finished product.",
  },
  {
    title: "Full ownership on delivery",
    desc: "All source code, design files, and assets transfer to you on final handover.",
  },
  {
    title: "10% NGO & startup discount",
    desc: "Registered non-profits and early-stage startups receive 10% off any service.",
  },
];

export default function Pricing() {
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
              Transparent Pricing.
              <br />
              <span className="text-[#FF5C00]">No Surprises.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              Fixed service fees across every offering. Third-party costs are
              always billed at exact cost — no markups, ever.
            </p>
          </div>

          {/* Quick nav pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {services.map((s) => (
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
          SERVICE PRICING BLOCKS
      ══════════════════════════════ */}
      {services.map((s, si) => (
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
                      {t.price}
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
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                      t.highlight
                        ? "bg-[#FF5C00] text-white hover:bg-orange-500"
                        : "bg-white border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900"
                    }`}
                  >
                    {t.price === "Custom" ? "Let's Talk →" : "Get Started →"}
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
          ALL-SERVICES OVERVIEW TABLE
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Label text="At a Glance" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              All Services, One View.
            </h2>
            <p className="text-slate-500 mt-4 max-w-md mx-auto">
              Starting prices for every service. Click any row for the full
              breakdown.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-2">
            <div />
            {[
              "Starter / Essential",
              "Business / Identity",
              "Enterprise / Custom",
            ].map((h, i) => (
              <div
                key={h}
                className={`rounded-xl py-3 text-center ${i === 1 ? "bg-slate-900" : "bg-slate-100"}`}
              >
                <span
                  className={`text-[10px] font-black uppercase tracking-widest px-2 block ${i === 1 ? "text-[#FF5C00]" : "text-slate-500"}`}
                >
                  {h}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {[
              {
                service: "Web Development",
                link: "/pricing/web-development",
                cols: ["From ₦200,000", "From ₦450,000", "Custom"],
              },
              {
                service: "Mobile App",
                link: "/pricing/mobile-development",
                cols: ["From ₦1,500,000", "From ₦3,550,000", "Custom"],
              },
              {
                service: "Graphic Design",
                link: "/pricing/graphic-design",
                cols: ["From ₦80,000", "From ₦200,000", "Custom"],
              },
              {
                service: "Business Registration",
                link: "/pricing/business-registration",
                cols: ["From ₦25,000", "From ₦80,000", "From ₦120,000"],
              },
            ].map((row, i) => (
              <Link
                key={row.service}
                href={row.link}
                className={`grid grid-cols-4 gap-3 items-center rounded-2xl px-5 py-4 group transition-all duration-200 hover:shadow-md ${
                  i % 2 === 0
                    ? "bg-white border border-slate-100 hover:border-slate-200"
                    : "bg-[#fafafa] border border-transparent hover:bg-white hover:border-slate-100"
                }`}
              >
                <span className="text-sm font-black text-slate-900 group-hover:text-[#FF5C00] transition-colors flex items-center gap-2">
                  {row.service}
                  <BsArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
                </span>
                {row.cols.map((col, ci) => (
                  <span
                    key={ci}
                    className={`text-sm font-bold text-center ${ci === 1 ? "text-[#FF5C00]" : "text-slate-600"}`}
                  >
                    {col}
                  </span>
                ))}
              </Link>
            ))}
          </div>

          <p className="text-xs text-slate-400 text-center mt-6">
            All prices in Nigerian Naira (₦). Third-party fees billed separately
            at exact cost.{" "}
            <Link
              href="/contact"
              className="text-slate-700 font-bold hover:text-[#FF5C00] transition-colors"
            >
              Get a custom quote →
            </Link>
          </p>
        </div>
      </section>

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
                  step: "50%",
                  title: "Upfront to begin",
                  desc: "Paid after scope sign-off. This kickstarts design and development.",
                },
                {
                  step: "50%",
                  title: "On final delivery",
                  desc: "Paid before handover of source code, files, and login credentials.",
                },
                {
                  step: "Alt",
                  title: "Enterprise milestone billing",
                  desc: "Larger projects use an agreed milestone schedule instead of 50/50.",
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
                a: "Prices shown are starting points. Final pricing is scoped to your project — complexity, feature count, and timeline all factor in. We provide a fixed written quote before any work begins.",
              },
              {
                q: "What's not included in the service fee?",
                a: "Domain registration, web hosting, Apple/Google developer account fees, CAC government filing fees, and any third-party software subscriptions are billed separately at exact cost with zero markup.",
              },
              {
                q: "Can I start with a smaller package and upgrade later?",
                a: "Yes. You can upgrade from any tier by paying the difference. We structure code and design files with growth in mind so upgrades don't require starting from scratch.",
              },
              {
                q: "Do you offer payment in instalments?",
                a: "Standard projects use 50% upfront and 50% on delivery. Enterprise projects use a milestone schedule. We don't offer open-ended instalment plans beyond the project agreement.",
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
