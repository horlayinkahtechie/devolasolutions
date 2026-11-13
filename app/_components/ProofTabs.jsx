"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { MobilePhoneFrame } from "./ProjectImage";

/* A Web/Mobile tab switcher for proof-of-work cards. Pure presentation —
   all data (hrefs, labels, images) is resolved server-side by the page
   that renders this, since that's where project data + case-study lookups
   already happen. */
export default function ProofTabs({ webProof, mobileProof }) {
  const [tab, setTab] = useState("web");
  const items = tab === "web" ? webProof : mobileProof;

  return (
    <div>
      <div className="flex gap-2 mb-10">
        {[
          { key: "web", label: "Web" },
          { key: "mobile", label: "Mobile" },
        ].map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
              tab === t.key
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-slate-400">More proof coming soon.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              target={p.external ? "_blank" : undefined}
              rel={p.external ? "noopener noreferrer" : undefined}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                {tab === "mobile" ? (
                  <MobilePhoneFrame image={p.image} alt={p.name} category={p.name} />
                ) : (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-6">
                <p className="text-base font-black text-slate-900 group-hover:text-[#FF5C00] transition-colors mb-2">
                  {p.name}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-[#FF5C00] transition-colors">
                  {p.ctaLabel}
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
