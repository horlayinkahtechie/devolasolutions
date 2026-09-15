import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { webSolutions, appSolutions, getDisplayPrice } from "../_data/solutions";
import { formatMoney } from "../_lib/currency";
import { getServerCurrency } from "../_lib/currency-server";

const OTHER_TYPE = "Other (please specify)";

const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

function preview(s) {
  const list = s.highlights || s.features || [];
  return list.slice(0, 4);
}

function Card({ s, currency }) {
  const items = preview(s);
  const extra = (s.highlights || s.features || []).length - items.length;

  return (
    <Link
      href={`/pricing/solutions/${s.slug}`}
      className="group relative flex flex-col gap-5 rounded-3xl bg-white border border-slate-100 p-7 hover:shadow-xl hover:-translate-y-0.5 hover:border-orange-100 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF5C00] flex items-center justify-center text-xl shrink-0">
          {s.icon}
        </div>
        <div className="text-right">
          <p className="text-lg font-black text-slate-900 leading-none">
            {getDisplayPrice(s, currency)}
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
            {s.timeline}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-base font-black text-slate-900 leading-tight mb-1.5 group-hover:text-[#FF5C00] transition-colors">
          {s.name}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">{s.summary}</p>
      </div>

      <ul className="space-y-1.5">
        {items.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
            <span className="text-green-500 shrink-0 mt-0.5">✓</span>
            <span className="leading-snug">{f}</span>
          </li>
        ))}
        {extra > 0 && (
          <li className="text-xs font-bold text-slate-400 pl-4">
            + {extra} more included
          </li>
        )}
      </ul>

      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-[#FF5C00] transition-colors">
        See full details &amp; features
        <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}

/* Shown as the last tile in each grid — for anyone whose type isn't listed. */
function NotListedCard({ category }) {
  const serviceLabel =
    category === "mobile" ? "Mobile App Development" : "Web Development";
  const noun = category === "mobile" ? "app" : "website";
  const href = `/contact?${new URLSearchParams({
    service: serviceLabel,
    type: OTHER_TYPE,
  }).toString()}`;

  return (
    <Link
      href={href}
      className="group relative flex flex-col items-start justify-center gap-4 rounded-3xl border-2 border-dashed border-slate-200 p-7 hover:border-[#FF5C00] hover:bg-orange-50/40 transition-all duration-300 min-h-[240px]"
    >
      <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 group-hover:bg-[#FF5C00] group-hover:text-white flex items-center justify-center text-xl shrink-0 transition-colors">
        <BiMessageDetail />
      </div>
      <div>
        <h3 className="text-base font-black text-slate-900 leading-tight mb-1.5">
          Don&apos;t see your {noun} type?
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          Tell us directly what you&apos;re building — we&apos;ll scope it and
          send you a fixed price, just like everything else here.
        </p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-[#FF5C00] transition-colors">
        Contact us directly
        <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}

export default async function SolutionsCatalog({
  filter = "all",
  heading = "Pick a Website or App Type",
  subheading = "Every build below has a fixed starting price and a full feature breakdown. Click any one to see exactly what you get — no forms, no waiting for a quote.",
  id = "solutions",
}) {
  const currency = await getServerCurrency();
  const showWeb = filter === "all" || filter === "web";
  const showApps = filter === "all" || filter === "mobile";

  return (
    <section id={id} className="py-24 px-5 md:px-10 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-12 border-b border-slate-200 gap-8">
          <div>
            <Label text="Solutions & Pricing" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              {heading}
            </h2>
          </div>
          <p className="text-slate-500 leading-relaxed max-w-md text-sm md:text-base">
            {subheading}
          </p>
        </div>

        {showWeb && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">
                Websites &amp; Web Apps
              </h3>
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-bold text-slate-400">
                From {formatMoney(100000, currency)}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {webSolutions.map((s) => (
                <Card key={s.slug} s={s} currency={currency} />
              ))}
              <NotListedCard category="web" />
            </div>
          </div>
        )}

        {showApps && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">
                Mobile Applications
              </h3>
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-bold text-slate-400">
                From {formatMoney(3500000, currency)}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {appSolutions.map((s) => (
                <Card key={s.slug} s={s} currency={currency} />
              ))}
              <NotListedCard category="mobile" />
            </div>
          </div>
        )}

        <p className="text-xs text-slate-400 mt-12 max-w-2xl">
          Prices shown in {currency === "NGN" ? "Nigerian Naira (₦)" : "US Dollars (converted at ₦1,500 = $1)"}{" "}
          based on your location — use the currency switch in the menu to change it. All prices are
          one-time build fees; domain, hosting and third-party subscriptions are billed separately at
          exact cost. After development and deployment, every account is handed over to you in your
          own name.
        </p>
      </div>
    </section>
  );
}
