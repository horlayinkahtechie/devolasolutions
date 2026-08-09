import { FaWhatsapp, FaEnvelope, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const trustStats = [
  { value: "Fixed Pricing", label: "No Hidden Fees" },
  { value: "Fast Turnaround", label: "Weeks, Not Months" },
  { value: "Ongoing Support", label: "Even After Launch" },
];

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-10 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto bg-slate-900 rounded-3xl md:rounded-[2.5rem] p-7 sm:p-10 md:p-14 relative overflow-hidden shadow-2xl shadow-slate-900/20">
        {/* Ambient glows */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FF5C00] blur-[120px] opacity-[0.12] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-700 blur-[100px] opacity-25 pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
              <span className="text-[#FF5C00] text-[11px] font-bold uppercase tracking-widest">
                Available for New Projects
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight mb-5">
              Ready to{" "}
              <span className="text-[#FF5C00]">Scale</span>
              <br />
              Your Business?
            </h2>

            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-md">
              Have a project in mind? Reach out via WhatsApp or send us a
              message and let&apos;s discuss the details.
            </p>

            {/* Contact links */}
            <div className="space-y-4 mb-10">
              <a
                href="https://wa.me/2348169415526"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">WhatsApp</div>
                  <div className="text-white font-bold text-base group-hover:text-green-400 transition-colors duration-200">
                    0816 941 5526
                  </div>
                </div>
              </a>

              <a
                href="mailto:devolasolutions@gmail.com"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email</div>
                  <div className="text-white font-bold text-sm md:text-base break-all group-hover:text-blue-400 transition-colors duration-200">
                    devolasolutions@gmail.com
                  </div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/8">
              {trustStats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-sm font-extrabold text-white">{value}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-7 sm:p-9 md:p-10 flex flex-col items-center justify-center text-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#FF5C00]/15 flex items-center justify-center">
              <FaEnvelope size={22} className="text-[#FF5C00]" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Let&apos;s Talk</h3>
              <p className="text-slate-400 leading-relaxed max-w-xs mx-auto text-sm">
                Tell us what you&apos;re building. We&apos;ll get back to you
                within 24 hours with a plan.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full bg-[#FF5C00] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-orange-600/20 flex items-center justify-center gap-3 group"
            >
              Contact Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <p className="text-[11px] text-slate-600">
              No commitment · Free consultation · 24h response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
