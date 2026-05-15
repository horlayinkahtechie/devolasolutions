import Link from "next/link";
import {
  BiMessageRoundedDetail,
  BiFile,
  BiPencil,
  BiCode,
  BiCheckShield,
  BiRocket,
  BiHeadphone,
} from "react-icons/bi";
import { MdOutlineHandshake, MdTimeline } from "react-icons/md";
import { BsArrowRight, BsStopwatch, BsShieldCheck } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import FinalCTA from "../_components/FinalCTA";

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
const phases = [
  {
    num: "01",
    icon: <BiMessageRoundedDetail />,
    title: "Discovery Call",
    duration: "Day 1",
    desc: "We start with a free 20–30 minute call to understand your business, goals, target audience, and what success looks like. No pitch, no pressure — just listening.",
    details: [
      "Understand your business and competitive landscape",
      "Define the project scope and must-have features",
      "Identify your target users and their needs",
      "Discuss timeline, budget, and any constraints",
      "Answer every question you have about the process",
    ],
    outcome: "A clear mutual understanding of what we're building and why.",
    scheme: "orange",
  },
  {
    num: "02",
    icon: <BiFile />,
    title: "Proposal & Agreement",
    duration: "Days 2–3",
    desc: "We send a detailed written proposal covering scope, deliverables, timeline, and pricing. No vague estimates — every line item is specific.",
    details: [
      "Written project scope document",
      "Itemised pricing with no hidden fees",
      "Realistic milestone-based timeline",
      "Clear payment schedule (50% upfront, 50% on delivery)",
      "Signed agreement before any work begins",
    ],
    outcome:
      "A signed agreement that protects both sides and sets clear expectations.",
    scheme: "light",
  },
  {
    num: "03",
    icon: <BiPencil />,
    title: "Design & Wireframes",
    duration: "Week 1–2",
    desc: "Before a single line of code is written, you see exactly what your product will look like. We build in Figma and present the designs for your feedback and approval.",
    details: [
      "Information architecture and user flow mapping",
      "Low-fidelity wireframes for layout approval",
      "High-fidelity UI designs in your brand colours",
      "Mobile and desktop responsive layouts",
      "Up to 3 rounds of design revisions",
    ],
    outcome:
      "Approved, pixel-perfect designs that both sides are excited to build.",
    scheme: "dark",
  },
  {
    num: "04",
    icon: <BiCode />,
    title: "Development",
    duration: "Weeks 2–6+",
    desc: "We build clean, well-structured code. You receive regular progress updates and, for app projects, weekly TestFlight/APK builds so you can test on your actual device throughout.",
    details: [
      "Weekly progress updates every Friday",
      "Staging environment for web projects",
      "Weekly TestFlight & APK builds for mobile apps",
      "Regular check-ins if scope needs adjusting",
      "Version-controlled codebase from day one",
    ],
    outcome: "A working, testable build you've been part of at every stage.",
    scheme: "light",
  },
  {
    num: "05",
    icon: <BiCheckShield />,
    title: "Testing & QA",
    duration: "Final week before launch",
    desc: "We don't ship until it's been properly tested. Every project goes through a thorough QA process before you ever see it live.",
    details: [
      "Cross-browser testing (Chrome, Firefox, Safari, Edge)",
      "Mobile device testing on real iOS and Android hardware",
      "Performance audit (PageSpeed 90+ for web)",
      "Accessibility checks (WCAG compliance)",
      "Security review and final bug fix pass",
    ],
    outcome:
      "A product that works correctly on every device, before it's in front of your users.",
    scheme: "orange",
  },
  {
    num: "06",
    icon: <BiRocket />,
    title: "Launch",
    duration: "Launch day",
    desc: "We handle the full deployment — domain connection, hosting setup, analytics, and go-live. For apps, we manage the App Store and Google Play submission process end to end.",
    details: [
      "Production deployment and domain configuration",
      "Google Analytics 4 and Search Console setup",
      "Sitemap and robots.txt submission",
      "App Store & Google Play submission (for apps)",
      "Post-launch smoke test and monitoring",
    ],
    outcome:
      "You're live, indexed, and tracking — with us on standby for the first 48 hours.",
    scheme: "dark",
  },
  {
    num: "07",
    icon: <BiHeadphone />,
    title: "Post-Launch Support",
    duration: "Ongoing",
    desc: "Every project includes a support window after launch. We're available to fix any issues, answer questions, and make minor adjustments as your real users start using the product.",
    details: [
      "Bug fixes and urgent patches covered",
      "Performance monitoring and alerts",
      "Minor content and copy updates",
      "Training on how to manage your platform",
      "Optional ongoing maintenance retainer",
    ],
    outcome:
      "Peace of mind that we don't vanish the moment the project is delivered.",
    scheme: "light",
  },
];

