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

// lolaselan has no case-study page, and its live site is currently down
// (DNS failure — the domain itself doesn't resolve) — routed to the
// portfolio listing instead of a dead external link. amazon-world's site
// is also down right now (connection times out) but links straight to it
// anyway, per instruction — fix amazonworld.com's hosting/DNS before
// running ads at this page, or that click wastes ad spend.
const DEAD_LIVE_LINKS = new Set(["lolaselan"]);

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

  // Everything else worth showing — real web case studies not already in
  // the flagship showcase above.
  const featuredSlugs = new Set(showcase.map((s) => s.slug));
  const moreProjects = projects.filter(
    (p) => p.type === "web" && p.caseStudy && p.image && !featuredSlugs.has(p.slug)
  );

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
