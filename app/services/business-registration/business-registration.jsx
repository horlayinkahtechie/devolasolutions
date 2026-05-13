import Link from "next/link";
import {
  MdVerified,
  MdAccountBalance,
  MdSupportAgent,
  MdOutlineGavel,
} from "react-icons/md";
import {
  BsBuilding,
  BsPeopleFill,
  BsShieldCheck,
  BsFileEarmarkText,
} from "react-icons/bs";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaHandshake, FaUniversity } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import FAQs from "../../_components/FAQs";
import FinalCTA from "../../_components/FinalCTA";

/* ─────────────────────────────────
   SHARED LABEL
───────────────────────────────── */
const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

/* ─────────────────────────────────
   DATA
───────────────────────────────── */
const businessTypes = [
  {
    icon: <BsBuilding />,
    title: "Sole Proprietorship",
    desc: "Ideal for freelancers and one-person businesses. Simple, fast, and low-cost to register.",
  },
  {
    icon: <BsPeopleFill />,
    title: "Limited Liability Company (LLC)",
    desc: "The most popular structure for growing businesses. Protects your personal assets.",
  },
  {
    icon: <HiOfficeBuilding />,
    title: "Private Limited Company (Ltd)",
    desc: "For businesses with multiple shareholders — structured governance and credibility.",
  },
  {
    icon: <FaHandshake />,
    title: "Partnership",
    desc: "Register a formal partnership with a legal agreement between two or more parties.",
  },
  {
    icon: <MdOutlineGavel />,
    title: "NGO / Non-Profit",
    desc: "Incorporated Trustees registration for foundations, associations and faith organisations.",
  },
  {
    icon: <FaUniversity />,
    title: "Public Company (Plc)",
    desc: "For businesses looking to raise capital from the public or list on the stock exchange.",
  },
];

const included = [
  "Business name availability search",
  "CAC registration end to end",
  "Certificate of Incorporation",
  "Memorandum & Articles of Association",
  "Company Seal & Share Certificate",
  "Tax Identification Number (TIN)",
  "SCUML enrolment (if applicable)",
  "Corporate account opening guidance",
  "Registered office address advice",
  "Post-registration compliance checklist",
];

const process = [
  {
    num: "01",
    title: "Name Search",
    desc: "We check your preferred business name(s) against the CAC database and confirm availability before anything is filed.",
  },
  {
    num: "02",
    title: "Document Collection",
    desc: "We send you a clear checklist of what we need — valid ID, director details, address, share structure. No jargon.",
  },
  {
    num: "03",
    title: "Filing & Submission",
    desc: "We prepare and file all forms with the CAC on your behalf. You don't need to visit any office.",
  },
  {
    num: "04",
    title: "CAC Review",
    desc: "The Corporate Affairs Commission reviews and processes the application. Typically 3–7 business days.",
  },
  {
    num: "05",
    title: "Certificate Issued",
    desc: "You receive your Certificate of Incorporation, CAC documents, and all associated files digitally.",
  },
  {
    num: "06",
    title: "Post-Registration",
    desc: "We guide you through TIN registration, bank account opening, and any sector-specific compliance requirements.",
  },
];

const postRegistration = [
  {
    icon: <MdAccountBalance />,
    title: "TIN Registration",
    desc: "Federal Inland Revenue Service (FIRS) Tax Identification Number — required for all corporate transactions.",
  },
  {
    icon: <BsShieldCheck />,
    title: "SCUML Enrolment",
    desc: "Special Control Unit Against Money Laundering enrolment for designated businesses and professionals.",
  },
  {
    icon: <FaUniversity />,
    title: "Corporate Bank Account",
    desc: "Guidance on opening a business account with major Nigerian banks using your new CAC documents.",
  },
  {
    icon: <BsFileEarmarkText />,
    title: "Annual Returns",
    desc: "We handle your annual CAC filing to keep your company in good standing and avoid penalties.",
  },
  {
    icon: <MdVerified />,
    title: "Business Permits",
    desc: "Sector-specific permits — NAFDAC, NAICOM, CBN, SEC — depending on your industry.",
  },
  {
    icon: <MdSupportAgent />,
    title: "Ongoing Compliance",
    desc: "Quarterly and annual compliance calendar so you never miss a regulatory deadline.",
  },
];

const pricing = [
  {
    tier: "Sole Proprietorship",
    price: "From ₦25,000",
    description:
      "Perfect for freelancers, startups, and small businesses that want to register quickly and legally.",

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

    cta: "Get Started",
    highlight: false,
  },

  {
    tier: "Limited Liability Co.",
    price: "From ₦80,000",
    description:
      "Complete company incorporation package for businesses that need a professional and scalable structure.",

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
      "Digital delivery of documents",
      "Priority processing",
      "Post-registration support",
    ],

    cta: "Most Popular",
    highlight: true,
  },

  {
    tier: "NGO / Non-Profit",
    price: "From ₦120,000",
    description:
      "Registration package for foundations, associations, clubs, and faith-based organisations.",

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
      "Digital delivery of documents",
      "Ongoing registration assistance",
    ],

    cta: "Let's Talk",
    highlight: false,
  },
];

