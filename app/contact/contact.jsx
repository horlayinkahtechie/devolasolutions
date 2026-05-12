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
  "Under ₦100,000",
  "₦100,000 – ₦300,000",
  "₦300,000 – ₦750,000",
  "₦750,000 – ₦2,000,000",
  "Above ₦2,000,000",
  "Let's discuss",
];

const sources = [
  "Instagram",
  "Twitter / X",
  "LinkedIn",
  "Google Search",
  "Referral from someone",
  "Other",
];

const contactInfo = [
  {
    icon: <BiEnvelope />,
    label: "Email us",
    value: "hello@devolasolutions.com",
    href: "mailto:hello@devolasolutions.com",
  },
  {
    icon: <BiLogoWhatsapp />,
    label: "WhatsApp",
    value: "+234 800 000 0000",
    href: "https://wa.me/2348000000000",
  },
  {
    icon: <BiPhone />,
    label: "Call us",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
  },
  {
    icon: <BiMap />,
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
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    source: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

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
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // TODO: wire up to email service / API route
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase =
    "w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#FF5C00]/20 focus:border-[#FF5C00]";
  const inputError = "border-red-400";
  const inputNormal = "border-slate-200 hover:border-slate-300";

  return (
    <div className="bg-[#fafafa]">
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-16">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mb-10">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Contact</span>
          </div>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C00]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5C00]">
                Responding within 24 hours
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.0] mb-5">
              Let&apos;s Build
              <br />
              <span className="text-[#FF5C00]">Something Great.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Tell us what you&apos;re working on and we&apos;ll get back to you
              within 24 hours. No commitment — just a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          MAIN GRID: FORM + SIDEBAR
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* ── FORM ── */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-4xl">
                  🚀
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">
                    Message sent!
                  </h2>
                  <p className="text-slate-500 leading-relaxed max-w-sm">
                    Thanks, {form.name.split(" ")[0]}. We&apos;ve received your
                    message and will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      service: "",
                      budget: "",
                      source: "",
                      message: "",
                    });
                  }}
                  className="mt-2 text-sm font-bold text-slate-500 hover:text-[#FF5C00] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="mb-8">
                  <h2 className="text-2xl font-black text-slate-900 mb-1">
                    Send us a message
                  </h2>
                  <p className="text-sm text-slate-500">
                    Fields marked <span className="text-[#FF5C00]">*</span> are
                    required.
                  </p>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
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
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1.5">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
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
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
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
                    <p className="text-[10px] text-slate-400 mt-1.5">
                      Optional — we use this for WhatsApp follow-ups only.
                    </p>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                      Service Interested In{" "}
                      <span className="text-[#FF5C00]">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.service ? inputError : inputNormal} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-xs text-red-500 mt-1.5">
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                {/* Budget + Source */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                      Project Budget Range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={`${inputBase} ${inputNormal} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select a range…
                      </option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    <p className="text-[10px] text-slate-400 mt-1.5">
                      Helps us recommend the right package for you.
                    </p>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                      How Did You Hear About Us?
                    </label>
                    <select
                      name="source"
                      value={form.source}
                      onChange={handleChange}
                      className={`${inputBase} ${inputNormal} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select one…
                      </option>
                      {sources.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                    Tell Us About Your Project{" "}
                    <span className="text-[#FF5C00]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What are you building? Who is it for? Do you have existing designs or content? Any deadline or launch date in mind?"
                    className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1.5">
                      {errors.message}
                    </p>
                  )}
                  <p className="text-[10px] text-slate-400 mt-1.5">
                    The more context you share, the better we can prepare for
                    your discovery call.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <span>→</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  By submitting you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="underline hover:text-slate-600"
                  >
                    privacy policy
                  </Link>
                  . We never share your information.
                </p>
              </form>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="flex flex-col gap-6">
            {/* Contact info card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm">
              <h3 className="text-base font-black text-slate-900 mb-5">
                Other Ways to Reach Us
              </h3>
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
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-base text-slate-500 group-hover:bg-orange-50 group-hover:text-[#FF5C00] group-hover:border-orange-100 transition-all duration-200 shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          {c.label}
                        </p>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-[#FF5C00] transition-colors">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div key={c.label} className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-base text-slate-500 shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          {c.label}
                        </p>
                        <p className="text-sm font-bold text-slate-900">
                          {c.value}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>

              <div className="border-t border-slate-100 mt-6 pt-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: <BsInstagram />, href: "#", label: "Instagram" },
                    { icon: <BsTwitterX />, href: "#", label: "Twitter" },
                    { icon: <BsLinkedin />, href: "#", label: "LinkedIn" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-sm text-slate-500 hover:bg-[#FF5C00] hover:text-white hover:border-[#FF5C00] transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Response time card */}
            <div className="bg-slate-900 rounded-3xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <HiSparkles className="text-[#FF5C00]" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                  What happens next
                </span>
              </div>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    text: "We read your message and review your project brief.",
                  },
                  {
                    step: "2",
                    text: "We reply within 24 hours with initial thoughts.",
                  },
                  {
                    step: "3",
                    text: "We schedule a free 20-min discovery call.",
                  },
                  {
                    step: "4",
                    text: "You receive a detailed written proposal within 48 hours of the call.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FF5C00]/20 text-[#FF5C00] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <p className="text-sm text-slate-400 leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FAQs
      ══════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
              <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
                Before You Message
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Quick Answers.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="bg-white border border-slate-100 rounded-2xl px-6 py-5"
              >
                <h3 className="text-sm font-black text-slate-900 mb-2">
                  {f.q}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
