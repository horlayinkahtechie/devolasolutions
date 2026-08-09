"use client";

import { useState } from "react";
import Link from "next/link";
import { BiEnvelope, BiPhone, BiLogoWhatsapp, BiMap } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi";
import { BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs";

const services = [
  "Web Development",
  "Mobile App Development",
  "Graphic Design",
  "Business Registration",
  "Multiple services",
  "Not sure yet — need advice",
];

const budgets = [
  "₦200,000 – ₦300,000",
  "₦300,000 – ₦750,000",
  "₦750,000 – ₦2,000,000",
  "Above ₦2,000,000",
  "Let's discuss",
];

const sources = ["Instagram", "Twitter / X", "LinkedIn", "Google Search", "Referral from someone", "Other"];

const contactInfo = [
  {
    icon: <BiEnvelope size={18} />,
    label: "Email us",
    value: "devolasolutions@gmail.com",
    href: "mailto:devolasolutions@gmail.com",
  },
  {
    icon: <BiLogoWhatsapp size={18} />,
    label: "WhatsApp",
    value: "+234 816 941 5526",
    href: "https://wa.me/2348169415526",
  },
  {
    icon: <BiPhone size={18} />,
    label: "Call us",
    value: "+234 816 941 5526",
    href: "tel:+2348169415526",
  },
  {
    icon: <BiMap size={18} />,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
  },
];

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "Within 24 hours on business days. For urgent enquiries, WhatsApp is the fastest way to reach us.",
  },
  {
    q: "Do I need a detailed brief to get started?",
    a: "No. A rough idea is enough for the first message. We'll ask the right questions during our discovery call.",
  },
  {
    q: "Do you work with clients outside Lagos?",
    a: "Yes — we work 100% remotely with clients across Nigeria and internationally. All meetings are online.",
  },
  {
    q: "Is the discovery call free?",
    a: "Completely free. No commitment, no pitch pressure. We just want to understand what you're building.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", source: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.service) e.service = "Please select a service.";
    if (!form.message.trim() || form.message.trim().length < 20)
      e.message = "Please write at least 20 characters about your project.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.success) throw new Error();
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-300 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#FF5C00]/20 focus:border-[#FF5C00]";
  const inputError = "border-red-300 focus:ring-red-100 focus:border-red-400";
  const inputNormal = "border-slate-200 hover:border-slate-300";

  return (
    <div className="bg-[#fafafa]">
      {/* ── HERO ── */}
      <section className="px-5 md:px-10 pt-36 pb-14">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-12">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors duration-200">Home</Link>
            <span className="text-slate-300">›</span>
            <span className="text-slate-700 font-bold">Contact</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white border border-orange-100 shadow-sm rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF5C00]">
                Responding within 24 hours
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] mb-5">
              Let&apos;s Build
              <br />
              <span className="text-[#FF5C00]">Something Great.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed">
              Tell us what you&apos;re working on and we&apos;ll get back to you
              within 24 hours. No commitment — just a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="py-12 px-5 md:px-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Form card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-7 md:p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 gap-5">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-4xl">🚀</div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Message sent!</h2>
                  <p className="text-slate-500 leading-relaxed max-w-sm text-sm">
                    Thanks, {form.name.split(" ")[0]}. We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", service: "", budget: "", source: "", message: "" });
                  }}
                  className="mt-2 text-sm font-bold text-slate-500 hover:text-[#FF5C00] transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="mb-8">
                  <h2 className="text-2xl font-black text-slate-900 mb-1">Send us a message</h2>
                  <p className="text-sm text-slate-400">
                    Fields marked <span className="text-[#FF5C00]">*</span> are required.
                  </p>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                      Full Name <span className="text-[#FF5C00]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Adaeze Johnson"
                      className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                      Email Address <span className="text-[#FF5C00]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="adaeze@company.com"
                      className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className={`${inputBase} ${inputNormal}`}
                    />
                    <p className="text-[10px] text-slate-400 mt-1.5">Optional — for WhatsApp follow-ups only.</p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                      Service Interested In <span className="text-[#FF5C00]">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.service ? inputError : inputNormal} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="text-xs text-red-500 mt-1.5">{errors.service}</p>}
                  </div>
                </div>

                {/* Budget + Source */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                      Project Budget Range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={`${inputBase} ${inputNormal} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select a range…</option>
                      {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                    <p className="text-[10px] text-slate-400 mt-1.5">Helps us recommend the right package.</p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                      How Did You Hear About Us?
                    </label>
                    <select
                      name="source"
                      value={form.source}
                      onChange={handleChange}
                      className={`${inputBase} ${inputNormal} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select one…</option>
                      {sources.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                    Tell Us About Your Project <span className="text-[#FF5C00]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What are you building? Who is it for? Do you have existing designs or content? Any deadline in mind?"
                    className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
                  <p className="text-[10px] text-slate-400 mt-1.5">
                    The more context you share, the better we can prepare for your discovery call.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>Send Message →</>
                  )}
                </button>

                {submitError && (
                  <p className="text-center text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl py-3 px-4">
                    {submitError}
                  </p>
                )}

                <p className="text-center text-xs text-slate-400">
                  We never share your information.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            {/* Contact info */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
              <h3 className="text-sm font-black text-slate-900 mb-5">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                {contactInfo.map((c) =>
                  c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-orange-50 group-hover:text-[#FF5C00] group-hover:border-orange-100 transition-all duration-200 shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{c.label}</p>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-[#FF5C00] transition-colors duration-200">{c.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={c.label} className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{c.label}</p>
                        <p className="text-sm font-bold text-slate-900">{c.value}</p>
                      </div>
                    </div>
                  ),
                )}
              </div>

              <div className="border-t border-slate-100 mt-6 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Follow Us</p>
                <div className="flex gap-2.5">
                  {[
                    { icon: <BsInstagram size={14} />, href: "https://instagram.com/dev_olayinka", label: "Instagram" },
                    { icon: <BsTwitterX size={14} />, href: "https://x.com/dev_olayinka", label: "Twitter" },
                    { icon: <BsLinkedin size={14} />, href: "https://linkedin.com/dev_olayinka", label: "LinkedIn" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#FF5C00] hover:text-white hover:border-[#FF5C00] transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 mt-6 pt-5">
                <p className="text-xs text-slate-400 font-medium">
                  CAC Registered Business · RC 9717931
                </p>
              </div>
            </div>

            {/* What happens next */}
            <div className="bg-slate-900 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <HiSparkles className="text-[#FF5C00]" size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">What happens next</span>
              </div>
              <div className="space-y-4">
                {[
                  { step: "1", text: "We read your message and review your project brief." },
                  { step: "2", text: "We reply within 24 hours with initial thoughts." },
                  { step: "3", text: "We schedule a free 20-min discovery call." },
                  { step: "4", text: "You receive a detailed written proposal within 48 hours of the call." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FF5C00]/15 text-[#FF5C00] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <p className="text-sm text-slate-400 leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 px-5 md:px-10 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-[#FF5C00] rounded-full" />
              <span className="text-[#FF5C00] text-[11px] font-bold uppercase tracking-widest">Before You Message</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05]">Quick Answers.</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white border border-slate-100 rounded-2xl px-5 py-4 hover:shadow-sm hover:border-slate-200 transition-all duration-200">
                <h3 className="text-sm font-black text-slate-900 mb-2">{f.q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
