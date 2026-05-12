import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <span className="text-[#FF5C00] font-bold tracking-[0.3em] text-xs uppercase">
            Our Story
          </span>
          <h2 className="text-5xl md:text-7xl font-black font-jakarta tracking-tighter mt-4 mb-8 leading-[0.9] text-slate-900">
            Digital Craftsmanship <br />
            <span className="text-slate-300 italic font-medium">
              without the ego.
            </span>
          </h2>

          <div className="space-y-6 max-w-xl text-lg text-slate-600 font-medium leading-relaxed">
            <p>
              We are a collective of developers and designers who believe that
              great software shouldn&apos;t be a headache. We bridge the gap
              between complex engineering and intuitive user experiences.
            </p>
            <p>
              Whether you&apos;re a startup looking to launch your first MVP or
              an established brand needing a digital overhaul, we provide the
              technical engine and the legal foundation to make it happen.
            </p>
          </div>

          <Link
            href="/aboutus"
            className="group mt-10 flex items-center gap-4 font-bold uppercase tracking-widest text-sm text-[#FF5C00] transition-colors"
          >
            Read More About Us
            <span className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#FF5C00] group-hover:border-[#FF5C00] group-hover:text-white transition-all duration-300">
              →
            </span>
          </Link>
        </div>

        {/* --- Right Column: The Stat Stack --- */}
        <div className="lg:col-span-5 relative">
          {/* Subtle background element */}
          <div className="absolute -inset-4 bg-[#fafafa] rounded-[3rem] -rotate-2 z-0" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Stat Item 1: Projects */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[#FF5C00] font-black text-4xl mb-2 tracking-tighter">
                50+
              </p>
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">
                Projects Launched
              </h4>
            </div>

            {/* Stat Item 2: Location */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-900 font-black text-2xl mb-2 tracking-tight">
                Nigeria
              </p>
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">
                HQ Location
              </h4>
            </div>

            {/* Stat Item 3: Support */}
            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl sm:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                <p className="text-white font-black text-2xl tracking-tight text-white">
                  24/7
                </p>
              </div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500">
                Global Support
              </h4>
            </div>

            {/* Stat Item 4: Satisfaction (The Bonus) */}
            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 shadow-sm">
              <p className="text-[#FF5C00] font-black text-4xl mb-2 tracking-tighter">
                99%
              </p>
              <h4 className="text-xs uppercase tracking-widest font-bold text-orange-300">
                Client Success
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
