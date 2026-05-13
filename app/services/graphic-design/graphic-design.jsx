import Link from "next/link";
// import {
//   SiFigma,
//   SiAdobephotoshop,
//   SiAdobeindesign,
//   SiCanva,
// } from "react-icons/si";
import { BiPalette, BiLayer, BiPhoneCall } from "react-icons/bi";
import {
  MdBrandingWatermark,
  MdOutlineDesignServices,
  MdPresentToAll,
} from "react-icons/md";
import { BsStars, BsPrinter, BsPhone } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import FAQs from "../../_components/FAQs";
import FinalCTA from "../../_components/FinalCTA";
import { SiCanva, SiFigma } from "react-icons/si";
import {
  TbBrandAdobeIllustrator,
  TbBrandAdobeIndesign,
  TbBrandAdobePhotoshop,
} from "react-icons/tb";

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
const designServices = [
  {
    icon: <MdBrandingWatermark />,
    title: "Brand Identity",
    desc: "Logo, colour palette, typography system & brand guidelines — built to be consistent across every touchpoint.",
  },
  {
    icon: <BiPhoneCall />,
    title: "Social Media Graphics",
    desc: "Posts, stories, carousels, and ads sized for Instagram, Twitter/X, LinkedIn & Facebook.",
  },
  {
    icon: <MdPresentToAll />,
    title: "Pitch Decks & Presentations",
    desc: "Investor decks, company presentations and proposal documents that look as credible as your idea.",
  },
  {
    icon: <BsPhone />,
    title: "UI/UX Design",
    desc: "App and website interfaces designed in Figma — research-backed, pixel-perfect, and dev-ready.",
  },
  {
    icon: <BsPrinter />,
    title: "Print & Marketing",
    desc: "Flyers, banners, business cards, letterheads & any print-ready material your business needs.",
  },
  {
    icon: <MdOutlineDesignServices />,
    title: "Packaging Design",
    desc: "Product packaging, labels, and unboxing experiences that make your brand stand out on the shelf.",
  },
  {
    icon: <BiLayer />,
    title: "Infographics",
    desc: "Complex data and processes turned into clear, shareable visual stories.",
  },
  {
    icon: <BiPalette />,
    title: "Illustration",
    desc: "Custom icons, mascots, and illustrations that give your brand a voice no stock image can match.",
  },
  {
    icon: <BsStars />,
    title: "Motion & Animation",
    desc: "Animated logos, social clips, and micro-animations for apps and websites.",
  },
];

const included = [
  "Dedicated designer assigned to your project",
  "Brand discovery questionnaire before work starts",
  "Concept presentation at each major stage",
  "3 rounds of revision per deliverable",
  "All final files in PNG, JPG, SVG & PDF",
  "Editable source files (Figma / Adobe CC)",
  "Full ownership — you keep all rights",
  "Brand guideline document (identity projects)",
  "Print-ready file preparation at no extra cost",
  "1-week email support after delivery",
];

