const testimonials = [
  {
    quote: "I love the fact that you are very professional. You communicated effectively and help us achieve all we can't achieve on WordPress.",
    name: "No Lans",
    role: "Project Manager, Dwelcore",
    initials: "NL",
    card: "bg-white border border-slate-100",
    text: "text-slate-800",
    muted: "text-slate-500",
    deco: "text-slate-100",
    avatar: "bg-slate-100 text-slate-500",
  },
  {
    quote: "The website loads faster compared to our previous website. The image doesn't even take time to load. You also took your time to look into what we want and delivered exactly what we needed.",
    name: "Mr Femi",
    role: "IT Engineer, GTA Hotels Group",
    initials: "FE",
    card: "bg-slate-900 border border-slate-800",
    text: "text-white",
    muted: "text-slate-400",
    deco: "text-slate-800",
    avatar: "bg-slate-800 text-slate-300",
  },
  {
    quote: "I love the simplicity of the website design, and how fast you implemented the changes I requested. You also delivered the project on time.",
    name: "Mr Sodiq",
    role: "CEO, Ayora Tribe Limited",
    initials: "SO",
    card: "bg-[#FF5C00] border border-orange-400/20",
    text: "text-white",
    muted: "text-orange-100",
    deco: "text-orange-400/20",
    avatar: "bg-white/20 text-white",
  },
  {
    quote: "I love the UI of my E-commerce website, the payment integration and the admin management system. And the fact I can add products myself.",
    name: "Adebayo Lola",
    role: "CEO, LolasElan",
    initials: "AL",
    card: "bg-white border border-slate-100",
    text: "text-slate-800",
    muted: "text-slate-500",
    deco: "text-slate-100",
    avatar: "bg-slate-100 text-slate-500",
  },
  {
    quote: "I was referred to you by Mr. Vincent and honestly, you did not disappoint. The logo design was amazing and the website is very responsive. I love the fact that you are very professional and you delivered on time.",
    name: "Yordson Apartments",
    role: "CEO, Yordson Apartments",
    initials: "SO",
    card: "bg-slate-900 border border-slate-800",
    text: "text-white",
    muted: "text-slate-400",
    deco: "text-slate-800",
    avatar: "bg-slate-800 text-slate-300",
  },
  {
    quote: "I love how fast you deliver the project and how everything works. I also love your fast response time.",
    name: "AMZ",
    role: "CEO, Amazon World",
    initials: "AZ",
    card: "bg-[#FF5C00] border border-orange-400/20",
    text: "text-white",
    muted: "text-orange-100",
    deco: "text-orange-400/20",
    avatar: "bg-white/20 text-white",
  },
];

const Testimonials = () => (
  <section className="py-24 px-5 md:px-10 bg-[#fafafa]">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-12 border-b border-slate-200 gap-8">
        <div>
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-6 h-0.5 bg-[#FF5C00] rounded-full" />
            <span className="text-[#FF5C00] text-[11px] font-bold uppercase tracking-widest">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            Kind Words<br />From Clients
          </h2>
        </div>
        <p className="text-slate-500 leading-relaxed max-w-sm text-sm md:text-base">
          Don&apos;t take our word for it — hear directly from businesses we
          have helped grow.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-3xl border ${t.card} p-7 flex flex-col justify-between min-h-72 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-400`}
          >
            {/* Decorative quote */}
            <span className={`absolute top-3 right-5 text-[6rem] font-black leading-none select-none pointer-events-none ${t.deco}`}>
              &ldquo;
            </span>

            {/* Quote */}
            <p className={`relative z-10 text-[15px] leading-relaxed font-medium ${t.text} mb-8`}>
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Stars + person */}
            <div className="relative z-10">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#FF5C00] text-sm leading-none">★</span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${t.avatar}`}>
                  {t.initials}
                </div>
                <div>
                  <div className={`text-sm font-bold leading-tight ${t.text}`}>{t.name}</div>
                  <div className={`text-xs mt-0.5 ${t.muted}`}>{t.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Aggregate note */}
      <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-center">
        <p className="text-sm text-slate-400 font-medium">
          Every quote above is from a real client we&apos;ve worked with.
        </p>
      </div>
    </div>
  </section>
);

export default Testimonials;
