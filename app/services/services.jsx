import Link from "next/link";
import { BiGlobe, BiMobile, BiPhone, BiSupport } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import Portfolio from "../_components/Portfolio";
import FAQs from "../_components/FAQs";
import FinalCTA from "../_components/FinalCTA";
import { GiCheckMark } from "react-icons/gi";
import { BsBank, BsLightningCharge, BsStarFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FcDocument } from "react-icons/fc";

/* ─────────────────────────────────────────────
   SHARED LABEL
───────────────────────────────────────────── */
const SectionLabel = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  {
    num: "01",
    icon: <CgWebsite />,
    title: "Web Development",
    tagline: "Your digital home base, built right.",
    desc: "We build fast, scalable, and SEO-optimised website and web applications. From sleek landing pages to complex web applications. Every site we deliver is production-ready and built to convert.",
    features: [
      "Business websites & landing pages",
      "E-commerce platforms",
      "Hotel Management System",
      "Restaurant website with booking system",
      "Church Website",
      "School Website",
      "Real Estate website",
      "Web applications & SaaS dashboards",
      "Technical SEO & Core Web Vitals optimisation",
      "CMS integration (headless or traditional)",
      "Hosting setup on Vercel, AWS, or Netlify",
    ],
    iconBg: "bg-blue-50 text-blue-600",
    tag: "bg-blue-50 text-blue-600",
    card: "bg-white border-slate-100",
    text: "text-slate-900",
    muted: "text-slate-500",
    numColor: "text-slate-300",
    featureDot: "bg-blue-500",
    serviceLink: "/services/web-development",
    servicePricingLink: "/pricing/web-development",
  },
  {
    num: "02",
    icon: <BiMobile />,
    title: "Mobile App Development",
    tagline: "Native experiences. One codebase.",
    desc: "Cross-platform iOS and Android apps built with React Native. We handle everything from design and development to Google Playstore and App Store submission and post-launch maintenance.",
    features: [
      "iOS & Android (React Native / Expo)",
      "Custom UI matched to your brand",
      "Third-party API & payment integration",
      "Push notifications & real-time features",
      "App Store & Google Play submission",
      "Ongoing maintenance packages",
    ],
    iconBg: "bg-white/20 text-white",
    tag: "bg-orange-100 text-[#FF5C00]",
    card: "bg-[#FF5C00] border-orange-400/20",
    text: "text-white",
    muted: "text-orange-100",
    numColor: "text-orange-300/20",
    featureDot: "bg-white",
    serviceLink: "/services/app-development",
    servicePricingLink: "/pricing/mobile-development",
  },
  {
    num: "03",
    icon: <MdOutlineDesignServices />,
    title: "Graphic & UI/UX Design",
    tagline: "Every pixel purposeful.",
    desc: "From full brand identities to polished product interfaces, we design with clarity and intention. We deliver assets you own, source files included, no strings attached.",
    features: [
      "Logo & brand identity systems",
      "UI/UX design (Figma, interactive prototypes)",
      "Social media graphics & templates",
      "Pitch decks & presentations",
      "Print-ready materials (flyers, brochures)",
      "3 revision rounds included as standard",
    ],
    iconBg: "bg-white/10 text-white",
    tag: "bg-slate-700 text-slate-300",
    card: "bg-slate-900 border-slate-800",
    text: "text-white",
    muted: "text-slate-400",
    numColor: "text-slate-800",
    featureDot: "bg-slate-500",
    serviceLink: "/services/graphic-design",
    servicePricingLink: "/pricing/graphic-design",
  },
  {
    num: "04",
    icon: <HiOutlineDocumentText />,
    title: "Business Registration",
    tagline: "Get legal. Get credible. Get growing.",
    desc: "We handle CAC registration end-to-end so you can focus on your business. From name reservation to certificate issuance, we manage the paperwork, you manage the vision.",
    features: [
      "CAC business name & company registration",
      "Sole proprietorship, LLC & NGO setup",
      "Tax Identification Number (TIN) registration",
      "SCUML enrolment & compliance support",
      "Corporate bank account guidance",
      "Post-registration document filing",
    ],
    iconBg: "bg-orange-50 text-[#FF5C00]",
    tag: "bg-orange-50 text-[#FF5C00]",
    card: "bg-white border-slate-100",
    text: "text-slate-900",
    muted: "text-slate-500",
    numColor: "text-slate-100",
    featureDot: "bg-[#FF5C00]",
    serviceLink: "/services/business-registration",
    servicePricingLink: "/pricing/business-registration",
  },
];

