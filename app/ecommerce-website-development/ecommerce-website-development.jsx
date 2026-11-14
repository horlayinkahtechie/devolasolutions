import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsCheckLg } from "react-icons/bs";
import { BiCreditCard, BiWorld, BiShield } from "react-icons/bi";
import FinalCTA from "../_components/FinalCTA";
import FaqSchema from "../_components/FaqSchema";
import {
  getSolution,
  getTierDisplayPrice,
  getOriginalTierDisplayPrice,
  getDiscountPercent,
  getDiscountLabel,
} from "../_data/solutions";
import { getServerCurrency } from "../_lib/currency-server";
import { projects } from "../_data/projects";
import { SLOT_DURATION_LABEL } from "../_lib/booking-config";

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
    icon: <BiCreditCard size={20} />,
    title: "Stripe & Paystack, built in",
    desc: "Real payment processing, not a mockup — card payments, multiple gateways, and secure checkout from day one.",
  },
  {
    icon: <BiWorld size={20} />,
    title: "Multi-currency, cross-border ready",
    desc: "Built for stores selling across countries — multiple currencies, accurate shipping costs, and international customers handled correctly.",
  },
  {
    icon: <BiShield size={20} />,
    title: "Full ownership on handover",
    desc: "Source code, admin dashboard, and every account — domain, hosting, payment gateway — transfer to you when the build is done.",
  },
];

// Order matters here — shown exactly in this sequence. Some of these don't
// have a case-study write-up, and a couple of the live links are currently
// down — hrefResolved below (not this list) decides where each one actually
// points so nothing links out to a dead domain.
const showcase = [
  {
    slug: "dwelcore",
    tagline: "Custom home-plan platform built for US customers",
  },
  {
    slug: "that-local-girl",
    tagline: "African groceries, built for a cross-border audience",
  },
  {
    slug: "ayora-tribe-limited",
    tagline: "A premium scent & gifting brand, built to match the product",
  },
  {
    slug: "ocla-botanicals",
    tagline: "Bulk botanical supplier selling to global beauty brands",
  },
  {
    slug: "amazon-world",
    tagline: "Clothing e-commerce with cart, checkout and admin management",
  },
  {
    slug: "lolaselan",
    tagline: "Clothing e-commerce with Stripe payments and real-time shipping",
  },
];

// Two of the showcase projects, told in more depth — challenge, what we
// actually built, and why the client chose us. `highlightIndexes` points at
// specific bullets in each project's real caseStudy.solutions list
// (projects.js) by position rather than duplicating their text, so this
// can't quietly drift out of sync with the real list if its wording ever
// changes. `whyTheyChoseUs` is editorial, written to match what each
// client's own testimonial and challenge actually said — not a generic claim.
const flagshipCaseStudies = [
  {
    slug: "dwelcore",
    displayName: "Dwelcore",
    highlightIndexes: [2, 9, 14, 17], // AI search · Plan Fit Report · Calendly booking · abandoned-cart recovery
    whyTheyChoseUs:
      "Dwelcore came to us stuck on WordPress, unable to build the custom plan-browsing and purchase flow their business actually needed. They chose us because we could ship real custom functionality — AI-powered search, a paid Plan Fit Report lead magnet, Klaviyo-driven abandoned-cart recovery — not just another theme, and because we stayed easy to work with throughout.",
  },
  {
    slug: "that-local-girl",
    displayName: "That Local Girl",
    highlightIndexes: [3, 5, 8, 9], // multi-currency display · shipping-zone pricing · loyalty points · referral program
    whyTheyChoseUs:
      "That Local Girl, a Canada-based African groceries brand, needed more than a storefront — they needed real cross-border logistics: accurate shipping costs, multiple currencies, and a loyalty and referral system to keep customers coming back. They chose us because we built all of it as one connected platform, with an admin system simple enough that they manage it themselves day to day.",
  },
];

const faqs = [
  {
    q: "Is this a template, or a custom build?",
    a: "Fully custom — built with Next.js and your choice of backend (Firebase, Supabase, etc.), not a Shopify theme or WordPress plugin stack. Dwelcore, That Local Girl, and Ayora Tribe, shown above, are all live examples.",
  },
  {
    q: "Which payment gateways do you support?",
    a: "Stripe and Paystack are what we've shipped most, plus PayPal and Flutterwave depending on the markets you sell into. Multiple gateways can run side by side if you need both local and international payment methods.",
  },
  {
    q: "Can the store handle multiple currencies and international shipping?",
    a: "Yes — multi-currency checkout and real shipping-cost calculation (via carrier integrations) are both things we've built into live stores, not theoretical features.",
  },
  {
    q: "What if I need more than the Standard tier covers?",
    a: "The Fully Customised tier covers unlimited products, multi-vendor, subscriptions, loyalty points, and custom integrations — and anything even more specific is scoped and quoted as a add-on, confirmed in writing before we start.",
  },
  {
    q: "How does payment for the project itself work?",
    a: "60% upfront to begin work, 40% on final delivery — the same structure for every project, confirmed in writing before any work starts.",
  },
];

