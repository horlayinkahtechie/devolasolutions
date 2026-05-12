"use client";

const stats = [
  { value: "40+", label: "Happy Clients" },
  { value: "5+", label: "Years Active" },
  { value: "98%", label: "Satisfaction Rate" },
];

const projectCards = [
  { bg: "bg-orange-100", dot: "bg-[#FF5C00]", label: "E-Commerce" },
  { bg: "bg-blue-100", dot: "bg-blue-500", label: "SaaS App" },
  { bg: "bg-slate-100", dot: "bg-slate-500", label: "Mobile App" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] text-slate-900 px-6 md:px-12 min-h-screen flex items-center">
      {/* Ambient glow blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[55%_45%] items-center py-28 md:py-36 lg:gap-8">
        {/* ── LEFT COLUMN ── */}
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-orange-50 border border-orange-200/60 rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C00]" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5C00]">
              Digital Agency · Actively Building
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-7 text-slate-900">
            We Build{" "}
            <span className="relative inline-block text-[#FF5C00]">
              Websites
            </span>{" "}
            &{" "}
            <span className="relative inline-block text-[#FF5C00]">
              Mobile Apps
            </span>
            <br />
            <span className="text-slate-600 text-3xl md:text-4xl font-bold">
              That Grow Businesses.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-md">
            Helping businesses establish a dominant online presence through
            expert development, strategic design, and seamless business
            registration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <button className="group cursor-pointer bg-slate-900 text-white px-9 py-4 rounded-full font-bold hover:bg-[#FF5C00] transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-orange-500/20 flex items-center justify-center gap-2">
              Get Started
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
            <button className="cursor-pointer text-slate-900 px-9 py-4 rounded-full font-bold border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2">
              View Portfolio
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 pt-4 border-t border-slate-200">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-extrabold text-slate-900">
                  {value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="relative hidden lg:block animate-fade-right">
          {/* Glassmorphic backing plate */}
          <div className="absolute -inset-4 bg-white/40 backdrop-blur-sm rounded-3xl rotate-1 border border-slate-100" />

          {/* Browser mockup card */}
          <div className="relative bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-900/5 p-5 hover:scale-[1.01] transition-transform duration-500 cursor-default">
            {/* Window controls + URL bar */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1 bg-slate-100 rounded-lg px-3 py-1.5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-slate-400 font-mono">
                  devola.solutions
                </span>
              </div>
            </div>

            {/* Project preview tiles */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {projectCards.map(({ bg, dot, label }) => (
                <div
                  key={label}
                  className={`aspect-video rounded-xl overflow-hidden ${bg} relative flex items-end p-2 group`}
                >
                  <div
                    className={`absolute top-2 right-2 w-2 h-2 rounded-full ${dot}`}
                  />
                  <span className="text-[10px] font-bold text-slate-600 bg-white/70 rounded-md px-1.5 py-0.5">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Code snippet */}
            <div className="bg-slate-50 rounded-2xl p-4 font-mono text-xs text-slate-400 mb-4 space-y-2">
              <div>
                <span className="text-blue-500">const</span>{" "}
                <span className="text-slate-700">project</span> ={" "}
                <span className="text-[#FF5C00]">&#123;</span>
              </div>
              <div className="pl-4">
                name:{" "}
                <span className="text-green-600">
                  &apos;Growth Engine&apos;
                </span>
                ,
              </div>
              <div className="pl-4 flex items-center gap-2">
                status:
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FF5C00]" />
                </span>
                <span className="text-slate-700">&apos;Live&apos;</span>
              </div>
              <div>
                <span className="text-[#FF5C00]">&#125;</span>
              </div>
            </div>
          </div>

          {/* Floating: Revenue card */}
          <div className="absolute -left-12 top-1/3 bg-white border border-slate-100 rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-float">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-lg">
              📈
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                Revenue Impact
              </div>
              <div className="text-sm font-bold text-slate-900">
                +240% Growth
              </div>
            </div>
          </div>

          {/* Floating: Speed card */}
          <div className="absolute -right-8 bottom-10 bg-white border border-slate-100 rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-float-delayed">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-lg">
              ⚡
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                Page Speed
              </div>
              <div className="text-sm font-bold text-slate-900">99 / 100</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
