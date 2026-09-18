import Link from "next/link";
import Image from "next/image";
import { BsCheckLg, BsArrowRight } from "react-icons/bs";
import FinalCTA from "./FinalCTA";
import OwnershipNote from "./OwnershipNote";
import HotelPricingToggle from "./HotelPricingToggle";
import { scopeExpansionNote, getDisplayPrice, getTierDisplayPrice } from "../_data/solutions";
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

function FeatureGrid({ features }) {
  return (
    <div className="grid sm:grid-cols-2 gap-2.5">
      {features.map((f) => (
        <div
          key={f}
          className="flex items-start gap-3 bg-white rounded-xl border border-slate-100 px-4 py-3.5"
        >
          <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
            ✓
          </span>
          <span className="text-sm text-slate-700 font-medium leading-snug">
            {f}
          </span>
        </div>
      ))}
    </div>
  );
}

export default async function SolutionPricingDetail({ solution: s }) {
  const currency = await getServerCurrency();
  const displayPrice = getDisplayPrice(s, currency);
  const parentHref =
    s.category === "mobile"
      ? "/pricing/mobile-development"
      : "/pricing/web-development";
  const parentLabel =
    s.category === "mobile" ? "Mobile Development" : "Web Development";
  const serviceLabel =
    s.category === "mobile" ? "Mobile App Development" : "Web Development";

  const contactHref = (extra = {}) => {
    const params = new URLSearchParams({
      service: serviceLabel,
      type: s.name,
      price: displayPrice,
      ...extra,
    });
    return `/contact?${params.toString()}`;
  };

  const isWebsite = s.category !== "mobile";
  const featuredProjects = isWebsite
    ? projects.filter((p) => p.type === "web" && p.featured && p.image).slice(0, 3)
    : [];

  return (
    <div className="bg-[#fafafa]">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-5 md:px-10 pt-36 pb-20">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-12 flex-wrap">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">›</span>
            <Link
              href="/pricing"
              className="hover:text-[#FF5C00] transition-colors"
            >
              Pricing
            </Link>
            <span className="text-slate-300">›</span>
            <Link
              href={parentHref}
              className="hover:text-[#FF5C00] transition-colors"
            >
              {parentLabel}
            </Link>
            <span className="text-slate-300">›</span>
            <span className="text-slate-700 font-bold">{s.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#FF5C00] flex items-center justify-center text-2xl shrink-0">
                  {s.icon}
                </div>
                <Label text={s.category === "mobile" ? "Mobile App" : "Website"} />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] mb-4">
                {s.name}
              </h1>
              <p className="text-lg font-bold text-[#FF5C00] mb-5">{s.tagline}</p>
              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-xl">
                {s.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {s.bestFor.map((b) => (
                  <span
                    key={b}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={contactHref()}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300 shadow-lg shadow-slate-900/10"
                >
                  Start This Project →
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-3.5 rounded-full font-bold text-sm hover:border-slate-300 transition-all duration-300"
                >
                  See All Pricing
                </Link>
              </div>
            </div>

            {/* Price card */}
            <div className="bg-slate-900 rounded-3xl p-8 ring-2 ring-[#FF5C00] lg:sticky lg:top-28">
              <p className="text-[#FF5C00] text-[10px] font-black uppercase tracking-widest mb-2">
                {s.tiers ? "Starting price" : "Fixed price"}
              </p>
              <p className="text-4xl font-black text-white mb-3">
                {displayPrice}
              </p>
              {s.priceNote && (
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {s.priceNote}
                </p>
              )}
              <div className="space-y-2.5 border-t border-slate-800 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Timeline</span>
                  <span className="text-slate-300 font-bold">{s.timeline}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Payment</span>
                  <span className="text-slate-300 font-bold">
                    {s.payment || "60% / 40%"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Ownership</span>
                  <span className="text-slate-300 font-bold">100% yours</span>
                </div>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mt-6 pt-5 border-t border-slate-800">
                {scopeExpansionNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOGGLE (hotel) ── */}
      {s.toggle && (
        <section className="py-20 px-5 md:px-10 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <Label text="Build Your Package" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05] mb-3">
              Hotel Booking Site —
              <br />
              With or Without the Restaurant System.
            </h2>
            <p className="text-slate-500 text-sm mb-10 max-w-xl">
              Start with the hotel booking website. Flip the switch to add a full
              restaurant management system and the price updates instantly.
            </p>
            <HotelPricingToggle
              basePrice={s.toggle.basePrice}
              withAddonPrice={s.toggle.withAddonPrice}
              addonLabel={s.toggle.addonLabel}
              addonDescription={s.toggle.addonDescription}
              baseFeatures={s.toggle.baseFeatures}
              addonFeatures={s.toggle.addonFeatures}
              serviceLabel={serviceLabel}
              typeName={s.name}
            />
          </div>
        </section>
      )}

      {/* ── TIERS (e-commerce) ── */}
      {s.tiers && (
        <section className="py-20 px-5 md:px-10 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <Label text="Tiers" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05] mb-3">
              Three Ways to Build It.
            </h2>
            <p className="text-slate-500 text-sm mb-12 max-w-xl">
              Every tier is fully listed below — no need to click anything to see
              what&apos;s included.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {s.tiers.map((t) => (
                <div
                  key={t.name}
                  className={`relative rounded-3xl flex flex-col gap-6 p-8 ${
                    t.highlight
                      ? "bg-slate-900 ring-2 ring-[#FF5C00]"
                      : "bg-white border border-slate-100"
                  }`}
                >
                  {t.highlight && (
                    <div className="absolute top-5 right-5 bg-[#FF5C00] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                      Popular
                    </div>
                  )}
                  <div>
                    <p
                      className={`text-xs font-black uppercase tracking-widest mb-2 ${
                        t.highlight ? "text-[#FF5C00]" : "text-slate-400"
                      }`}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`text-3xl font-extrabold ${
                        t.highlight ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {getTierDisplayPrice(t, currency)}
                    </p>
                    <p
                      className={`text-sm mt-3 leading-relaxed ${
                        t.highlight ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {t.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <BsCheckLg
                          className={`shrink-0 mt-0.5 ${
                            t.highlight ? "text-[#FF5C00]" : "text-green-500"
                          }`}
                        />
                        <span
                          className={
                            t.highlight ? "text-slate-300" : "text-slate-600"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={contactHref({ package: t.name, price: getTierDisplayPrice(t, currency) })}
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
          </div>
        </section>
      )}

      {/* ── FLAT FEATURE LIST ── */}
      {s.features && (
        <section className="py-20 px-5 md:px-10 border-t border-slate-100">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[38%_62%] gap-14 items-start">
            <div>
              <Label text="What's Included" />
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05] mb-4">
                Everything in the {displayPrice} Build.
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">
                This is the full scope — laid out here so you don&apos;t have to
                request a breakdown or sit through a call to know what you get.
              </p>
              <Link
                href={contactHref()}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#FF5C00] transition-colors group"
              >
                Start this project
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
            <FeatureGrid features={s.features} />
          </div>
        </section>
      )}

      {/* ── OWNERSHIP ── */}
      <section className="py-20 px-5 md:px-10 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <OwnershipNote />
        </div>
      </section>

      {/* ── SEE OUR WORK ── */}
      {isWebsite && (
        <section className="py-20 px-5 md:px-10 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <Label text="Proof, Not Promises" />
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05]">
                  See Websites We&apos;ve Actually Built.
                </h2>
                <p className="text-slate-500 text-sm mt-3 max-w-xl">
                  Real client projects, live in production — not mockups.
                  Browse the full portfolio to see more like this.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="shrink-0 inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300"
              >
                View All Projects <BsArrowRight />
              </Link>
            </div>

            {featuredProjects.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href="/portfolio"
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
            )}
          </div>
        </section>
      )}

      {/* ── NOTE ── */}
      <section className="pb-20 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            Price shown is a one-time build fee, in{" "}
            {currency === "NGN" ? "Nigerian Naira (₦)" : "US Dollars (converted at ₦1,500 = $1)"}{" "}
            based on your location — switch it from the menu at any time. Domain,
            hosting, developer accounts and third-party subscriptions are billed
            separately at exact cost with zero markup. Final quote is confirmed
            in writing after a short discovery call and may vary with scope.{" "}
            <Link
              href="/contact"
              className="text-slate-700 font-bold hover:text-[#FF5C00] transition-colors"
            >
              Get a free custom quote →
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
