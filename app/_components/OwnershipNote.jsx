import { BsCheckLg } from "react-icons/bs";
import { ownershipItems } from "../_data/solutions";

/* Shown on every solution detail page and on the main pricing page.
   Makes the post-launch account handover explicit. */
export default function OwnershipNote({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-white border border-slate-100 rounded-2xl p-6">
        <p className="text-sm font-black text-slate-900">
          You own every account after launch
        </p>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
          Once development and deployment are done, every account —{" "}
          {ownershipItems.slice(0, 6).join(", ").toLowerCase()} and more — is
          created in your name and handed fully to you. We set it up; you keep
          the keys.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
      <div className="inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-[#FF5C00] shrink-0" />
        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
          Full Ownership
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-3">
        After development &amp; deployment,
        <br />
        every account is yours.
      </h2>
      <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mb-8">
        We don&apos;t hold your project hostage. Once the build is live, every
        account is registered in your name and handed over to you in full — you
        have complete control, and we simply set everything up and give you the
        keys.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {ownershipItems.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2.5 bg-slate-800/60 rounded-xl px-4 py-3"
          >
            <BsCheckLg className="text-[#FF5C00] shrink-0 mt-0.5" />
            <span className="text-sm text-slate-300 leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
