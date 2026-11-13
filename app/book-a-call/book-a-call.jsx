import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import FinalCTA from "../_components/FinalCTA";
import BookACallWidget from "../_components/BookACallWidget";

const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

const faqs = [
  {
    q: "Is this really free?",
    a: "Yes — no card, no catch. We just want to understand what you're building before any commitment on either side.",
  },
  {
    q: "What happens after I book?",
    a: "You'll get an email straight away confirming your time and a Google Meet link to join the call — plus reminders 3 days, 1 day, and a few hours before.",
  },
  {
    q: "What if I need to reschedule or cancel?",
    a: "Email us before the call and we'll sort it out. We don't yet have a self-service option — it's a straight email away for now.",
  },
];

export default function BookACall() {
  return (
    <div className="bg-[#fafafa]">
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-20">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-10">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Book a Call</span>
          </div>

          <div className="max-w-2xl">
            <Label text="Talk It Through First" />
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6">
              Pick a Time That
              <br />
              <span className="text-[#FF5C00]">Works for You.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              A focused 30-minute video call with the person who&apos;ll
              actually build your project — completely free, instantly
              booked, no back-and-forth over email.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          BOOKING WIDGET
      ══════════════════════════════ */}
      <section className="py-4 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <BookACallWidget />
        </div>
      </section>

      {/* ══════════════════════════════
          FAQ
      ══════════════════════════════ */}
      <section className="py-20 px-6 md:px-12 border-t border-slate-100 mt-10">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <Label text="Before You Book" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Quick Answers.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white border border-slate-100 rounded-2xl px-7 py-6">
                <h3 className="text-sm font-black text-slate-900 mb-2 flex items-start gap-2.5">
                  <BsCheckLg className="text-[#FF5C00] shrink-0 mt-0.5" />
                  {f.q}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA hideBookCall />
    </div>
  );
}
