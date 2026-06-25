"use client";

import Link from "next/link";

const stats = [
  { value: "40+", label: "Happy Clients" },
  { value: "5+", label: "Years Active" },
  { value: "98%", label: "Satisfaction" },
];

const projectCards = [
  { bg: "bg-orange-100", dot: "bg-[#FF5C00]", label: "E-Commerce" },
  { bg: "bg-blue-100", dot: "bg-blue-500", label: "SaaS App" },
  { bg: "bg-slate-100", dot: "bg-slate-500", label: "Mobile App" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] text-slate-900 px-5 md:px-10 min-h-screen flex items-center">
      {/* Ambient blobs */}
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] bg-orange-100 rounded-full blur-[160px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-50 rounded-full blur-[130px] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[56%_44%] items-center py-28 md:py-36 lg:gap-10">
        {/* ── LEFT ── */}
        <div className="animate-fade-up">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2.5 bg-white border border-orange-100 shadow-sm shadow-orange-100 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C00]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF5C00]">
              Digital Agency · Actively Building
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[2.8rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black leading-[1.06] tracking-tight mb-6 text-slate-900">
            We Build{" "}
            <span className="text-[#FF5C00]">Websites</span>
            {" "}&{" "}
            <span className="text-[#FF5C00]">Mobile Apps</span>
            <br />
            <span className="text-slate-400 text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
              That Grow Businesses.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-[460px]">
            Helping businesses establish a dominant online presence through
            expert development, strategic design, and seamless business
            registration.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <Link
              href="/contact"
              className="group bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-orange-500/20 flex items-center justify-center gap-2"
            >
              Get Started
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <Link
              href="/portfolio"
              className="text-slate-800 px-8 py-4 rounded-full font-bold text-sm border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-6 border-t border-slate-200">
            {stats.map(({ value, label }, i) => (
              <div key={label} className={`flex items-center gap-4 ${i < stats.length - 1 ? "pr-8 border-r border-slate-200" : ""}`}>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 leading-none">{value}</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="relative hidden lg:block animate-fade-right">
          {/* Background plate */}
          <div className="absolute -inset-5 bg-gradient-to-br from-orange-50/60 to-blue-50/40 rounded-[2.5rem] rotate-1 border border-slate-100" />

          {/* Browser card */}
          <div className="relative bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-900/8 p-5 hover:scale-[1.015] transition-transform duration-500">
            {/* Chrome bar */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="flex-1 bg-slate-100 rounded-lg px-3 py-1.5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-slate-400 font-mono tracking-tight">devola.solutions</span>
              </div>
            </div>

            {/* Project tiles */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {projectCards.map(({ bg, dot, label }) => (
                <div
                  key={label}
                  className={`aspect-video rounded-xl overflow-hidden ${bg} relative flex items-end p-2`}
                >
                  <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${dot}`} />
                  <span className="text-[10px] font-bold text-slate-700 bg-white/80 backdrop-blur-sm rounded-md px-1.5 py-0.5 leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Code snippet */}
            <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs mb-4 space-y-1.5">
              <div>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-slate-200">project</span>{" "}
                <span className="text-slate-500">=</span>{" "}
                <span className="text-[#FF5C00]">&#123;</span>
              </div>
              <div className="pl-4 text-slate-400">
                name:{" "}
                <span className="text-green-400">&apos;Growth Engine&apos;</span>,
              </div>
              <div className="pl-4 flex items-center gap-2 text-slate-400">
                status:{" "}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF5C00]" />
                </span>
                <span className="text-slate-200">&apos;Live&apos;</span>
              </div>
              <div className="text-[#FF5C00]">&#125;</div>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>Project completion</span>
                <span className="text-[#FF5C00] font-bold">94%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[94%] bg-gradient-to-r from-[#FF5C00] to-orange-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Floating: Revenue card */}
          <div className="absolute -left-14 top-1/3 bg-white border border-slate-100 rounded-2xl p-4 shadow-xl shadow-slate-900/10 flex items-center gap-3 animate-float">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-lg shrink-0">📈</div>
            <div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Revenue Impact</div>
              <div className="text-sm font-bold text-slate-900">+240% Growth</div>
            </div>
          </div>

          {/* Floating: Speed card */}
          <div className="absolute -right-10 bottom-10 bg-white border border-slate-100 rounded-2xl p-4 shadow-xl shadow-slate-900/10 flex items-center gap-3 animate-float-delayed">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-lg shrink-0">⚡</div>
            <div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Page Speed</div>
              <div className="text-sm font-bold text-slate-900">99 / 100</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
