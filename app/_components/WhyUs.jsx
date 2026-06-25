const reasons = [
  {
    title: "Fast Delivery",
    desc: "Our agile workflow ensures your product launches in weeks, not months.",
  },
  {
    title: "Modern Tech",
    desc: "We use Next.js and Cloud-native stacks for 99.9% uptime and speed.",
  },
  {
    title: "Mobile Responsive",
    desc: "Your users get a flawless experience on every device, guaranteed.",
  },
  {
    title: "Ongoing Support",
    desc: "We don't just ship and leave; we partner for long-term growth.",
  },
];

const WhyUs = () => (
  <section className="py-28 bg-white px-5 md:px-10">
    <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
      {/* Sticky header */}
      <div className="md:col-span-5 md:sticky md:top-28">
        <div className="inline-flex items-center gap-2.5 mb-6">
          <span className="w-6 h-0.5 bg-[#FF5C00] rounded-full" />
          <span className="text-[#FF5C00] text-[11px] font-bold uppercase tracking-widest">Values</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.92] text-slate-900">
          Why Brands <br />
          Partner <br />
          With Us
        </h2>
        <div className="mt-8 flex items-center gap-3">
          <div className="h-1 w-16 bg-slate-900 rounded-full" />
          <div className="h-1 w-3 bg-[#FF5C00] rounded-full" />
        </div>
      </div>

      {/* Reasons */}
      <div className="md:col-span-7 flex flex-col">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="group flex gap-7 items-start border-b border-slate-100 py-8 first:pt-0 hover:border-[#FF5C00]/40 transition-all duration-500"
          >
            <div className="shrink-0 w-12 flex flex-col items-center gap-1 pt-1">
              <span className="text-3xl font-black text-slate-200 group-hover:text-[#FF5C00] transition-colors duration-400 leading-none">
                0{i + 1}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-xl mb-2.5 tracking-tight text-slate-900 group-hover:text-[#FF5C00] transition-colors duration-300">
                {r.title}
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
                {r.desc}
              </p>
            </div>
            <span className="text-slate-200 group-hover:text-[#FF5C00] transition-all duration-300 text-lg mt-1 shrink-0 group-hover:translate-x-1">
              →
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
