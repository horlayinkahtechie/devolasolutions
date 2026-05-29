import { FaWhatsapp, FaEnvelope, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const trustStats = [
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Clients" },
  { value: "98%", label: "Satisfaction" },
];

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto bg-slate-900 rounded-2xl md:rounded-[3rem] p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-slate-200">
        {/* Ambient glows */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FF5C00] blur-[140px] opacity-10 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-slate-700 blur-[120px] opacity-30 pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* ── LEFT: Headline + Direct Contact ── */}
          <div>
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF5C00]" />
              </span>
              <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
                Available for New Projects
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Ready to <span className="text-[#FF5C00]">Scale</span>
              <br />
              Your Business?
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
              Have a project in mind? Reach out via WhatsApp or send us a
              message and let&apos;s discuss the details.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-4 mb-12">
              <a
                href="https://wa.me/2348169415526"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-tighter">
                    WhatsApp
                  </div>
                  <div className="text-white font-bold text-lg">
                    0816 941 5526
                  </div>
                </div>
              </a>

              <a
                href="mailto:devolasolutions@gmail.com"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-tighter">
                    Email
                  </div>
                  <div className="text-white font-bold text-base md:text-lg break-all">
                    devolasolutions@gmail.com
                  </div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-6 md:gap-10 pt-8 border-t border-white/10">
              {trustStats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-extrabold text-white">
                    {value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Contact Us CTA ── */}
          <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[2.5rem] p-8 sm:p-10 md:p-12 flex flex-col items-center justify-center text-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#FF5C00]/10 flex items-center justify-center">
              <FaEnvelope size={24} className="text-[#FF5C00]" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Let&apos;s Talk
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">
                Tell us what you&apos;re building. We&apos;ll get back to you
                within 24 hours with a plan.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full bg-[#FF5C00] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-orange-600/20 flex items-center justify-center gap-3 group"
            >
              Contact Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
