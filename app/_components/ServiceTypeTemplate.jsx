import Link from "next/link";
import FinalCTA from "./FinalCTA";

const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

export default function ServiceTypeTemplate({
  data,
  parentTitle,
  parentHref,
  pricingHref,
  categoryLabel,
}) {
  return (
    <div className="bg-[#fafafa]">
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-24">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-blue-50 rounded-full blur-[100px] opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mb-10 flex-wrap">
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
            <Link
              href={parentHref}
              className="hover:text-[#FF5C00] transition-colors"
            >
              {parentTitle}
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{data.title}</span>
          </div>

          <div
            className={`grid gap-16 items-start ${data.stats ? "lg:grid-cols-[55%_45%]" : "max-w-3xl"}`}
          >
            <div>
              <Label text={categoryLabel} />
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.0] mb-4">
                {data.title}
              </h1>
              <p className="text-xl font-bold text-[#FF5C00] mb-6">
                {data.tagline}
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl">
                {data.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#FF5C00] transition-all duration-300 shadow-lg shadow-slate-900/10"
                >
                  Start This Project →
                </Link>
                <Link
                  href={pricingHref}
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold hover:border-slate-400 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {data.stats && (
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {data.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7 flex flex-col justify-between"
                  >
                    <div className="text-3xl font-black text-slate-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FEATURES
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[40%_60%] gap-16 items-start">
            <div>
              <Label text="What's Included" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6">
                Everything You Need.
                <br />
                Nothing You Don&apos;t.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Every {data.title.toLowerCase()} project we deliver includes
                these as standard — no add-on fees for the basics.
              </p>
              <Link
                href={pricingHref}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#FF5C00] transition-colors group"
              >
                See full pricing breakdown
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {data.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-white rounded-2xl border border-slate-100 px-5 py-4"
                >
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm text-slate-700 font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHO IT'S FOR
      ══════════════════════════════ */}
      {data.whoFor && data.whoFor.length > 0 && (
        <section className="py-24 px-6 md:px-12 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Label text="Who This Is For" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                Is This Right for You?
              </h2>
            </div>
            <div
              className={`grid grid-cols-1 gap-5 ${
                data.whoFor.length === 2
                  ? "md:grid-cols-2 max-w-2xl mx-auto"
                  : "md:grid-cols-3"
              }`}
            >
              {data.whoFor.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-3xl p-8 ${
                    i === 1
                      ? "bg-[#FF5C00] text-white"
                      : "bg-white border border-slate-100"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full mb-5 flex items-center justify-center font-black text-sm ${
                      i === 1
                        ? "bg-white/20 text-white"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <p
                    className={`font-medium leading-relaxed ${
                      i === 1 ? "text-white" : "text-slate-700"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════
          PRICING
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <Label text="Pricing" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            What Does It Cost?
          </h2>
          <p className="text-slate-500 mb-12">
            Transparent, fixed pricing. No surprises.
          </p>

          <div className="bg-slate-900 rounded-3xl p-10 ring-2 ring-[#FF5C00] text-left">
            <p className="text-[#FF5C00] text-xs font-black uppercase tracking-widest mb-2">
              {data.pricing.tier}
            </p>
            <p className="text-4xl font-black text-white mb-3">
              {data.pricing.price}
            </p>
            {data.pricing.note && (
              <p className="text-slate-400 text-sm mb-8">{data.pricing.note}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center bg-[#FF5C00] text-white py-4 rounded-full font-bold hover:bg-orange-500 transition-all duration-300"
              >
                Start This Project →
              </Link>
              <Link
                href={pricingHref}
                className="flex-1 inline-flex items-center justify-center border border-slate-700 text-slate-300 py-4 rounded-full font-bold hover:border-slate-500 hover:text-white transition-all duration-300"
              >
                Full Pricing Breakdown
              </Link>
            </div>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            All prices in Nigerian Naira (₦). Final quote depends on scope.{" "}
            <Link
              href="/contact"
              className="text-slate-600 font-bold hover:text-[#FF5C00] transition-colors"
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
