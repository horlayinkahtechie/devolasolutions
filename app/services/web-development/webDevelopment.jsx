import Link from "next/link";
import {
  SiNextdotjs,
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import FAQs from "../../_components/FAQs";
import FinalCTA from "../../_components/FinalCTA";
import {
  BiChurch,
  BiHotel,
  BiMobile,
  BiRestaurant,
  BiRocket,
  BiShoppingBag,
} from "react-icons/bi";
import { BsBag, BsLightningChargeFill } from "react-icons/bs";
import { FaSchool } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { FcEngineering } from "react-icons/fc";

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
const siteTypes = [
  {
    icon: <BiShoppingBag />,
    title: "E-Commerce Website/Store",
    desc: "Products, cart, checkout & payment gateway — built to sell.",
  },
  {
    icon: <BiHotel />,
    title: "Hotel & Hospitality",
    desc: "Room management, booking system & availability calendar.",
  },
  {
    icon: <BiRestaurant />,
    title: "Restaurant & Food",
    desc: "Menu display, table reservations & online ordering.",
  },
  {
    icon: <BiChurch />,
    title: "Church & Ministry",
    desc: "Events, sermon library, tithes & donation integration.",
  },
  {
    icon: <FaSchool />,
    title: "Schools & Education",
    desc: "Admission forms, student portal & timetable management.",
  },
  {
    icon: <MdRealEstateAgent />,
    title: "Real Estate",
    desc: "Property listings, search filters & agent contact portal.",
  },
  {
    icon: <BsBag />,
    title: "Corporate & Business",
    desc: "Professional presence with services, team & blog.",
  },
  {
    icon: <FcEngineering />,
    title: "SaaS & Web Apps",
    desc: "Custom dashboards, user auth, data management & APIs.",
  },
  {
    icon: <BiRocket />,
    title: "Landing Pages",
    desc: "High-converting, focused pages built to capture leads.",
  },
];

const included = [
  [
    "Mobile-responsive on all devices",
    "PageSpeed score of 90+",
    "Technical SEO (metadata, sitemap, schema)",
    "SSL certificate (HTTPS)",
    "Contact forms & lead capture",
  ],
  [
    "Google Analytics 4 integration",
    "Custom domain connection",
    "Cross-browser compatibility testing",
    "1 month post-launch support",
    "Full source code ownership — you keep everything",
  ],
];

const stack = [
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    color: "text-slate-900",
    bg: "bg-slate-100",
  },
  {
    icon: <SiReact />,
    name: "React",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: <SiNodedotjs />,
    name: "Node.js",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: <SiVercel />,
    name: "Vercel",
    color: "text-slate-900",
    bg: "bg-slate-100",
  },
  {
    icon: <SiFigma />,
    name: "Figma",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

const process = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We learn your business, goals, and target audience. No templates, no assumptions.",
  },
  {
    num: "02",
    title: "Wireframe",
    desc: "You see the structure before design begins. We adjust until it feels right.",
  },
  {
    num: "03",
    title: "Design",
    desc: "High-fidelity screens in Figma. Your brand, your colours, your personality.",
  },
  {
    num: "04",
    title: "Development",
    desc: "We code it clean — fast, accessible, and SEO-ready from day one.",
  },
  {
    num: "05",
    title: "Testing",
    desc: "Tested on 10+ screen sizes and browsers before you ever see it.",
  },
  {
    num: "06",
    title: "Launch & Support",
    desc: "We deploy, set up analytics, and stay on-call for 30 days post-launch.",
  },
];

