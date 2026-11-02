import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsCheckLg } from "react-icons/bs";
import { BiTime, BiDollar, BiShield } from "react-icons/bi";
import FinalCTA from "../_components/FinalCTA";
import SolutionsCatalog from "../_components/SolutionsCatalog";
import FaqSchema from "../_components/FaqSchema";
import { projects } from "../_data/projects";

const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

const trustPoints = [
  {
    icon: <BiDollar size={20} />,
    title: "Priced in USD",
    desc: "Every website and app type has a fixed US-dollar price, shown automatically — no currency guesswork, no hidden conversion.",
  },
  {
    icon: <BiTime size={20} />,
    title: "Morning overlap with US Eastern",
    desc: "Our afternoon in Lagos lands in the morning on the US East Coast, so live calls are easy to schedule — the rest of the day runs async over email and WhatsApp.",
  },
  {
    icon: <BiShield size={20} />,
    title: "60% upfront, 40% on delivery",
    desc: "You never pay in full before seeing a finished product. The scope and price are confirmed in writing before any work starts.",
  },
];

const proof = [
  {
    name: "Dwelcore",
    desc: "A home-plan platform for US customers to browse, customize, and buy home plans online — migrated off WordPress onto a custom Next.js build with Stripe multi-currency payments.",
    image: "/dwelcore.png",
    href: "/portfolio/dwelcore",
    external: false,
  },
  {
    name: "Apex PC Repairs",
    desc: "A business website for a PC repair service in San Bernardino County, California — built to turn local search traffic into booked repairs.",
    image: "/apex-pc-repairs.png",
    href: "https://apexpcrepairs.com",
    external: true,
  },
];

// The rest of the live, real-client web portfolio — pulled from the same
// data every other portfolio section uses, so it can't drift out of sync.
// Excludes the two flagship US case studies already featured above.
const alreadyFeatured = ["dwelcore", "apex-pc-repairs"];
const moreProjects = projects.filter(
  (p) => p.type === "web" && p.caseStudy && p.image && !alreadyFeatured.includes(p.slug)
);

const faqs = [
  {
    q: "Do you actually work with US-based businesses, or is this just a Nigeria-focused agency?",
    a: "Both. We're based in Lagos, Nigeria, and work 100% remotely with clients across the US — Dwelcore (a US home-plan platform) and Apex PC Repairs (a California-based PC repair business) are both live examples. All pricing on this site is shown in USD automatically for US visitors.",
  },
  {
    q: "What time zone do you work in, and how do we communicate?",
    a: "We're on West Africa Time (GMT+1). Lagos afternoons overlap with US Eastern mornings, which is when we schedule live calls — outside that window, updates run async over email and WhatsApp so the project keeps moving regardless of the time difference.",
  },
  {
    q: "How does payment work for a US client?",
    a: "The same structure as every project: 60% upfront to begin work, 40% on final delivery. Payment method is confirmed during your discovery call, and the full scope and price are put in writing before any work starts.",
  },
  {
    q: "Can you build in React/Next.js and React Native specifically, not just generic web work?",
    a: "Yes — Next.js and React are our default stack for websites and web apps, and React Native for mobile. Dwelcore and the rest of our web portfolio are built on this stack, not templated builders.",
  },
];

export default function WebDevelopmentUSA() {
  return (
    <div className="bg-[#fafafa]">
      <FaqSchema faqs={faqs} />
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-20">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-10">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Web & App Development for US Businesses</span>
          </div>

          <div className="max-w-2xl">
            <Label text="For US Clients" />
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
              Website &amp; App
              <br />
              <span className="text-[#FF5C00]">Development for US Businesses.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              Fixed USD pricing, Next.js &amp; React Native, and real projects
              already shipped for US clients — not a portfolio of promises.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?service=Web+Development"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300"
              >
                Get a Free Quote →
              </Link>
              <Link
                href="/pricing/web-development"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-7 py-3.5 rounded-full font-bold text-sm hover:border-slate-300 transition-all duration-300"
              >
                See Web Pricing
              </Link>
              <Link
                href="/pricing/mobile-development"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-7 py-3.5 rounded-full font-bold text-sm hover:border-slate-300 transition-all duration-300"
              >
                See App Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TRUST POINTS
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6">
          {trustPoints.map((t) => (
            <div key={t.title} className="flex flex-col gap-4">
              <div className="w-11 h-11 rounded-2xl bg-orange-50 text-[#FF5C00] flex items-center justify-center shrink-0">
                {t.icon}
              </div>
              <div>
                <p className="text-sm font-black text-slate-900 mb-1.5">{t.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          PROOF — REAL US PROJECTS
      ══════════════════════════════ */}
      <section className="py-20 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Label text="Proof, Not Promises" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Already Built for US Clients.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {proof.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                target={p.external ? "_blank" : undefined}
                rel={p.external ? "noopener noreferrer" : undefined}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-base font-black text-slate-900 group-hover:text-[#FF5C00] transition-colors mb-2">
                    {p.name}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-[#FF5C00] transition-colors">
                    {p.external ? "Visit live site" : "Read the case study"}
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          MORE OF THE PORTFOLIO
      ══════════════════════════════ */}
      {moreProjects.length > 0 && (
        <section className="py-20 px-6 md:px-12 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <Label text="Full Portfolio" />
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05]">
                  More Real Projects, Shipped.
                </h2>
                <p className="text-slate-500 text-sm mt-3 max-w-xl">
                  Hotel booking engines, e-commerce platforms, admin systems,
                  and more — live client work, not mockups.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="shrink-0 inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300"
              >
                View Full Portfolio <BsArrowRight />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {moreProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-black text-slate-900 group-hover:text-[#FF5C00] transition-colors">
                      {p.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════
          PRICING BY TYPE
      ══════════════════════════════ */}
      <div className="border-t border-slate-100">
        <SolutionsCatalog
          filter="all"
          id="pricing"
          heading="Fixed USD Pricing, By Type"
          subheading="The same fixed-price catalog every client sees — no quote-on-request games. Pick a website or app type to see the exact price and full feature list."
        />
      </div>

      {/* ══════════════════════════════
          FAQ
      ══════════════════════════════ */}
      <section className="py-20 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Label text="For US Clients" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Questions US Clients Actually Ask
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="bg-white border border-slate-100 rounded-2xl px-7 py-6"
              >
                <h3 className="text-sm font-black text-slate-900 mb-2 flex items-start gap-2.5">
                  <BsCheckLg className="text-[#FF5C00] shrink-0 mt-0.5" />
                  {f.q}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
