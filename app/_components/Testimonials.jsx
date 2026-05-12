const testimonials = [
  {
    quote:
      "Devola turned our outdated website into a conversion machine. Within 3 months of launch, our inbound leads doubled.",
    name: "Adebayo Okafor",
    role: "CEO",
    company: "PrimeTech Nigeria",
    initials: "AO",
    rating: 5,
    card: "bg-white border-slate-100",
    text: "text-slate-900",
    muted: "text-slate-500",
    deco: "text-slate-100",
    avatar: "bg-slate-100 text-slate-500",
  },
  {
    quote:
      "The mobile app they built has over 10,000 downloads in just 6 months. Exceptional work from an exceptional team.",
    name: "Chidinma Eze",
    role: "Founder",
    company: "That Local Girl",
    initials: "CE",
    rating: 5,
    card: "bg-slate-900 border-slate-800",
    text: "text-white",
    muted: "text-slate-400",
    deco: "text-slate-800",
    avatar: "bg-slate-800 text-slate-300",
  },
  {
    quote:
      "From business registration to a full web presence — they handled everything. Professional, fast, and reliable.",
    name: "Emmanuel Nwosu",
    role: "Director",
    company: "GTA Hotels",
    initials: "EN",
    rating: 5,
    card: "bg-[#FF5C00] border-orange-400/20",
    text: "text-white",
    muted: "text-orange-100",
    deco: "text-orange-400/20",
    avatar: "bg-white/20 text-white",
  },
];

const Testimonials = () => (
  <section className="py-24 px-6 md:px-12 bg-[#fafafa]">
    <div className="max-w-7xl mx-auto">

      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-12 border-b border-slate-200 gap-8">
        <div>
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
            <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            Kind Words<br />From Clients
          </h2>
        </div>

        <div className="max-w-sm">
          <p className="text-slate-500 leading-relaxed">
            Don&apos;t take our word for it — hear directly from businesses we
            have helped grow.
          </p>
        </div>
      </div>

      {/* ── Testimonial Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-3xl border ${t.card} p-8 flex flex-col justify-between min-h-72 overflow-hidden`}
          >
            {/* Decorative large quote mark */}
            <span
              className={`absolute top-4 right-6 text-[7rem] font-black leading-none select-none pointer-events-none ${t.deco}`}
            >
              &ldquo;
            </span>

            {/* Quote text */}
            <p
              className={`relative z-10 text-base leading-relaxed font-medium ${t.text} mb-10`}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Stars + person */}
            <div className="relative z-10">
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#FF5C00] text-sm leading-none">
                    ★
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {/* Avatar with initials */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${t.avatar}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className={`text-sm font-bold leading-tight ${t.text}`}>
                    {t.name}
                  </div>
                  <div className={`text-xs mt-0.5 ${t.muted}`}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Aggregate rating bar ── */}
      <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-[#FF5C00] text-xl leading-none">
              ★
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-400 font-medium">
          <span className="text-slate-900 font-bold">5.0</span> average rating
          across{" "}
          <span className="text-slate-900 font-bold">30+</span> client
          engagements
        </p>
      </div>
    </div>
  </section>
);

export default Testimonials;