const schemeStyles = {
  light: {
    card: "bg-white border border-slate-100",
    num: "text-slate-100",
    iconWrap: "bg-orange-50 text-[#FF5C00]",
    title: "text-slate-900",
    desc: "text-slate-500",
    detail: "text-slate-600",
    check: "text-[#FF5C00]",
    outcome: "bg-slate-50 border border-slate-100 text-slate-700",
    outcomeBold: "text-slate-900",
    duration: "bg-slate-100 text-slate-500",
  },
  orange: {
    card: "bg-[#FF5C00]",
    num: "text-orange-400/30",
    iconWrap: "bg-white/20 text-white",
    title: "text-white",
    desc: "text-orange-100",
    detail: "text-orange-50",
    check: "text-white",
    outcome: "bg-white/10 border border-white/20 text-orange-50",
    outcomeBold: "text-white",
    duration: "bg-white/20 text-white",
  },
  dark: {
    card: "bg-slate-900",
    num: "text-slate-800",
    iconWrap: "bg-white/10 text-white",
    title: "text-white",
    desc: "text-slate-400",
    detail: "text-slate-300",
    check: "text-[#FF5C00]",
    outcome: "bg-white/5 border border-slate-700 text-slate-300",
    outcomeBold: "text-white",
    duration: "bg-slate-800 text-slate-400",
  },
};

const principles = [
  {
    icon: <BsStopwatch />,
    title: "No surprises",
    desc: "Scope, price, and timeline are locked in writing before work begins. Changes go through a formal change request.",
  },
  {
    icon: <MdOutlineHandshake />,
    title: "You own everything",
    desc: "Full source code, all design files, and complete IP ownership transferred to you on final delivery.",
  },
  {
    icon: <BsShieldCheck />,
    title: "Honest timelines",
    desc: "We don't promise a 2-week turnaround to win your business and then ask for 8 weeks. Every estimate is grounded in reality.",
  },
  {
    icon: <HiSparkles />,
    title: "Quality by default",
    desc: "We don't ship something we wouldn't be proud to put our name on. QA isn't optional — it's built into every project.",
  },
  {
    icon: <MdTimeline />,
    title: "Visible progress",
    desc: "Weekly updates and live staging environments mean you're never left wondering what's happening with your project.",
  },
  {
    icon: <BiHeadphone />,
    title: "We stay around",
    desc: "Post-launch support is included in every project. We don't disappear the moment the invoice is paid.",
  },
];

const serviceTimelines = [
  {
    service: "Website (Starter)",
    timeline: "2 weeks",
    phases: ["Discovery", "Design", "Build", "QA", "Launch"],
  },
  {
    service: "Website (Business)",
    timeline: "3–4 weeks",
    phases: ["Discovery", "Proposal", "Design", "Build", "QA", "Launch"],
  },
  {
    service: "Mobile App (Starter)",
    timeline: "8–10 weeks",
    phases: ["Discovery", "UX Arch", "UI Design", "Build", "QA", "Store Sub."],
  },
  {
    service: "Mobile App (Business)",
    timeline: "12–16 weeks",
    phases: ["Discovery", "UX Arch", "UI Design", "Build", "QA", "Store Sub."],
  },
  {
    service: "Brand Identity",
    timeline: "2–3 weeks",
    phases: ["Brief", "Mood Board", "Concepts", "Refinement", "Delivery"],
  },
  {
    service: "Business Registration",
    timeline: "3–7 days",
    phases: ["Name Search", "Documents", "Filing", "CAC Review", "Certificate"],
  },
];