const stack = [
  {
    icon: <SiFigma />,
    name: "Figma",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: <TbBrandAdobeIllustrator />,
    name: "Illustrator",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: <TbBrandAdobePhotoshop />,
    name: "Photoshop",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: <TbBrandAdobeIndesign />,
    name: "InDesign",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    icon: <SiCanva />,
    name: "Canva Pro",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
];

const process = [
  {
    num: "01",
    title: "Brief & Discovery",
    desc: "We send you a detailed questionnaire covering your brand story, audience, competitors, and style preferences.",
  },
  {
    num: "02",
    title: "Mood Board",
    desc: "We share a visual direction before any design starts. One approval and we move forward — no wasted effort.",
  },
  {
    num: "03",
    title: "Initial Concepts",
    desc: "You receive 2–3 distinct design directions. Pick one, and we refine from there.",
  },
  {
    num: "04",
    title: "Refinement",
    desc: "Up to 3 rounds of feedback and revision until the design is exactly right.",
  },
  {
    num: "05",
    title: "Final Delivery",
    desc: "All files delivered in every format you need — print-ready, web-ready, and editable source files.",
  },
  {
    num: "06",
    title: "Brand Handover",
    desc: "For identity projects, you receive a full brand guide so anyone on your team can stay consistent.",
  },
];

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

const designVsDiy = [
  {
    factor: "Originality",
    diy: "Stock templates used by thousands",
    us: "100% custom to your brand",
  },
  {
    factor: "Consistency",
    diy: "Different styles every time you post",
    us: "Brand guidelines keep everything cohesive",
  },
  {
    factor: "File quality",
    diy: "Low-res exports, no source files",
    us: "Print-ready + editable source files always",
  },
  {
    factor: "Time",
    diy: "Hours in Canva for mediocre results",
    us: "You focus on your business, we handle design",
  },
  {
    factor: "Ownership",
    diy: "Platform owns the templates",
    us: "You own every pixel, forever",
  },
  {
    factor: "Perception",
    diy: "Looks DIY — prospects notice",
    us: "Builds trust & justifies premium pricing",
  },
];

const testimonials = [
  {
    quote:
      "Our rebrand changed everything. Clients started complimenting our look before we even pitched them. Devola gave us something I didn&apos;t know we were missing.",
    name: "Tunde Okafor",
    role: "Co-founder, Greenleaf Consulting",
    initials: "TO",
  },
  {
    quote:
      "The pitch deck they designed helped us close our pre-seed round. Investors kept commenting on how professional it looked. Worth every naira.",
    name: "Adaeze Nnamdi",
    role: "CEO, PocketHealth NG",
    initials: "AN",
  },
];

/* ─────────────────────────────────
   PAGE
───────────────────────────────── */
export default function GraphicDesign() {
  return (
    <div className="bg-[#fafafa]">
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-24">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />

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
            <span className="text-slate-900 font-bold">Graphic Design</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <Label text="Graphic Design" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
                Design That Makes
                <br />
                People Stop
                <br />
                <span className="text-[#FF5C00]">and Look Twice.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                Your brand is the first thing people judge you by. We make sure
                it does the talking before you ever open your mouth — logos,
                identity systems, decks, and everything in between.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#FF5C00] transition-all duration-300 shadow-lg shadow-slate-900/10"
                >
                  Start Your Project →
                </Link>
                <Link
                  href="/pricing/graphic-design"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold hover:border-slate-400 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Right: design metrics card */}
            <div className="relative hidden lg:flex flex-col gap-4">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                  What every project includes
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "Revision Rounds",
                      score: "3",
                      unit: " rounds",
                      color: "text-purple-600",
                      bg: "bg-purple-50",
                    },
                    {
                      label: "File Formats",
                      score: "5",
                      unit: "+",
                      color: "text-blue-600",
                      bg: "bg-blue-50",
                    },
                    {
                      label: "Turnaround",
                      score: "7",
                      unit: " days",
                      color: "text-green-600",
                      bg: "bg-green-50",
                    },
                    {
                      label: "Ownership",
                      score: "100",
                      unit: "%",
                      color: "text-[#FF5C00]",
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
                  <span className="text-xl text-[#FF5C00]">
                    <HiSparkles />
                  </span>
                  <div>
                    <div className="text-white text-sm font-black">
                      100% custom
                    </div>
                    <div className="text-slate-500 text-xs">no templates</div>
                  </div>
                </div>
                <div className="flex-1 bg-[#FF5C00] rounded-2xl px-5 py-4 flex items-center gap-3">
                  <span className="text-xl text-white">
                    <SiFigma />
                  </span>
                  <div>
                    <div className="text-white text-sm font-black">
                      Source files
                    </div>
                    <div className="text-orange-100 text-xs">
                      always included
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SERVICES WE OFFER
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <Label text="Design Services" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                What Can We
                <br />
                Design for You?
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              From a single logo to a complete brand universe — we handle every
              visual touchpoint your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {designServices.map((t, i) => (
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
              Every Project Includes
              <br />
              These as Standard.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              No upsells for things that should come by default. Every design
              engagement includes proper process and proper deliverables.
            </p>
            <Link
              href="/pricing/graphic-design"
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
          CUSTOM vs DIY
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Label text="The Real Comparison" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Custom Design vs. Doing It Yourself
            </h2>
            <p className="text-slate-500 mt-4 max-w-md mx-auto">
              DIY design tools look affordable until you see what inconsistent
              branding actually costs you.
            </p>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-3 gap-3 mb-3 px-4">
            <div />
            <div className="bg-slate-100 rounded-xl py-3 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                DIY / Canva Free
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
            {designVsDiy.map((row, i) => (
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
                Great Design in
                <br />6 Clear Steps.
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              No guessing games. You see and approve every stage before we move
              to the next one.
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
          TOOLS / STACK
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label text="Our Tools" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Industry-Standard
              <br />
              Tools, Always.
            </h2>
            <p className="text-slate-500 mt-4 max-w-md mx-auto">
              We work in the same tools that top agencies and in-house creative
              teams use — so handover is always seamless.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-lg mx-auto">
            {stack.map((t) => (
              <div
                key={t.name}
                className={`${t.bg} rounded-2xl px-7 py-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-default w-28`}
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
          TESTIMONIALS
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <Label text="Client Results" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Real Brands.
              <br />
              Real Impact.
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
          FAQs (defaults to Graphic Design tab)
      ══════════════════════════════ */}
      <div className="border-t border-slate-100">
        <FAQs defaultTab="Graphic Design" />
      </div>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <FinalCTA />
    </div>
  );
}
