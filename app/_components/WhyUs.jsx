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
  <section className="py-32 bg-white px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
      {/* Sticky Header for Desktop */}
      <div className="md:col-span-5 md:sticky md:top-32">
        <span className="text-[#FF5C00] font-bold tracking-[0.3em] text-xs uppercase">
          Values
        </span>
        <h2 className="text-5xl md:text-7xl font-black font-jakarta tracking-tighter mt-4 leading-[0.9] text-slate-900">
          Why Brands <br />
          Partner With Us
        </h2>
        <div className="mt-8 h-1 w-20 bg-slate-900 rounded-full" />
      </div>

      {/* Grid of Reasons */}
      <div className="md:col-span-7 grid gap-12">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="group flex gap-8 items-start border-b border-slate-100 pb-8 hover:border-[#FF5C00] transition-colors duration-500"
          >
            <span className="text-4xl font-black text-slate-400 group-hover:text-[#FF5C00] transition-colors">
              0{i + 1}
            </span>
            <div>
              <h4 className="font-bold text-2xl mb-3 tracking-tight text-slate-900">
                {r.title}
              </h4>
              <p className="text-slate-500 leading-relaxed max-w-lg font-medium">
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
