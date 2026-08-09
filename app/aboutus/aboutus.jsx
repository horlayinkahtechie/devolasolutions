import Link from "next/link";
import {
  SiNextdotjs,
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiFigma,
  SiTypescript,
  SiNodedotjs,
  SiVercel,
  SiExpo,
  SiGooglecloud,
} from "react-icons/si";
import FinalCTA from "../_components/FinalCTA";
import { BsLightningChargeFill, BsBank } from "react-icons/bs";
import { GiGlobe } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiShakeHandsFill } from "react-icons/ri";

/* ─────────────────────────────────────────────
   SHARED SECTION LABEL
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
const heroStats = [
  { value: "Custom-Built", label: "No Templates, Ever" },
  { value: "Full-Stack", label: "Dev, Design & Legal" },
  { value: "Nigeria-Based", label: "Remote-Friendly" },
  { value: "Client-First", label: "Support After Launch" },
];

const milestones = [
  {
    year: "2022",
    text: "Devola Solutions founded, ready to take on our first clients.",
  },
  {
    year: "2023",
    text: "Delivered our first full-stack web platform for a hospitality brand.",
  },
  {
    year: "2024",
    text: "Launched mobile app division; UI/UX design added to services.",
  },
  {
    year: "2025",
    text: "Business registration services introduced, partnering with CAC.",
  },
  {
    year: "2026",
    text: "Grew our active client roster and expanded the core team.",
  },
  {
    year: "2026",
    text: "Continuing to deliver for businesses across Nigeria.",
  },
];

const differentiators = [
  {
    icon: <BsLightningChargeFill />,
    title: "Fast, Reliable Delivery",
    desc: "We move quickly without cutting corners. Clear timelines, weekly updates, and on-time launches — every time.",
    bg: "bg-white",
    border: "border-slate-100",
  },
  {
    icon: <GiGlobe />,
    title: "Local Knowledge, Global Standards",
    desc: "We understand the Nigerian, African and Global market deeply while building products that meet international benchmarks.",
    bg: "bg-slate-900",
    border: "border-slate-800",
    dark: true,
  },
  {
    icon: <RiShakeHandsFill />,
    title: "True End-to-End Service",
    desc: "Design, development, mobile, hosting, and business registration — one team handles your entire digital journey.",
    bg: "bg-[#FF5C00]",
    border: "border-orange-400/30",
    dark: true,
  },
  {
    icon: <HiOutlineDocumentText />,
    title: "Transparent Pricing",
    desc: "No hidden fees. You receive a detailed quote before we start and only pay for what we agreed.",
    bg: "bg-white",
    border: "border-slate-100",
  },
];

const team = [
  {
    name: "Alao Abdulsalam Olayinka",
    role: "Founder & Senior Developer",
    initials: "AA",
    bg: "bg-[#FF5C00]",
    text: "text-white",
    bio: "Full-stack engineer and product thinker with a passion for building scalable digital products.",
  },
  {
    name: "Abdullahi Olaiwon",
    role: "Lead Developer",
    initials: "AO",
    bg: "bg-slate-900",
    text: "text-white",
    bio: "Backend architect who loves clean APIs and cloud infrastructure that just works.",
  },
  {
    name: "Akinbami Awwal",
    role: "UI/UX Designer",
    initials: "AA",
    bg: "bg-blue-100",
    text: "text-blue-700",
    bio: "User experience obsessive with 4+ years of Figma-first product design experience.",
  },
  {
    name: "Akinbami Awwal",
    role: "Business Consultant",
    initials: "AA",
    bg: "bg-orange-50",
    text: "text-[#FF5C00]",
    bio: "Specialist in CAC registration, compliance, and helping founders get their legal footing right.",
  },
];

const techs = [
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-slate-900" },
  { icon: <SiReact />, name: "React", color: "text-blue-400" },
  { icon: <SiReact />, name: "React Native", color: "text-cyan-500" },
  { icon: <SiFirebase />, name: "Firebase", color: "text-orange-500" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400" },
  { icon: <SiFigma />, name: "Figma", color: "text-purple-500" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-600" },
  { icon: <SiExpo />, name: "Expo", color: "text-slate-700" },
  { icon: <SiVercel />, name: "Vercel", color: "text-slate-900" },
  { icon: <SiGooglecloud />, name: "Google Cloud", color: "text-blue-500" },
];

const achievements = [
  {
    value: "End-to-End",
    label: "Design to Launch",
    bg: "bg-white",
    text: "text-slate-900",
    sub: "text-slate-400",
  },
  {
    value: "Client-First",
    label: "Long-Term Partnerships",
    bg: "bg-[#FF5C00]",
    text: "text-white",
    sub: "text-orange-100",
  },
  {
    value: "Proven Process",
    label: "A Repeatable Workflow",
    bg: "bg-slate-900",
    text: "text-white",
    sub: "text-slate-500",
  },
  {
    value: "Built to Last",
    label: "Scalable Code & Design",
    bg: "bg-white",
    text: "text-slate-900",
    sub: "text-slate-400",
  },
  {
    value: "Legal Expertise",
    label: "CAC, TIN & SCUML",
    bg: "bg-slate-900",
    text: "text-white",
    sub: "text-slate-500",
  },
];

const testimonials = [
  {
    quote:
      "“The website loads faster compared to our previous website. The image doesn't even take time to load. You also took your time to look into what we want and delivered exactly what we needed.",
    name: "Mr Femi",
    role: "IT Engineer, GTA Hotel",
    initials: "FE",
    card: "bg-white border-slate-100",
    text: "text-slate-900",
    muted: "text-slate-500",
    deco: "text-slate-100",
    avatar: "bg-slate-100 text-slate-500",
  },
  {
    quote:
      "I love the UI of my E-commerce website, the payment integration and the admin management system. And the fact I can add products myself. And also the support of multiple currencies.",
    name: "Olusanya Rofiat",
    role: "Founder, That Local Girl",
    initials: "OR",
    card: "bg-slate-900 border-slate-800",
    text: "text-white",
    muted: "text-slate-400",
    deco: "text-slate-800",
    avatar: "bg-slate-800 text-slate-300",
  },
  {
    quote:
      "From business registration to a full web presence, they handled everything. Professional, fast, and reliable.",
    name: "Yusroh",
    role: "CEO, Laide Lux Hub",
    initials: "EN",
    card: "bg-[#FF5C00] border-orange-400/20",
    text: "text-white",
    muted: "text-orange-100",
    deco: "text-orange-400/20",
    avatar: "bg-white/20 text-white",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We listen to your goals, research your market, and define the full project scope.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We build a roadmap, timelines, tech stack, and design direction before touching a tool.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Wireframes to high-fidelity UI. You approve every screen before development begins.",
  },
  {
    num: "04",
    title: "Development",
    desc: "Agile sprints with weekly demos. You stay in the loop at every stage.",
  },
  {
    num: "05",
    title: "Testing & QA",
    desc: "Rigorous cross-device and browser testing before anything goes public.",
  },
  {
    num: "06",
    title: "Launch & Support",
    desc: "We deploy, monitor, and remain available post-launch to keep everything running.",
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Aboutus() {
  return (
    <div className="bg-[#fafafa]">
      {/* ════════════════════════════════════
          1. HERO
      ════════════════════════════════════ */}
      <section className="px-6 md:px-12 pt-36 pb-24">
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="About Devola Solutions" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
                We Are
                <br />
                <span className="text-[#FF5C00]">Devola</span> Solutions.
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                A team of passionate developers, designers, and strategists
                building the digital backbone of businesses, from
                stunning websites and apps to the legal foundation that makes it
                all official.
              </p>
              <span className="inline-flex items-center gap-2 bg-white border border-slate-100 rounded-full px-4 py-2 mt-6 shadow-sm">
                <BsBank className="text-slate-500 text-sm" />
                <span className="text-xs font-bold text-slate-700">CAC Registered · RC 9717931</span>
              </span>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-400 font-medium shrink-0">
              <Link href="/" className="hover:text-[#FF5C00] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-bold">About Us</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {heroStats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
              >
                <div className="text-xl font-extrabold text-slate-900">
                  {value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          2. COMPANY STORY
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel text="Our Story" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05] mb-8">
              Digital Craftsmanship
              <br />
              <span className="text-slate-400 font-bold text-3xl md:text-4xl">
                Without the Ego.
              </span>
            </h2>
            <div className="space-y-5 text-slate-500 leading-relaxed text-base">
              <p>
                Devola Solutions was born from a simple frustration: too many
                Nigerian businesses had brilliant ideas but struggled to find a
                reliable technical partner who understood their market, moved
                fast, and delivered quality without the runaround.
              </p>
              <p>
                We started in 2022 with a clear conviction — that world-class
                digital products shouldn&apos;t be out of reach for businesses
                and brands. That conviction has only grown stronger since.
              </p>
              <p>
                We are a collective of developers, designers, and strategists
                who care deeply about the work we ship and the businesses we
                help build.
              </p>
            </div>

            {/* Founder quote */}
            <blockquote className="mt-10 border-l-4 border-[#FF5C00] pl-6">
              <p className="text-slate-700 font-medium italic leading-relaxed">
                &ldquo;We don&apos;t just build products, we build the digital
                foundation that gives businesses the confidence to grow.&rdquo;
              </p>
              <footer className="mt-3 text-sm font-bold text-slate-900">
                Alao Abdulsalam Olayinka
                <span className="text-slate-400 font-medium">
                  {" "}
                  · Founder & CEO
                </span>
              </footer>
            </blockquote>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
              Our Journey
            </h3>
            <div className="relative space-y-0">
              {milestones.map((m, i) => (
                <div key={`${m.year}-${i}`} className="flex gap-5 group">
                  {/* Line + dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF5C00] shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-200 my-1" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-black text-[#FF5C00] uppercase tracking-widest">
                      {m.year}
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">
                      {m.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          3. MISSION & VISION
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel text="Purpose" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Mission */}
            <div className="bg-slate-900 rounded-3xl p-10">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FF5C00] mb-6">
                Mission
              </span>
              <p className="text-2xl md:text-3xl font-black text-white leading-[1.2]">
                To deliver world-class digital products that empower
                businesses and brands to compete globally.
              </p>
              <p className="text-slate-400 mt-6 leading-relaxed text-sm">
                We do this through high-quality engineering, intentional
                design, and a genuine commitment to our clients&apos;
                long-term success.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#FF5C00] rounded-3xl p-10">
              <span className="inline-flex items-center gap-2 bg-white/20 border border-white/20 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white mb-6">
                Vision
              </span>
              <p className="text-2xl md:text-3xl font-black text-white leading-[1.2]">
                To become Africa&apos;s most trusted digital agency — known
                for speed, quality, and integrity.
              </p>
              <p className="text-orange-100 mt-6 leading-relaxed text-sm">
                A future where every ambitious business and brands has access to
                the digital tools and talent it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          4. WHAT MAKES US DIFFERENT
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <SectionLabel text="Why Choose Us" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                What Makes Us
                <br />
                Different
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              We&apos;ve built our reputation on four things that clients tell
              us matter most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className={`relative rounded-3xl border ${d.border} ${d.bg} p-8 min-h-56 flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}
              >
                <span className="text-4xl mb-6">{d.icon}</span>
                <div>
                  <h3
                    className={`text-xl font-black mb-2 tracking-tight ${d.dark ? "text-white" : "text-slate-900"}`}
                  >
                    {d.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${d.dark ? "text-white/70" : "text-slate-500"}`}
                  >
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          5. MEET THE TEAM
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <SectionLabel text="The Team" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Meet the People
                <br />
                Behind the Work
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              A small, senior team that cares about craft and takes full
              ownership of every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <div
                key={`${m.name}-${i}`}
                className="bg-white rounded-3xl border border-slate-100 p-7 flex flex-col gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              >
                {/* Avatar */}
                <div
                  className={`w-14 h-14 rounded-2xl ${m.bg} flex items-center justify-center text-lg font-black ${m.text}`}
                >
                  {m.initials}
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 leading-tight">
                    {m.name}
                  </h3>
                  <p className="text-xs text-[#FF5C00] font-bold uppercase tracking-wider mt-0.5">
                    {m.role}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mt-3">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          6. SKILLS & TECHNOLOGIES
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel text="Our Stack" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Skills & Technologies
            </h2>
            <p className="text-slate-500 mt-4 max-w-md mx-auto">
              The tools and frameworks we use every day to build fast, reliable,
              and scalable products.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
            {techs.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl border border-slate-100 p-4 flex flex-col items-center gap-2.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <span
                  className={`text-3xl ${t.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {t.icon}
                </span>
                <span className="text-[10px] font-bold text-slate-500 text-center leading-tight">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          7. ACHIEVEMENTS
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel text="What We Stand For" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Principles That Guide
              <br />
              Every Project
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {achievements.map(({ value, label, bg, text, sub }) => (
              <div
                key={label}
                className={`${bg} rounded-3xl p-8 flex flex-col justify-between min-h-36 border border-slate-100`}
              >
                <div className={`text-xl font-extrabold ${text}`}>{value}</div>
                <div
                  className={`text-xs font-bold uppercase tracking-wider mt-4 ${sub}`}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          8. TESTIMONIALS
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <SectionLabel text="Testimonials" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Kind Words
                <br />
                From Clients
              </h2>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              Don&apos;t take our word for it — hear from the businesses
              we&apos;ve helped grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-3xl border ${t.card} p-8 flex flex-col justify-between min-h-64 overflow-hidden`}
              >
                <span
                  className={`absolute top-4 right-6 text-[7rem] font-black leading-none select-none pointer-events-none ${t.deco}`}
                >
                  &ldquo;
                </span>
                <p
                  className={`relative z-10 text-base leading-relaxed font-medium ${t.text} mb-10`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="relative z-10">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#FF5C00] text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${t.avatar}`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className={`text-sm font-bold ${t.text}`}>
                        {t.name}
                      </div>
                      <div className={`text-xs mt-0.5 ${t.muted}`}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          9. PROCESS / WORKFLOW
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div>
              <SectionLabel text="How We Work" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Our Process
              </h2>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              A clear, repeatable workflow that keeps every project on track
              from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`rounded-3xl p-8 flex flex-col gap-6 border ${
                  i === 0
                    ? "bg-[#FF5C00] border-orange-400/30 text-white"
                    : i % 2 === 0
                      ? "bg-slate-900 border-slate-800 text-white"
                      : "bg-white border-slate-100 text-slate-900"
                }`}
              >
                <span
                  className={`text-4xl font-black leading-none ${i === 0 ? "text-orange-200/40" : i % 2 === 0 ? "text-slate-700" : "text-slate-300"}`}
                >
                  {s.num}
                </span>
                <div>
                  <h3 className="text-xl font-black tracking-tight leading-snug mb-2">
                    {s.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${i === 0 ? "text-orange-100" : i % 2 === 0 ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          10. CTA
      ════════════════════════════════════ */}
      <FinalCTA />
    </div>
  );
}