export default function HowWeWork() {
  return (
    <div className="bg-[#fafafa]">
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-24">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mb-10">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">How We Work</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Label text="Our Process" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
                No Black Boxes.
                <br />
                No Surprises.
                <br />
                <span className="text-[#FF5C00]">Just Results.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                Every project at Devola follows the same structured process —
                from the first call to post-launch support. You know exactly
                what&apos;s happening at every stage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#FF5C00] transition-all duration-300 shadow-lg shadow-slate-900/10"
                >
                  Start a Project →
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold hover:border-slate-400 transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                {
                  stat: "7",
                  label: "Phases in every project",
                  color: "text-[#FF5C00]",
                  bg: "bg-orange-50",
                },
                {
                  stat: "48h",
                  label: "First update after kickoff",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  stat: "100%",
                  label: "Source code ownership",
                  color: "text-green-600",
                  bg: "bg-green-50",
                },
                {
                  stat: "0",
                  label: "Hidden fees, ever",
                  color: "text-slate-900",
                  bg: "bg-slate-100",
                },
              ].map(({ stat, label, color, bg }) => (
                <div key={label} className={`${bg} rounded-3xl p-8`}>
                  <div
                    className={`text-5xl font-black ${color} leading-none mb-2`}
                  >
                    {stat}
                  </div>
                  <div className="text-sm text-slate-500 font-medium leading-snug">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PHASES
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <Label text="The Process" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                7 Phases.
                <br />
                Every Project.
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              The specific timeline varies by service, but the structure is
              always the same — because consistency produces quality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {phases.map((phase) => {
              const st = schemeStyles[phase.scheme];
              return (
                <div
                  key={phase.num}
                  className={`relative overflow-hidden rounded-3xl ${st.card} p-8 flex flex-col gap-6`}
                >
                  {/* Decorative number */}
                  <span
                    className={`absolute -top-3 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none ${st.num}`}
                  >
                    {phase.num}
                  </span>

                  {/* Header */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${st.iconWrap} flex items-center justify-center text-xl shrink-0`}
                    >
                      {phase.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-black tracking-tight ${st.title}`}
                      >
                        {phase.title}
                      </h3>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full mt-1 inline-block ${st.duration}`}
                      >
                        {phase.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`relative z-10 text-sm leading-relaxed ${st.desc}`}
                  >
                    {phase.desc}
                  </p>

                  {/* Details list */}
                  <ul className="relative z-10 space-y-2">
                    {phase.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <span
                          className={`${st.check} shrink-0 mt-0.5 font-black text-sm`}
                        >
                          ✓
                        </span>
                        <span className={`text-sm ${st.detail} leading-snug`}>
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Outcome */}
                  <div
                    className={`relative z-10 rounded-2xl px-5 py-4 ${st.outcome}`}
                  >
                    <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">
                      Phase outcome
                    </p>
                    <p
                      className={`text-sm font-semibold leading-snug ${st.outcomeBold}`}
                    >
                      {phase.outcome}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TIMELINE BY SERVICE
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <Label text="Timelines" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                How Long Does
                <br />
                Each Service Take?
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              These are realistic estimates based on typical projects. Complex
              requirements or delayed client approvals extend timelines.
            </p>
          </div>

          <div className="space-y-4">
            {serviceTimelines.map((s, i) => (
              <div
                key={s.service}
                className={`rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-6 ${i % 2 === 0 ? "bg-white border border-slate-100" : "bg-[#fafafa]"}`}
              >
                <div className="sm:w-48 shrink-0">
                  <p className="text-sm font-black text-slate-900">
                    {s.service}
                  </p>
                  <p className="text-xs text-[#FF5C00] font-bold mt-0.5">
                    {s.timeline}
                  </p>
                </div>

                <div className="flex-1 flex items-center gap-2 flex-wrap">
                  {s.phases.map((phase, idx) => (
                    <div key={phase} className="flex items-center gap-2">
                      <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full">
                        {phase}
                      </span>
                      {idx < s.phases.length - 1 && (
                        <BsArrowRight className="text-slate-300 text-xs shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-6 text-center">
            Timelines start from scope sign-off, not from initial enquiry.
            Delays due to pending client feedback are not included.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════
          PRINCIPLES
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <Label text="How We Operate" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                The Rules We
                <br />
                Work By.
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              These aren&apos;t just words on a page. They&apos;re the
              commitments we make to every client from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className={`rounded-3xl p-8 flex flex-col gap-5 ${
                  i === 1
                    ? "bg-[#FF5C00] text-white"
                    : i === 4
                      ? "bg-slate-900 text-white"
                      : "bg-white border border-slate-100 text-slate-900"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                    i === 1
                      ? "bg-white/20 text-white"
                      : i === 4
                        ? "bg-white/10 text-[#FF5C00]"
                        : "bg-orange-50 text-[#FF5C00]"
                  }`}
                >
                  {p.icon}
                </div>
                <div>
                  <h3
                    className={`text-lg font-black tracking-tight mb-2 ${i === 1 || i === 4 ? "text-white" : "text-slate-900"}`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${i === 1 ? "text-orange-100" : i === 4 ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHAT CLIENTS SAY ABOUT THE PROCESS
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <Label text="Client Feedback" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              What Clients Say
              <br />
              About Working With Us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote:
                  "The website loads faster compared to our previous website. The image doesn't even take time to load. You also took your time to look into what we want and delivered exactly what we needed",
                name: "MR Femi",
                role: "IT Engineer, GTA Hotels Group",
                initials: "FE",
              },
              {
                quote:
                  "I love the UI of my E-commerce website, the payment integration and the admin management system. And the fact I can add products myself.",
                name: "Adebayo Lola",
                role: "CEO, LolasElan",
                initials: "AL",
                dark: true,
              },
              {
                quote:
                  "I love how fast you deliver the project and how everything works. I also love your fast response time.",
                name: "AMZ",
                role: "CEO, Amazon World",
                initials: "AZ",
              },
            ].map((t) => (
              <div
                key={t.name}
                className={`rounded-3xl border p-8 flex flex-col justify-between min-h-56 relative overflow-hidden ${t.dark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"}`}
              >
                <span
                  className={`absolute top-4 right-6 text-[6rem] font-black leading-none select-none pointer-events-none ${t.dark ? "text-slate-800" : "text-slate-100"}`}
                >
                  &ldquo;
                </span>
                <p
                  className={`relative z-10 text-sm font-medium leading-relaxed mb-8 ${t.dark ? "text-slate-300" : "text-slate-700"}`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${t.dark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-500"}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className={`text-sm font-bold ${t.dark ? "text-white" : "text-slate-900"}`}
                    >
                      {t.name}
                    </div>
                    <div
                      className={`text-xs ${t.dark ? "text-slate-500" : "text-slate-400"}`}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FAQ
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Label text="Process FAQs" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Common Questions
              <br />
              About Our Process.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need to be technical to work with you?",
                a: "Not at all. We explain everything in plain English. You don't need to understand code — you just need to understand your business, and we handle the rest.",
              },
              {
                q: "How involved do I need to be during the project?",
                a: "Actively involved at the start (discovery and design approval) and minimally during development. We'll need timely feedback when we send designs or builds, but we don't need daily input from you.",
              },
              {
                q: "What if I want to change something mid-project?",
                a: "Small clarifications are free. Meaningful scope changes go through a written change request with a clear price and timeline impact before anything is implemented. No surprises.",
              },
              {
                q: "What happens if we miss a deadline?",
                a: "If the delay is on our end, we communicate it as soon as we know, adjust the timeline, and explain why. If it's caused by delayed client feedback or approvals, the timeline shifts accordingly.",
              },
              {
                q: "How do I send feedback during the project?",
                a: "Via email, WhatsApp, or a shared Notion/Google Doc — whatever works for you. We consolidate feedback into a clear revision list before acting on it, so nothing is missed.",
              },
              {
                q: "Who owns the code and files at the end?",
                a: "You do, completely. Full source code, all design files, and every asset is transferred to you. We don't hold anything back as leverage for maintenance contracts.",
              },
            ].map((f) => (
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
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