const pricing = [
  {
    tier: "Starter",
    price: "From ₦200,000",
    description:
      "Perfect for new businesses that need a clean, professional online presence fast.",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form",
      "2 weeks delivery",
      "1 week support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    tier: "Business",
    price: "From ₦450,000",
    description:
      "For growing businesses that need more pages, CMS, and deeper functionality.",
    features: [
      "Up to 15 pages",
      "CMS / Blog integration",
      "Advanced SEO",
      "Payment gateway",
      "Custom animations",
      "Admin management system",
      "1 months support",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    tier: "Enterprise",
    price: "From ₦800,000",
    description:
      "Web applications, SaaS platforms, and anything with a custom backend or API layer.",
    features: [
      "Unlimited pages",
      "Custom backend / API",
      "User authentication",
      "Database design",
      "Admin management system",
      "Dedicated timeline",
      "6 months support",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

const diyVsDevola = [
  {
    factor: "Design",
    diy: "Generic template shared by thousands",
    us: "Built specifically for your brand",
  },
  {
    factor: "Speed",
    diy: "PageSpeed 40–60 (kills your SEO)",
    us: "90+ PageSpeed — Google rewards it",
  },
  {
    factor: "Your URL",
    diy: "yoursite.wixsite.com branding",
    us: "yoursite.com — clean, professional",
  },
  {
    factor: "Cost model",
    diy: "Monthly platform fee that never stops",
    us: "Pay once. Own the code forever.",
  },
  {
    factor: "Maintenance",
    diy: "You figure it out when it breaks",
    us: "We handle updates & monitoring",
  },
  {
    factor: "Features",
    diy: "Limited to what the platform allows",
    us: "Any feature you can imagine",
  },
];

const testimonials = [
  {
    quote:
      "Our old Wix site was embarrassing. Devola rebuilt it in 3 weeks and our bounce rate dropped by 40%. Worth every naira.",
    name: "Kola Adeyemi",
    role: "CEO, AdeyemiLaw",
    initials: "KA",
  },
  {
    quote:
      "They built our hotel booking system from scratch. Guests can now reserve rooms directly — no more WhatsApp back and forth.",
    name: "Emmanuel Nwosu",
    role: "Director, GTA Hotels",
    initials: "EN",
  },
];

/* ─────────────────────────────────
   PAGE
───────────────────────────────── */
export default function WebDevelopment() {
  return (
    <div className="bg-[#fafafa]">
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-24">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />

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
            <span className="text-slate-900 font-bold">Web Development</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <Label text="Web Development" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
                Websites That
                <br />
                Work as Hard
                <br />
                <span className="text-[#FF5C00]">as You Do.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                We don&apos;t use page builders. Every site we build is
                hand-coded, fast-loading, SEO-ready, and built to convert
                visitors into paying customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#FF5C00] transition-all duration-300 shadow-lg shadow-slate-900/10"
                >
                  Start Your Project →
                </Link>
                <Link
                  href="/pricing/web-development"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold hover:border-slate-400 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Right: performance card */}
            <div className="relative hidden lg:flex flex-col gap-4">
              {/* Main card */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                  Typical results after launch
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "PageSpeed",
                      score: "97",
                      unit: "/100",
                      color: "text-green-600",
                      bg: "bg-green-50",
                    },
                    {
                      label: "SEO Score",
                      score: "98",
                      unit: "/100",
                      color: "text-blue-600",
                      bg: "bg-blue-50",
                    },
                    {
                      label: "Mobile",
                      score: "100",
                      unit: "/100",
                      color: "text-purple-600",
                      bg: "bg-purple-50",
                    },
                    {
                      label: "Accessibility",
                      score: "95",
                      unit: "/100",
                      color: "text-orange-600",
                      bg: "bg-orange-50",
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
                  <span className="text-xl">
                    <BsLightningChargeFill />
                  </span>
                  <div>
                    <div className="text-white text-sm font-black">
                      2–4 weeks
                    </div>
                    <div className="text-slate-500 text-xs">avg. delivery</div>
                  </div>
                </div>
                <div className="flex-1 bg-[#FF5C00] rounded-2xl px-5 py-4 flex items-center gap-3">
                  <span className="text-xl">
                    <BiMobile />
                  </span>
                  <div>
                    <div className="text-white text-sm font-black">
                      10+ devices
                    </div>
                    <div className="text-orange-100 text-xs">
                      tested before launch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHAT WE BUILD
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <Label text="Site Types" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                What Kind of Site
                <br />
                Do You Need?
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              We&apos;ve built sites across almost every industry. If your type
              isn&apos;t listed, we&apos;ve probably done something similar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteTypes.map((t, i) => (
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
              Every Site Includes
              <br />
              These as Standard.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              No add-on fees for the basics. These come with every project,
              regardless of budget tier.
            </p>
            <Link
              href="/pricing/web-development"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#FF5C00] transition-colors group"
            >
              See what each tier includes
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {included.flat().map((item) => (
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
              Wix and Squarespace look cheap until you see what they actually
              cost your business.
            </p>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-3 gap-3 mb-3 px-4">
            <div />
            <div className="bg-slate-100 rounded-xl py-3 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                DIY Builders
              </span>
            </div>
            <div className="bg-slate-900 rounded-xl py-3 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">
                Devola Solutions
              </span>
            </div>
          </div>

          {/* Rows */}
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
                Your Site Goes Live
                <br />
                in 6 Clear Steps.
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              No black boxes. You know exactly what&apos;s happening at every
              stage of the build.
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
          TECH STACK
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label text="Our Stack" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Built With Tools
              <br />
              That Last.
            </h2>
            <p className="text-slate-500 mt-4 max-w-md mx-auto">
              We use the same tech stack as companies like Netflix, Vercel, and
              GitHub — because it&apos;s simply the best.
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {stack.map((t) => (
              <div
                key={t.name}
                className={`${t.bg} rounded-2xl p-5 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-default`}
              >
                <span className={`text-3xl ${t.color}`}>{t.icon}</span>
                <span className="text-[10px] font-bold text-slate-500 text-center leading-tight">
                  {t.name}
                </span>
              </div>
            ))}
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
            <Link
              href="/pricing/web-development"
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
          TESTIMONIALS
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <Label text="Client Results" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Real Projects.
              <br />
              Real Outcomes.
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
          FAQs (defaults to Web Dev tab)
      ══════════════════════════════ */}
      <div className="border-t border-slate-100">
        <FAQs />
      </div>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <FinalCTA />
    </div>
  );
}
