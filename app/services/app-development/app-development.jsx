import Link from "next/link";
import {
  SiReact,
  SiExpo,
  SiFirebase,
  SiTypescript,
  SiNodedotjs,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import {
  BiShoppingBag,
  BiHotel,
  BiRestaurant,
  BiRocket,
  BiMobile,
} from "react-icons/bi";
import { BsLightningChargeFill, BsPhone } from "react-icons/bs";
import { MdPayment, MdHealthAndSafety } from "react-icons/md";
import { FaGraduationCap, FaTruck } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
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
const appTypes = [
  {
    icon: <BiShoppingBag />,
    title: "E-Commerce Apps",
    desc: "Product catalogue, cart, Paystack/Flutterwave checkout & order tracking.",
  },
  {
    icon: <BiHotel />,
    title: "Hotel & Booking",
    desc: "Room browsing, real-time availability, reservation management.",
  },
  {
    icon: <BiRestaurant />,
    title: "Food & Restaurant",
    desc: "Menu ordering, delivery tracking, table reservations & loyalty rewards.",
  },
  {
    icon: <MdPayment />,
    title: "Fintech & Payments",
    desc: "Wallets, transfers, bill payments & secure transaction histories.",
  },
  {
    icon: <FaGraduationCap />,
    title: "EdTech & Learning",
    desc: "Course libraries, video lessons, quizzes & student progress dashboards.",
  },
  {
    icon: <FaTruck />,
    title: "Logistics & Delivery",
    desc: "Live tracking, driver dispatch, route optimisation & proof of delivery.",
  },
  {
    icon: <HiUsers />,
    title: "Social & Community",
    desc: "Profiles, feeds, messaging, notifications & content sharing.",
  },
  {
    icon: <MdHealthAndSafety />,
    title: "Health & Wellness",
    desc: "Appointment booking, health records, teleconsultation & reminders.",
  },
  {
    icon: <BiRocket />,
    title: "Business Tools",
    desc: "Internal dashboards, CRMs, inventory managers & staff apps.",
  },
];

const included = [
  "iOS & Android from one codebase (React Native)",
  "Paystack & Flutterwave payment integration",
  "Push notifications (FCM)",
  "User authentication (email, phone, Google, Apple)",
  "App Store & Google Play submission",
  "Sentry crash monitoring & error tracking",
  "Offline-first architecture where relevant",
  "Admin dashboard to manage app content",
  "1 month post-launch support",
  "Full source code ownership — you keep everything",
];

const stack = [
  {
    icon: <SiReact />,
    name: "React Native",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: <SiExpo />,
    name: "Expo",
    color: "text-slate-900",
    bg: "bg-slate-100",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    color: "text-blue-700",
    bg: "bg-blue-50",
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
  {
    icon: <SiReact />,
    name: "React Nav",
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
];

const process = [
  {
    num: "01",
    title: "Discovery",
    desc: "We map out your users, core flows, and success metrics before a single screen is drawn.",
  },
  {
    num: "02",
    title: "UX Architecture",
    desc: "Information architecture, user journeys, and low-fidelity wireframes — approved before design starts.",
  },
  {
    num: "03",
    title: "UI Design",
    desc: "High-fidelity screens in Figma. Pixel-perfect, platform-native feel for both iOS and Android.",
  },
  {
    num: "04",
    title: "Development & Builds",
    desc: "Weekly TestFlight & APK builds so you can test on a real device throughout development.",
  },
  {
    num: "05",
    title: "QA on Real Devices",
    desc: "Tested on physical iPhones and Android handsets across multiple OS versions before submission.",
  },
  {
    num: "06",
    title: "Store Submission",
    desc: "We handle App Store and Google Play submission end to end — screenshots, listings, review guidelines.",
  },
];

const pricing = [
  {
    tier: "Starter",
    price: "From ₦1,500,000",
    description:
      "Perfect for MVPs and simple apps that need to ship fast and validate an idea.",
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
    cta: "Get Started",
    highlight: false,
  },
  {
    tier: "Business",
    price: "From ₦3,550,000",
    description:
      "For apps that need payments, real-time features, and a proper admin dashboard.",
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
    cta: "Most Popular",
    highlight: true,
  },
  {
    tier: "Enterprise",
    price: "Custom Quote",
    description:
      "Complex platforms with custom backends, third-party APIs, and advanced architecture.",
    features: [
      "Everything in tier 2",
      "Unlimited screens",
      "Custom API / backend",
      "Multi-role user system",
      "Advanced analytics",
      "Dedicated timeline",
      "Ongoing support",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

const rnVsAlternatives = [
  {
    factor: "Platforms",
    native: "iOS only OR Android only",
    rn: "Both iOS & Android",
    nocode: "Both (with limits)",
  },
  {
    factor: "Cost",
    native: "2× development budget",
    rn: "One codebase, one team",
    nocode: "Low upfront, high long-term",
  },
  {
    factor: "Performance",
    native: "Native — maximum",
    rn: "Near-native — excellent",
    nocode: "Slow & limited",
  },
  {
    factor: "Custom features",
    native: "Anything possible",
    rn: "Anything possible",
    nocode: "Only what the platform allows",
  },
  {
    factor: "Code ownership",
    native: "You own it",
    rn: "You own it",
    nocode: "Locked to the vendor",
  },
  {
    factor: "Scale",
    native: "Unlimited",
    rn: "Unlimited",
    nocode: "Hits ceilings fast",
  },
];

const testimonials = [
  {
    quote:
      "We had a rough MVP built on a no-code tool that kept crashing. Devola rebuilt it properly in React Native and our crash rate dropped to near zero. Our users noticed immediately.",
    name: "Chidinma Eze",
    role: "Founder, That Local Girl",
    initials: "CE",
  },
  {
    quote:
      "Our logistics app now handles 500+ daily deliveries with live driver tracking. The admin dashboard alone saved us 3 hours of manual calls every single day.",
    name: "Damilola Fashola",
    role: "CTO, SwiftMove Logistics",
    initials: "DF",
  },
];

/* ─────────────────────────────────
   PAGE
───────────────────────────────── */
export default function AppDevelopment() {
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
            <span className="text-slate-900 font-bold">App Development</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <Label text="Mobile App Development" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
                Mobile Apps Your
                <br />
                Users Actually
                <br />
                <span className="text-[#FF5C00]">Want to Use.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                We build production-grade iOS and Android apps with React
                Native. One codebase, two platforms, and an experience your
                users will leave 5-star reviews for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#FF5C00] transition-all duration-300 shadow-lg shadow-slate-900/10"
                >
                  Start Your Project →
                </Link>
                <Link
                  href="/pricing/mobile-development"
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
                  What we deliver
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "Crash-Free Rate",
                      score: "99.9",
                      unit: "%",
                      color: "text-green-600",
                      bg: "bg-green-50",
                    },
                    {
                      label: "App Store Rating",
                      score: "4.8",
                      unit: "★",
                      color: "text-yellow-500",
                      bg: "bg-yellow-50",
                    },
                    {
                      label: "Platforms",
                      score: "2",
                      unit: "",
                      color: "text-blue-600",
                      bg: "bg-blue-50",
                    },
                    {
                      label: "Codebases",
                      score: "1",
                      unit: "",
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
                  <span className="text-xl text-white">
                    <BsLightningChargeFill />
                  </span>
                  <div>
                    <div className="text-white text-sm font-black">
                      8–16 weeks
                    </div>
                    <div className="text-slate-500 text-xs">avg. delivery</div>
                  </div>
                </div>
                <div className="flex-1 bg-[#FF5C00] rounded-2xl px-5 py-4 flex items-center gap-3">
                  <span className="text-xl text-white">
                    <BsPhone />
                  </span>
                  <div>
                    <div className="text-white text-sm font-black">
                      Weekly builds
                    </div>
                    <div className="text-orange-100 text-xs">
                      test on your device
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
              <Label text="App Types" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                What Kind of App
                <br />
                Do You Need?
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              We&apos;ve shipped apps across almost every industry vertical.
              Whatever your idea, we&apos;ve likely tackled something similar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {appTypes.map((t, i) => (
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
              Every App Includes
              <br />
              These as Standard.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              No hidden extras for the fundamentals. These ship with every
              project we take on, regardless of tier.
            </p>
            <Link
              href="/pricing/app-development"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#FF5C00] transition-colors group"
            >
              See what each tier includes
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
          REACT NATIVE vs ALTERNATIVES
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Label text="The Real Comparison" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              React Native vs. the Alternatives
            </h2>
            <p className="text-slate-500 mt-4 max-w-md mx-auto">
              Why we chose React Native — and why it&apos;s almost always the
              right call for your budget.
            </p>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-4 gap-3 mb-3 px-2">
            <div />
            <div className="bg-slate-100 rounded-xl py-3 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                Native Dev
              </span>
            </div>
            <div className="bg-slate-900 rounded-xl py-3 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">
                React Native
              </span>
            </div>
            <div className="bg-slate-100 rounded-xl py-3 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                No-Code
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-2">
            {rnVsAlternatives.map((row, i) => (
              <div
                key={row.factor}
                className={`grid grid-cols-4 gap-3 items-center rounded-2xl p-4 ${i % 2 === 0 ? "bg-white border border-slate-100" : "bg-[#fafafa]"}`}
              >
                <span className="text-sm font-black text-slate-900">
                  {row.factor}
                </span>
                <div className="flex items-start gap-2">
                  <span className="text-slate-400 text-sm shrink-0 mt-0.5">
                    ~
                  </span>
                  <span className="text-xs text-slate-500 leading-snug">
                    {row.native}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 text-sm shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-xs text-slate-700 font-medium leading-snug">
                    {row.rn}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400 text-sm shrink-0 mt-0.5">
                    ✗
                  </span>
                  <span className="text-xs text-slate-500 leading-snug">
                    {row.nocode}
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
                Your App Ships
                <br />
                in 6 Clear Steps.
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              No black boxes. You get weekly builds to test on your real device
              throughout the entire build.
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
              The same stack used by Meta, Shopify, and Microsoft to build their
              mobile apps — reliable, performant, and production-proven.
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
          APP STORE CALLOUT
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 mb-6">
                <BiMobile className="text-[#FF5C00]" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                  App Store & Google Play
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                We Handle Store
                <br />
                Submission End to End.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Apple and Google&apos;s review processes are strict. One wrong
                screenshot or a missing privacy policy kills your launch.
                We&apos;ve been through this enough times to know exactly what
                each reviewer is looking for.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Developer account setup (Apple & Google)",
                "Store listing copy & keyword optimisation",
                "Screenshot and preview creation",
                "Privacy policy & compliance documentation",
                "Review guideline checklist sign-off",
                "Post-rejection fix & resubmission if needed",
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
            <Link
              href="/pricing/app-development"
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
              Real Apps.
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
          FAQs (defaults to Mobile App tab)
      ══════════════════════════════ */}
      <div className="border-t border-slate-100">
        <FAQs defaultTab="Mobile App" />
      </div>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <FinalCTA />
    </div>
  );
}
