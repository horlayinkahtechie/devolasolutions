"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

const trustStats = [
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Clients" },
  { value: "98%", label: "Satisfaction" },
];

const services = [
  "Web Development",
  "Mobile App",
  "Graphic Design",
  "Business Registration",
];

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FF5C00] transition-colors duration-200";

const FinalCTA = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integration logic here (e.g., EmailJS, Formspree, or custom API)
    console.log("Lead captured:", form);
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-slate-200">
        {/* Ambient glows */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FF5C00] blur-[140px] opacity-10 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-slate-700 blur-[120px] opacity-30 pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start">
          {/* ── LEFT: Headline + Direct Contact ── */}
          <div className="lg:sticky lg:top-10">
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
              Have a specific project in mind? Reach out via WhatsApp or fill
              the form, and let&apos;s discuss the details.
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
                href="mailto:hello@youragency.com"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-50 group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-tighter">
                    Email
                  </div>
                  <div className="text-white font-bold text-lg">
                    hello@youragency.com
                  </div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-10 pt-8 border-t border-white/10">
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

          {/* ── RIGHT: Expanded Lead Form ── */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-sm shadow-inner">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Message Received
                </h3>
                <p className="text-slate-400 mb-8 max-w-xs mx-auto">
                  Thanks for the reach out! Our team will get back to you within
                  24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#FF5C00] font-bold text-sm uppercase tracking-widest hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Tell us about your project
                  </h3>
                  <p className="text-sm text-slate-500">
                    Provide these details to help us prepare for our first call.
                  </p>
                </div>

                {/* Grid for Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Grid for Phone & Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 ..."
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Service
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                      >
                        <option value="" disabled className="bg-slate-900">
                          Select Service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-slate-900">
                            {s}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-xs">
                        ▾
                      </span>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Brief Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about what you're looking for..."
                    required
                    rows={3}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF5C00] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-orange-600/20 flex items-center justify-between group mt-2"
                >
                  Send Project Request
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
