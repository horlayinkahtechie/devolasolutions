"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-[#fafafa] text-slate-900 px-5 md:px-10 min-h-[92vh] flex items-center justify-center lg:mt-20 mt-15">
      <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center text-center py-28 md:py-10 animate-fade-up">
        {/* Headline */}
        <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black leading-[1.08] tracking-tight mb-6 text-slate-900 max-w-3xl">
          We Build <span className="text-[#FF5C00]">Websites</span> &{" "}
          <span className="text-[#FF5C00]">Mobile Apps</span>
          <br />
          <span className="text-slate-400 text-2xl md:text-3xl lg:text-4xl font-bold leading-snug block mt-2">
            That Grow Businesses.
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-11 max-w-[540px]">
          Helping businesses establish a dominant online presence through
          expert development, strategic design, and seamless business
          registration.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-16">
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
      </div>
    </section>
  );
};

export default Hero;