const whyReasons = [
  {
    icon: <HiOutlineDocumentText />,
    title: "CAC Registered Business",
    desc: "We are a fully registered Nigerian company. You can transact with us with complete legal confidence — no grey areas.",
    featured: true,
  },
  {
    icon: <GiCheckMark />,
    title: "40+ Clients Served",
    desc: "From hospitality and fashion to fintech and NGOs, we've delivered for businesses across diverse industries.",
    featured: false,
  },
  {
    icon: "🔄",
    title: "True End-to-End Service",
    desc: "Design, development, mobile, branding, and registration, one team for your entire digital journey.",
    featured: false,
  },
  {
    icon: <BsLightningCharge />,
    title: "Fast, Reliable Delivery",
    desc: "Most web projects land in 2–4 weeks. We keep you updated at every stage so nothing catches you off guard.",
    featured: false,
  },
  {
    icon: <HiOutlineDocumentText />,
    title: "Transparent Pricing",
    desc: "Clear quotes before we start. No hidden fees, no surprises, just honest work at honest prices.",
    featured: false,
  },
  {
    icon: <BiSupport />,
    title: "Post-Launch Support",
    desc: "We don't disappear after launch. We monitor, maintain, and help you grow long after go-live.",
    featured: false,
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <div className="bg-[#fafafa]">
      {/* ════════════════════════════════════
          1. HERO
      ════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-24">
        {/* Glow blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mb-10">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Services</span>
          </div>

          <SectionLabel text="What We Do" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
                Services Built
                <br />
                to Make Your
                <br />
                <span className="text-[#FF5C00]">Business Grow.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                From your first website to your hundredth customer, we provide
                every digital tool your business needs under one roof.
              </p>
            </div>

            {/* Service quick-nav pills */}
            <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end shrink-0">
              {services.map((s) => (
                <a
                  key={s.num}
                  href={`#service-${s.num}`}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-bold text-slate-600 hover:border-[#FF5C00] hover:text-[#FF5C00] transition-all duration-200"
                >
                  <span className="text-xs text-slate-400">{s.num}</span>
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-16 flex flex-wrap items-center gap-6 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 bg-white border border-slate-100 rounded-full px-4 py-2 shadow-sm">
              <span className="text-base text-gray-700">
                <BsBank />
              </span>
              <span className="text-xs font-bold text-slate-700">
                CAC Registered
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-100 rounded-full px-4 py-2 shadow-sm">
              <span className="text-base text-green-800">
                <GiCheckMark />
              </span>
              <span className="text-xs font-bold text-slate-700">
                50+ Projects Delivered
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-100 rounded-full px-4 py-2 shadow-sm">
              <span className="text-base text-yellow-400">
                <BsStarFill />
              </span>
              <span className="text-xs font-bold text-slate-700">
                98% Satisfaction Rate
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-100 rounded-full px-4 py-2 shadow-sm">
              <span className="text-base text-yellow-400">
                <BsLightningCharge />
              </span>
              <span className="text-xs font-bold text-slate-700">
                2–4 Weeks Delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          2. MAIN SERVICES GRID
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <SectionLabel text="Our Services" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Everything You
                <br />
                Need, In One Place
              </h2>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#FF5C00] transition-colors duration-200 group shrink-0"
            >
              See Full Pricing
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((s) => (
              <div
                id={`service-${s.num}`}
                key={s.num}
                className={`relative rounded-3xl border ${s.card} ${s.text} p-8 md:p-10 flex flex-col gap-8 overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500`}
              >
                {/* Decorative number */}
                <span
                  className={`absolute top-6 right-8 text-[6rem] font-black leading-none select-none pointer-events-none ${s.numColor}`}
                >
                  {s.num}
                </span>

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl ${s.iconBg} flex items-center justify-center text-xl shrink-0`}
                  >
                    {s.icon}
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shrink-0 ${s.tag}`}
                  >
                    {s.title}
                  </span>
                </div>

                {/* Title + desc */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-snug mb-2">
                    {s.title}
                  </h3>
                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-4 ${s.muted}`}
                  >
                    {s.tagline}
                  </p>
                  <p className={`text-sm leading-relaxed ${s.muted}`}>
                    {s.desc}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="relative z-10 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.featureDot}`}
                      />
                      <span className={s.muted}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="relative z-10 flex items-center gap-4 pt-2 border-t border-current/10">
                  <Link
                    href={s.serviceLink}
                    className={`inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 ${
                      s.num === "01" || s.num === "04"
                        ? "bg-slate-900 text-white hover:bg-[#FF5C00]"
                        : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
                    }`}
                  >
                    Get Started →
                  </Link>
                  <Link
                    href={s.servicePricingLink}
                    className={`inline-flex items-center gap-1.5 text-sm font-bold hover:underline underline-offset-4 transition-all ${s.muted}`}
                  >
                    View Pricing →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          3. WHY CHOOSE US
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <SectionLabel text="Why Choose Us" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Reasons Businesses
                <br />
                Trust Devola Solutions
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              We&apos;ve earned trust one project at a time. Here&apos;s what
              sets us apart from the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyReasons.map((r) => (
              <div
                key={r.title}
                className={`rounded-3xl p-8 flex flex-col gap-4 border hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                  r.featured
                    ? "bg-[#FF5C00] border-orange-400/20 text-white lg:col-span-1"
                    : "bg-white border-slate-100 text-slate-900"
                }`}
              >
                <span className="text-3xl">{r.icon}</span>
                <div>
                  <h3
                    className={`text-lg font-black tracking-tight mb-2 ${r.featured ? "text-white" : "text-slate-900"}`}
                  >
                    {r.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${r.featured ? "text-orange-100" : "text-slate-500"}`}
                  >
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CAC badge callout */}
          <div className="mt-8 bg-slate-900 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                <FcDocument />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#FF5C00] mb-1">
                  Legal & Verified
                </p>
                <h3 className="text-xl font-black text-white leading-tight">
                  Devola Solutions is a CAC-registered Nigerian company.
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  You can verify our registration with the Corporate Affairs
                  Commission — full legal standing, zero risk.
                </p>
              </div>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#FF5C00] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-orange-500 transition-colors duration-300 whitespace-nowrap"
            >
              Work With Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          4. PAST PROJECTS
      ════════════════════════════════════ */}
      <div className="border-t border-slate-100">
        <Portfolio />
      </div>

      {/* ════════════════════════════════════
          5. FAQs
      ════════════════════════════════════ */}
      <div className="border-t border-slate-100">
        <FAQs />
      </div>

      {/* ════════════════════════════════════
          6. CTA
      ════════════════════════════════════ */}
      <FinalCTA />
    </div>
  );
}
