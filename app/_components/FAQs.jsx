"use client";

import { useState } from "react";

const faqData = {
  "Web Development": [
    {
      q: "How long does a website take to build?",
      a: "Most business websites take 2–4 weeks from kickoff to launch, depending on the number of pages, custom features, and third-party integrations. We'll give you a precise timeline after our initial discovery call.",
    },
    {
      q: "What technologies do you use?",
      a: "We build primarily with Next.js, React, Tailwind CSS, and Firebase. This stack gives you fast load times, great SEO out of the box, and a codebase that scales as your business grows.",
    },
    {
      q: "Will my website be SEO-optimized?",
      a: "Yes. Every site we build includes technical SEO fundamentals, semantic HTML, optimised metadata, structured data, fast Core Web Vitals scores, and proper sitemap/robots configuration.",
    },
    {
      q: "How do we handle payments?",
      a: "We typically work on a 60/40 basis: A 60% deposit to secure your slot in our production calendar and 40% upon project completion. For larger mobile projects, we can break this into monthly milestones.",
    },
    {
      q: "Do you offer hosting and ongoing maintenance?",
      a: "We set up and configure hosting on high-performance platforms like Vercel, AWS, or Netlify. Ongoing maintenance packages are available to cover updates, security patches, and performance monitoring.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Absolutely. We specialise in modernising legacy sites — improving speed, design, and conversion rates — while preserving your brand identity and migrating your existing content.",
    },
  ],

  "Mobile App": [
    {
      q: "Do you build for both iOS and Android?",
      a: "Yes. We use React Native, which produces a single codebase that runs natively on both iOS and Android, significantly reducing cost and time to market compared to building two separate apps.",
    },
    {
      q: "How long does a mobile app take to build?",
      a: "A standard app with core features typically takes 8–16 weeks from design sign-off to App Store submission. More complex apps with custom backends or real-time features may take longer.",
    },
    {
      q: "Do you handle App Store and Google Play submission?",
      a: "Yes, we manage the full submission process for both platforms, including setting up developer accounts, writing store listings, and ensuring your app meets all review guidelines.",
    },
    {
      q: "How do we handle payments?",
      a: "We typically work on a 60/40 basis: A 60% deposit to secure your slot in our production calendar and 40% upon project completion. For larger mobile projects, we can break this into monthly milestones.",
    },
    {
      q: "What if I already have wireframes or a Figma design?",
      a: "Great, we can work directly from your existing files and move straight into development. If the designs need refinement before build, our design team can take care of that first.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes. We offer maintenance packages covering OS compatibility updates, bug fixes, performance monitoring, and incremental feature releases after your initial launch. This may attract additional fee if it is beyond just little updates",
    },
  ],

  "Graphic Design": [
    {
      q: "What design services do you offer?",
      a: "We cover brand identity (logo, colour palette, typography), UI/UX design, social media graphics, pitch decks, flyers, and print-ready materials.",
    },

    {
      q: "Will I own the final design files?",
      a: "Yes, you receive full ownership of all deliverables in multiple formats (PDF, PNG, SVG) plus the editable source files (Figma or Adobe Illustrator/Photoshop).",
    },

    {
      q: "How many revision rounds are included?",
      a: "Our standard packages include three rounds of revisions. Additional rounds are available at an agreed rate if you need more iterations before final approval.",
    },
    {
      q: "How long does a brand identity project take?",
      a: "A complete brand identity, logo, colour system, typography, and basic brand guide — typically takes 2–4 weeks from approved brief to final delivery.",
    },
    {
      q: "What do you need from me to get started?",
      a: "A brief covering your brand story, target audience, competitor references, and any style preferences. The more context you give us, the more accurately we can capture your vision on the first pass.",
    },
  ],

  "Business Registration": [
    {
      q: "What types of businesses can you register?",
      a: "We handle CAC registration for sole proprietorships, limited liability companies (LLCs), and NGOs across Nigeria. We can advise on the best structure for your goals.",
    },
    {
      q: "How long does registration take?",
      a: "CAC registration typically takes 3–7 business days after all required documents have been submitted and verified. Delays are rare but can occur during peak periods at the CAC.",
    },
    {
      q: "What documents do I need to provide?",
      a: "You'll need a valid ID (NIN, international passport, or driver's licence), your preferred business name options (we check availability), a registered business address, and details of all directors or shareholders.",
    },
    {
      q: "Do you help with post-registration compliance?",
      a: "Yes. After incorporation we can assist with Tax Identification Number (TIN) registration, SCUML enrolment, opening a corporate bank account, and other regulatory requirements.",
    },
    {
      q: "How much does business registration cost?",
      a: "Our service fees vary by business type and share capital. Government filing fees are charged separately at cost with no markup. Reach out for a tailored quote, the process is simpler than most people expect.",
    },
    {
      q: "Can a foreigner register a business in Nigeria?",
      a: "Yes, though the requirements differ slightly (such as higher share capital requirements for certain industries). We can guide you through the process of foreign participation and business permits.",
    },
    {
      q: "What happens if my preferred business name is already taken?",
      a: "We perform a preliminary search before filing. If your first choice is taken, we'll help you brainstorm variations or similar names that are legally available and still reflect your brand.",
    },
  ],
};

const tabs = Object.keys(faqData);

const FAQs = ({ defaultTab }) => {
  const [activeTab, setActiveTab] = useState(
    defaultTab && tabs.includes(defaultTab) ? defaultTab : tabs[0],
  );
  const [openIndex, setOpenIndex] = useState(null);

  const switchTab = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto">
        {/* ── Section Header ── */}
        <div className="mb-14 pb-12 border-b border-slate-200">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
            <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
              FAQs
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Common
              <br />
              Questions
            </h2>
            <p className="text-slate-500 leading-relaxed max-w-xs">
              Select a service below to see answers to the questions we get
              asked most.
            </p>
          </div>
        </div>

        {/* ── Category Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => switchTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── FAQ Accordion ── */}
        <div className="space-y-3">
          {faqData[activeTab].map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "border-slate-200 shadow-lg"
                  : "border-slate-100 shadow-sm"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left"
              >
                <span className="text-base font-bold text-slate-900 leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-lg font-light shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-[#FF5C00] border-[#FF5C00] text-white rotate-45"
                      : "border-slate-200 text-[#FF5C00]"
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="px-7 pb-7">
                  <div className="h-px bg-slate-100 mb-5" />
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <p className="mt-10 text-center text-sm text-slate-400">
          Still have questions?{" "}
          <button className="text-slate-900 font-bold hover:text-[#FF5C00] transition-colors duration-200">
            Send us a message →
          </button>
        </p>
      </div>
    </section>
  );
};

export default FAQs;
