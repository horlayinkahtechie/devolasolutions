import Link from "next/link";

const About = () => {
  return (
    <section className="py-24 px-5 md:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="w-6 h-[2px] bg-[#FF5C00] rounded-full" />
            <span className="text-[#FF5C00] font-bold tracking-[0.25em] text-xs uppercase">Our Story</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mt-2 mb-8 leading-[0.92] text-slate-900">
            Digital Craftsmanship <br />
            <span className="text-slate-300 italic font-semibold text-3xl md:text-4xl lg:text-5xl">
              without the ego.
            </span>
          </h2>

          <div className="space-y-5 max-w-xl text-[15px] md:text-base text-slate-500 leading-relaxed">
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
            className="group mt-10 inline-flex items-center gap-4 font-bold uppercase tracking-widest text-xs text-[#FF5C00] hover:gap-5 transition-all duration-300"
          >
            Read More About Us
            <span className="w-11 h-11 rounded-full border-2 border-orange-200 flex items-center justify-center group-hover:bg-[#FF5C00] group-hover:border-[#FF5C00] group-hover:text-white transition-all duration-300 text-sm">
              →
            </span>
          </Link>
        </div>

        {/* Right: Stats */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 bg-[#fafafa] rounded-[2.5rem] -rotate-2 z-0" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <p className="text-[#FF5C00] font-black text-4xl mb-1.5 tracking-tighter leading-none">50+</p>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Projects Launched</h4>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <p className="text-slate-900 font-black text-2xl mb-1.5 tracking-tight">Nigeria</p>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">HQ Location</h4>
            </div>

            <div className="bg-slate-900 p-7 rounded-3xl shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                <p className="font-black text-2xl tracking-tight leading-none text-white">24/7</p>
              </div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Global Support</h4>
            </div>

            <div className="bg-orange-50 p-7 rounded-3xl border border-orange-100 hover:-translate-y-0.5 transition-all duration-300">
              <p className="text-[#FF5C00] font-black text-4xl mb-1.5 tracking-tighter leading-none">99%</p>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-orange-300">Client Success</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