const diyVsDevola = [
  {
    factor: "Process knowledge",
    diy: "Navigating CAC portal alone — confusing",
    us: "We've done this hundreds of times",
  },
  {
    factor: "Errors & rejections",
    diy: "Wrong filing = rejection & re-filing fees",
    us: "We verify everything before submission",
  },
  {
    factor: "Time cost",
    diy: "Days spent on forms, queues, and follow-ups",
    us: "You focus on your business, we handle it",
  },
  {
    factor: "Post-registration",
    diy: "You figure out TIN, SCUML, banking alone",
    us: "We guide you through every next step",
  },
  {
    factor: "Document accuracy",
    diy: "Risk of errors in legal documents",
    us: "Professionally prepared and reviewed",
  },
  {
    factor: "Ongoing compliance",
    diy: "Easy to miss annual returns & renewals",
    us: "We track and remind you of every deadline",
  },
];

const testimonials = [
  {
    quote:
      "I tried doing it myself for two months and kept getting errors on the CAC portal. Devola sorted it out in under a week. Wish I'd come to them first.",
    name: "Chiamaka Obi",
    role: "Founder, Obi Catering Services",
    initials: "CO",
  },
  {
    quote:
      "They registered our LLC, sorted the TIN, and even walked us through opening the corporate account. Everything under one roof. Absolute professionals.",
    name: "Seun Adegoke",
    role: "CEO, Trenova Logistics",
    initials: "SA",
  },
];

