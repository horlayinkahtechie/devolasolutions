import { BiGlobe, BiPhone } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Hand-coded websites built with Next.js & React — fast, SEO-ready, and built to convert.",
    types: [
      "E-Commerce Stores", "Hotel & Booking Sites", "Restaurant & Food Ordering",
      "Church & Ministry Sites", "Schools & Education", "Real Estate Sites",
      "Corporate & Business", "SaaS & Web Apps", "Landing Pages",
    ],
    icon: <BiGlobe />,
    scheme: "light",
    link: "/services/web-development",
    pricingLink: "/pricing/web-development",
  },
  {
    num: "02",
    title: "Mobile Apps",
    desc: "iOS & Android apps built with React Native — one codebase, two platforms, near-native performance.",
    types: [
      "E-Commerce Apps", "Hotel & Booking", "Food & Restaurant",
      "Fintech & Payments", "EdTech & Learning", "Logistics & Delivery",
      "Social & Community", "Health & Wellness", "Business Tools",
    ],
    icon: <BiPhone />,
    scheme: "orange",
    link: "/services/app-development",
    pricingLink: "/pricing/mobile-development",
  },
  {
    num: "03",
    title: "Graphic Design",
    desc: "100% custom design — no templates. Logos, decks, social media, and full brand identities.",
    types: [
      "Brand Identity", "Logo Design", "Social Media Graphics",
      "Pitch Decks", "UI/UX Design", "Print & Marketing",
      "Packaging Design", "Infographics", "Motion & Animation",
    ],
    icon: <MdOutlineDesignServices />,
    scheme: "dark",
    link: "/services/graphic-design",
    pricingLink: "/pricing/graphic-design",
  },
  {
    num: "04",
    title: "Business Registration",
    desc: "CAC registration handled end to end — no office visits, no jargon, no rejected filings.",
    types: [
      "Sole Proprietorship", "Limited Liability (LLC)", "NGO / Non-Profit",
      "Partnership", "Private Ltd Company", "TIN Registration",
      "SCUML Enrolment", "Annual Returns", "Trademark Filing",
    ],
    icon: <HiOutlineDocumentText />,
    scheme: "light",
    link: "/services/business-registration",
    pricingLink: "/pricing/business-registration",
  },
];

const schemeStyles = {
  light: {
    card: "bg-white border border-slate-100",
    icon: "bg-orange-50 text-[#FF5C00]",
    title: "text-slate-900",
    desc: "text-slate-500",
    pill: "bg-slate-50 text-slate-600 border border-slate-100 hover:border-orange-200 hover:bg-orange-50 hover:text-[#FF5C00]",
    learnMore: "bg-slate-900 text-white hover:bg-[#FF5C00] shadow-sm",
    viewPricing: "border border-slate-200 text-slate-600 hover:border-[#FF5C00] hover:text-[#FF5C00]",
    divider: "border-slate-100",
    label: "text-slate-400",
  },
  orange: {
    card: "bg-[#FF5C00]",
    icon: "bg-white/15 text-white",
    title: "text-white",
    desc: "text-orange-100",
    pill: "bg-white/10 text-white border border-white/15 hover:bg-white/20",
    learnMore: "bg-white text-slate-900 hover:bg-orange-50 shadow-sm",
    viewPricing: "border border-white/25 text-white hover:bg-white/10",
    divider: "border-orange-400/25",
    label: "text-orange-200/60",
  },
  dark: {
    card: "bg-slate-900",
    icon: "bg-white/8 text-white",
    title: "text-white",
    desc: "text-slate-400",
    pill: "bg-white/8 text-slate-300 border border-white/8 hover:bg-white/15 hover:text-white",
    learnMore: "bg-[#FF5C00] text-white hover:bg-orange-500 shadow-sm",
    viewPricing: "border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white",
    divider: "border-slate-800",
    label: "text-slate-600",
  },
};

const Services = () => (
  <section className="py-24 px-5 md:px-10 bg-[#fafafa]">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-12 border-b border-slate-200 gap-8">
        <div>
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-6 h-0.5 bg-[#FF5C00] rounded-full" />
            <span className="text-[#FF5C00] text-[11px] font-bold uppercase tracking-widest">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            Services Built
            <br />
            For Growth
          </h2>
        </div>
        <p className="text-slate-500 leading-relaxed max-w-sm text-sm md:text-base">
          End-to-end digital solutions that take your business from idea to
          market — we cover every layer of your digital presence.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {services.map((s) => {
          const st = schemeStyles[s.scheme];
          return (
            <div
              key={s.num}
              className={`relative rounded-[1.75rem] ${st.card} p-7 md:p-9 flex flex-col gap-7 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500`}
            >
              {/* Icon + title + desc */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl ${st.icon} flex items-center justify-center text-lg shrink-0 mt-0.5`}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-black tracking-tight mb-1.5 ${st.title}`}>{s.title}</h3>
                    <p className={`text-sm leading-relaxed ${st.desc}`}>{s.desc}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold tabular-nums shrink-0 mt-1 ${st.label}`}>{s.num}</span>
              </div>

              <div className={`border-t ${st.divider}`} />

              {/* Pill tags */}
              <div className="relative z-10">
                <p className={`text-[10px] font-black uppercase tracking-widest mb-3 ${st.label}`}>What we build</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.types.map((type) => (
                    <span
                      key={type}
                      className={`text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all duration-200 cursor-default ${st.pill}`}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="relative z-10 flex flex-wrap gap-2.5 mt-auto">
                <Link
                  href={s.link}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${st.learnMore}`}
                >
                  Learn More →
                </Link>
                <Link
                  href={s.pricingLink}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${st.viewPricing}`}
                >
                  View Pricing
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