// lolaselan now points to a live Netlify deployment (confirmed working).
// amazon-world is still down (connection times out) but links straight to
// the real domain anyway, per instruction — fix its hosting/DNS before
// running ads at this page, or those clicks waste ad spend.
const DEAD_LIVE_LINKS = new Set([]);

function resolveHref(project) {
  if (project.caseStudy) return { href: `/portfolio/${project.slug}`, external: false };
  if (project.link && !DEAD_LIVE_LINKS.has(project.slug)) {
    return { href: project.link, external: true };
  }
  return { href: "/portfolio", external: false };
}

export default async function EcommerceWebsiteDevelopment() {
  const currency = await getServerCurrency();
  const solution = getSolution("ecommerce-website");
  const discountPercent = getDiscountPercent(solution, currency);
  const discountLabel = getDiscountLabel(solution, currency);

  const showcaseProjects = showcase
    .map((s) => ({ ...s, project: projects.find((p) => p.slug === s.slug) }))
    .filter((s) => s.project)
    .map((s) => ({ ...s, ...resolveHref(s.project) }));

  const testimonials = showcaseProjects
    .map((s) => s.project.caseStudy?.testimonial)
    .filter(Boolean);

  const flagshipCaseStudyProjects = flagshipCaseStudies
    .map((c) => ({ ...c, project: projects.find((p) => p.slug === c.slug) }))
    .filter((c) => c.project?.caseStudy)
    .map((c) => ({
      ...c,
      highlightSolutions: c.highlightIndexes
        .map((i) => c.project.caseStudy.solutions[i])
        .filter(Boolean),
    }));

  // A fixed, hand-picked set — in this exact order. Most of these have no
  // case-study write-up, so they route through resolveHref the same way
  // the showcase above does (straight to the live site when there is no
  // case study to read instead).
  const moreProjectSlugs = [
    "apex-pc-repairs",
    "feberto-techniques",
    "braten-investment-ltd",
    "precious-apartments",
    "gta-hotels",
    "gta-restaurant-management-system",
  ];
  const moreProjects = moreProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((p) => ({ project: p, ...resolveHref(p) }));

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
            <span className="text-slate-900 font-bold">E-Commerce Website Development</span>
          </div>

          <div className="max-w-2xl">
            <Label text="For International Clients" />
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
              E-Commerce Websites
              <br />
              <span className="text-[#FF5C00]">Built to Sell, Not Just to Look Good.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              Custom online stores with real payment processing, multi-currency
              checkout, and admin tools — not a templated builder. See the
              stores we&apos;ve already shipped below.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?service=Web+Development&type=E-Commerce+Website"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300"
              >
                Get a Free Quote →
              </Link>
              <Link
                href="/pricing/solutions/ecommerce-website"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-7 py-3.5 rounded-full font-bold text-sm hover:border-slate-300 transition-all duration-300"
              >
                See Full Pricing & Features
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
          SHOWCASE — REAL STORES
      ══════════════════════════════ */}
      <section className="py-20 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Label text="Already Live" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Real Stores We&apos;ve Built.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseProjects.map(({ project, tagline, href, external }) => (
              <Link
                key={project.slug}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-base font-black text-slate-900 group-hover:text-[#FF5C00] transition-colors mb-1.5">
                    {project.name}
                  </p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
                    {tagline}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">{project.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-[#FF5C00] transition-colors">
                    {project.caseStudy ? "Read the case study" : external ? "Visit live site" : "See more work"}
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FLAGSHIP CASE STUDIES
      ══════════════════════════════ */}
      {flagshipCaseStudyProjects.length > 0 && (
        <section className="py-20 px-6 md:px-12 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <Label text="How We've Helped" />
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05]">
                What We Actually Built, And Why They Chose Us.
              </h2>
            </div>

            {flagshipCaseStudyProjects.map(({ project, displayName, highlightSolutions, whyTheyChoseUs }, i) => (
              <div
                key={project.slug}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i > 0 ? "mt-20 pt-16 border-t border-slate-100" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-xs font-black uppercase tracking-widest text-[#FF5C00] mb-3">
                    Case Study — {displayName}
                  </p>
                  <h3 className="text-2xl font-black text-slate-900 mb-5 leading-snug">
                    {project.desc}
                  </h3>

                  <div className="mb-5">
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      The Challenge
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.caseStudy.challenge}
                    </p>
                  </div>

                  <div className="mb-5">
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      What We Built
                    </p>
                    <ul className="space-y-2">
                      {highlightSolutions.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <BsCheckLg className="text-[#FF5C00] shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      Why {displayName} Chose Us
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">{whyTheyChoseUs}</p>
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-[#FF5C00] transition-colors"
                  >
                    Read the Full Case Study
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

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
                  Hotel booking engines, admin systems, and more — live
                  client work, not mockups.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="shrink-0 inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300"
              >
                View More <BsArrowRight />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {moreProjects.map(({ project: p, href, external }) => (
                <Link
                  key={p.slug}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
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
          REVIEWS
      ══════════════════════════════ */}
      {testimonials.length > 0 && (
        <section className="py-20 px-6 md:px-12 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <Label text="What Clients Say" />
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Real Feedback, Not Stock Quotes.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="relative rounded-3xl border border-slate-100 bg-[#fafafa] p-8 overflow-hidden"
                >
                  <span className="absolute top-2 right-6 text-[5rem] font-black leading-none select-none pointer-events-none text-slate-200">
                    &ldquo;
                  </span>
                  <p className="relative z-10 text-base leading-relaxed font-medium text-slate-800 mb-7">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-black shrink-0">
                      {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{t.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF5C00] hover:gap-2.5 transition-all duration-200 group"
              >
                See All Reviews
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════
          BOOK A CALL
      ══════════════════════════════ */}
      {currency === "USD" && (
        <section className="py-20 px-6 md:px-12 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-white border border-slate-100 p-10 md:p-14">
              <div className="max-w-xl">
                <Label text="Not Ready to Commit?" />
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05] mb-4">
                  Talk It Through First. It&apos;s Free.
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Book a focused {SLOT_DURATION_LABEL} video call with the person
                  who&apos;ll actually build your store — before you commit
                  to anything bigger.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Talk directly with the developer, not a salesperson",
                    "Google Meet — nothing to install",
                    "Pick a time instantly, no back-and-forth",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <BsCheckLg className="text-[#FF5C00] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300"
                >
                  Book Your Call →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════
          PRICING
      ══════════════════════════════ */}
      <section className="py-20 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Label text="Fixed Pricing" />
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Three Tiers. No Hidden Costs.
              </h2>
            </div>
            {discountPercent && (
              <span className="inline-flex items-center gap-2 bg-[#FF5C00] text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shrink-0 w-fit">
                {discountLabel || `${discountPercent}% Off`} — already applied below
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {solution.tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-3xl flex flex-col gap-6 p-8 ${
                  t.highlight ? "bg-slate-900 ring-2 ring-[#FF5C00]" : "bg-white border border-slate-100"
                }`}
              >
                {t.highlight && (
                  <div className="absolute top-5 right-5 bg-[#FF5C00] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Popular
                  </div>
                )}
                <div>
                  <p className={`text-xs font-black uppercase tracking-widest mb-2 ${t.highlight ? "text-[#FF5C00]" : "text-slate-400"}`}>
                    {t.name}
                  </p>
                  {discountPercent && (
                    <p className={`text-sm line-through leading-none mb-1 ${t.highlight ? "text-slate-500" : "text-slate-400"}`}>
                      {getOriginalTierDisplayPrice(t, currency)}
                    </p>
                  )}
                  <p className={`text-3xl font-extrabold ${t.highlight ? "text-white" : "text-slate-900"}`}>
                    {getTierDisplayPrice(t, currency)}
                  </p>
                  <p className={`text-sm mt-3 leading-relaxed ${t.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    {t.description}
                  </p>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {t.features.slice(0, 5).map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <BsCheckLg className={`shrink-0 mt-0.5 ${t.highlight ? "text-[#FF5C00]" : "text-green-500"}`} />
                      <span className={t.highlight ? "text-slate-300" : "text-slate-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?${new URLSearchParams({
                    service: "Web Development",
                    type: solution.name,
                    package: t.name,
                    price: getTierDisplayPrice(t, currency),
                  }).toString()}`}
                  className={`inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                    t.highlight
                      ? "bg-[#FF5C00] text-white hover:bg-orange-500"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link
              href="/pricing/solutions/ecommerce-website"
              className="text-sm font-bold text-slate-500 hover:text-[#FF5C00] transition-colors"
            >
              See the full feature breakdown for every tier →
            </Link>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════
          FAQ
      ══════════════════════════════ */}
      <section className="py-20 px-6 md:px-12 border-t border-slate-100 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Label text="Before You Reach Out" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Questions We Get Often
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-[#fafafa] border border-slate-100 rounded-2xl px-7 py-6">
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