/* ─────────────────────────────────
   PAGE
───────────────────────────────── */
export default function BusinessRegistration() {
  return (
    <div className="bg-[#fafafa]">
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-24">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-green-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mb-10">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-[#FF5C00] transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">
              Business Registration
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <Label text="Business Registration" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
                Make Your Business
                <br />
                Official — Without
                <br />
                <span className="text-[#FF5C00]">the Headache.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                CAC registration done right, the first time. We handle every
                form, every submission, and every follow-up — so you can focus
                on building your business, not fighting bureaucracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#FF5C00] transition-all duration-300 shadow-lg shadow-slate-900/10"
                >
                  Register My Business →
                </Link>
                <Link
                  href="/pricing/business-registration"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold hover:border-slate-400 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Right: metrics card */}
            <div className="relative hidden lg:flex flex-col gap-4">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                  Why register with us
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "Success Rate",
                      score: "100",
                      unit: "%",
                      color: "text-green-600",
                      bg: "bg-green-50",
                    },
                    {
                      label: "Turnaround",
                      score: "3–7",
                      unit: " days",
                      color: "text-blue-600",
                      bg: "bg-blue-50",
                    },
                    {
                      label: "Office Visits",
                      score: "0",
                      unit: " needed",
                      color: "text-[#FF5C00]",
                      bg: "bg-orange-50",
                    },
                    {
                      label: "CAC Registered",
                      score: "Yes",
                      unit: "",
                      color: "text-purple-600",
                      bg: "bg-purple-50",
                    },
                  ].map(({ label, score, unit, color, bg }) => (
                    <div key={label} className={`${bg} rounded-2xl p-5`}>
                      <div className={`text-3xl font-black ${color}`}>
                        {score}
                        <span className="text-base font-bold opacity-60">
                          {unit}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 font-medium mt-1">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="flex gap-3">
                <div className="flex-1 bg-slate-900 rounded-2xl px-5 py-4 flex items-center gap-3">
                  <span className="text-xl text-[#FF5C00]">
                    <MdVerified />
                  </span>
                  <div>
                    <div className="text-white text-sm font-black">
                      CAC Accredited
                    </div>
                    <div className="text-slate-500 text-xs">
                      officially registered
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-[#FF5C00] rounded-2xl px-5 py-4 flex items-center gap-3">
                  <span className="text-xl text-white">
                    <BiTime />
                  </span>
                  <div>
                    <div className="text-white text-sm font-black">
                      100% remote
                    </div>
                    <div className="text-orange-100 text-xs">
                      no office visits needed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          BUSINESS TYPES
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <Label text="Business Structures" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Which Structure
                <br />
                Is Right for You?
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Not sure which structure fits your goals? We&apos;ll advise you
              during your free discovery call before anything is filed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {businessTypes.map((t, i) => (
              <div
                key={t.title}
                className={`group rounded-2xl border p-6 flex items-start gap-4 cursor-default hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${
                  i === 0
                    ? "bg-slate-900 border-slate-800 text-white"
                    : i === 4
                      ? "bg-[#FF5C00] border-orange-400/20 text-white"
                      : "bg-white border-slate-100 text-slate-900"
                }`}
              >
                <span className="text-2xl shrink-0">{t.icon}</span>
                <div>
                  <h3
                    className={`font-black text-base leading-tight mb-1 ${i === 0 || i === 4 ? "text-white" : "text-slate-900"}`}
                  >
                    {t.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${i === 0 ? "text-slate-400" : i === 4 ? "text-orange-100" : "text-slate-500"}`}
                  >
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHAT'S INCLUDED
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Label text="What You Get" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6">
              Everything You Need
              <br />
              to Open Your Doors.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              From name search to certificate delivery — and every compliance
              step after. We don&apos;t disappear once the CAC approves you.
            </p>
            <Link
              href="/pricing/business-registration"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#FF5C00] transition-colors group"
            >
              See full package details
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-2xl border border-slate-100 px-5 py-4"
              >
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm text-slate-700 font-medium leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          DIY vs DEVOLA
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Label text="The Real Comparison" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              DIY vs. Doing It Right
            </h2>
            <p className="text-slate-500 mt-4 max-w-md mx-auto">
              The CAC portal exists, but a rejected application costs you more
              in time and re-filing fees than our service ever will.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-3 px-4">
            <div />
            <div className="bg-slate-100 rounded-xl py-3 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                DIY / Self-Filing
              </span>
            </div>
            <div className="bg-slate-900 rounded-xl py-3 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">
                Devola Solutions
              </span>
            </div>
          </div>

          <div className="space-y-2">
            {diyVsDevola.map((row, i) => (
              <div
                key={row.factor}
                className={`grid grid-cols-3 gap-3 items-center rounded-2xl p-4 ${i % 2 === 0 ? "bg-white border border-slate-100" : "bg-[#fafafa]"}`}
              >
                <span className="text-sm font-black text-slate-900">
                  {row.factor}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-red-400 text-sm shrink-0">✗</span>
                  <span className="text-xs text-slate-500 leading-snug">
                    {row.diy}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-sm shrink-0">✓</span>
                  <span className="text-xs text-slate-700 font-medium leading-snug">
                    {row.us}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PROCESS
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <Label text="How We Work" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Your Business Is
                <br />
                Legal in 6 Steps.
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              You don&apos;t visit a single government office. We handle every
              interaction with the CAC on your behalf.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((s, i) => (
              <div
                key={s.num}
                className={`rounded-3xl p-8 flex flex-col gap-5 ${
                  i === 0
                    ? "bg-[#FF5C00] text-white"
                    : i === 3
                      ? "bg-slate-900 text-white"
                      : "bg-white border border-slate-100 text-slate-900"
                }`}
              >
                <span
                  className={`text-5xl font-black leading-none ${i === 0 ? "text-orange-200/40" : i === 3 ? "text-slate-700" : "text-slate-100"}`}
                >
                  {s.num}
                </span>
                <div>
                  <h3 className="text-xl font-black tracking-tight mb-2">
                    {s.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${i === 0 ? "text-orange-100" : i === 3 ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          POST-REGISTRATION SERVICES
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <Label text="After Registration" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                We Don&apos;t Stop
                <br />
                at the Certificate.
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Registration is day one. We help you stay compliant and build the
              operational foundation your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {postRegistration.map((s, i) => (
              <div
                key={s.title}
                className={`rounded-2xl border p-6 flex items-start gap-4 cursor-default hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${
                  i === 1
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-100"
                }`}
              >
                <span
                  className={`text-2xl shrink-0 ${i === 1 ? "text-[#FF5C00]" : "text-slate-400"}`}
                >
                  {s.icon}
                </span>
                <div>
                  <h3
                    className={`font-black text-base leading-tight mb-1 ${i === 1 ? "text-white" : "text-slate-900"}`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${i === 1 ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CAC CALLOUT
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 mb-6">
                <MdVerified className="text-[#FF5C00]" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                  CAC Registered Partner
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                We&apos;re Registered
                <br />
                With the CAC Too.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                We&apos;re not a middleman operating in the grey. Devola
                Solutions is a fully incorporated Nigerian company — which means
                we understand exactly what your business needs to pass CAC
                review, because we&apos;ve been through it ourselves.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Fully incorporated in Nigeria",
                "Experience with CAC processes across all business types",
                "Existing relationships with regulatory bodies",
                "Transparent pricing — no hidden government fees",
                "End-to-end handling with status updates throughout",
                "Post-registration compliance support included",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF5C00]/20 text-[#FF5C00] flex items-center justify-center text-xs font-black shrink-0">
                    ✓
                  </span>
                  <span className="text-sm text-slate-300 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRICING PREVIEW
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
            <p className="text-slate-500 max-w-xs leading-relaxed">
              Government filing fees are charged separately at cost with no
              markup. You always know exactly what you&apos;re paying.
            </p>
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
            All prices are in Nigerian Naira (₦). Government fees billed
            separately at cost.{" "}
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
          TESTIMONIALS
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <Label text="Client Stories" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Real Businesses.
              <br />
              Now Fully Legal.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl border border-slate-100 p-8 flex flex-col justify-between min-h-56 relative overflow-hidden"
              >
                <span className="absolute top-4 right-6 text-[6rem] font-black leading-none text-slate-100 select-none pointer-events-none">
                  &ldquo;
                </span>
                <p className="relative z-10 text-base text-slate-700 font-medium leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-black text-slate-500 shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FAQs (defaults to Business Registration tab)
      ══════════════════════════════ */}
      <div className="border-t border-slate-100">
        <FAQs defaultTab="Business Registration" />
      </div>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <FinalCTA />
    </div>
  );
}
