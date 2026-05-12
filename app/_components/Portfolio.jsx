"use client";

import { useState } from "react";
import Link from "next/link";

const allProjects = [
  {
    id: 1,
    name: "GTA Hotels",
    category: "Web Development",
    tools: "Next.js · Firebase",
    type: "web",
    image: null, // replace with actual screenshot path e.g. "/screenshots/gta-hotels.png"
    screenBg: "bg-blue-100",
    tag: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    name: "That Local Girl",
    category: "Mobile App",
    tools: "React Native · Expo",
    type: "mobile",
    image: null,
    screenBg: "bg-orange-100",
    tag: "bg-orange-50 text-[#FF5C00]",
  },
  {
    id: 3,
    name: "EcoTrack",
    category: "Web Development",
    tools: "Next.js · Tailwind",
    type: "web",
    image: null,
    screenBg: "bg-emerald-100",
    tag: "bg-emerald-50 text-emerald-600",
  },
  {
    id: 4,
    name: "Devola Branding",
    category: "Graphic Design",
    tools: "Figma · Adobe",
    type: "design",
    image: null,
    screenBg: "bg-violet-100",
    tag: "bg-violet-50 text-violet-600",
  },
];

const filters = [
  { label: "All", value: "All" },
  { label: "Web Development", value: "Web Development" },
  { label: "Mobile App", value: "Mobile App" },
  { label: "Graphic Design", value: "Graphic Design" },
  { label: "Business Registration", value: "Business Registration" },
];

/* ── Browser Mockup ── */
const BrowserMockup = ({ image, screenBg }) => (
  <div className="w-full h-full flex flex-col overflow-hidden">
    {/* Chrome bar */}
    <div className="flex items-center gap-2 px-3 py-2 bg-slate-200 shrink-0">
      <div className="flex gap-1 shrink-0">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 bg-white rounded-md h-4 flex items-center px-2">
        <div className="w-1/3 h-1.5 bg-slate-300 rounded-full" />
      </div>
    </div>
    {/* Screen */}
    <div className={`flex-1 ${screenBg} relative overflow-hidden`}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <div className="p-4 space-y-2.5">
          <div className="h-3 bg-white/70 rounded-full w-1/2" />
          <div className="h-2 bg-white/50 rounded-full w-full" />
          <div className="h-2 bg-white/50 rounded-full w-4/5" />
          <div className="h-2 bg-white/50 rounded-full w-3/5" />
          <div className="mt-3 h-16 bg-white/40 rounded-xl" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 bg-white/40 rounded-lg" />
            <div className="h-10 bg-white/40 rounded-lg" />
          </div>
        </div>
      )}
    </div>
  </div>
);

/* ── iPhone Mockup ── */
const IPhoneMockup = ({ image, screenBg }) => (
  <div className="relative mx-auto" style={{ width: 96 }}>
    {/* Outer shell */}
    <div className="bg-slate-900 rounded-[2.2rem] p-1.25 shadow-2xl relative">
      {/* Screen */}
      <div
        className={`rounded-[1.8rem] overflow-hidden relative ${screenBg}`}
        style={{ aspectRatio: "9 / 19" }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-slate-900 rounded-full z-10" />

        {/* Screen content */}
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="pt-7 px-2 space-y-1.5">
            <div className="h-2 bg-white/60 rounded-full w-3/4 mx-auto" />
            <div className="h-1.5 bg-white/40 rounded-full w-full" />
            <div className="h-1.5 bg-white/40 rounded-full w-5/6" />
            <div className="mt-2 h-12 bg-white/35 rounded-lg" />
            <div className="h-8 bg-white/35 rounded-lg" />
            <div className="h-8 bg-white/35 rounded-lg" />
          </div>
        )}

        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-900/30 rounded-full" />
      </div>
    </div>

    {/* Side buttons */}
    <div className="absolute -left-0.5 top-14 w-0.5 h-5 bg-slate-700 rounded-l-sm" />
    <div className="absolute -left-0.5 top-22 w-0.5 h-5 bg-slate-700 rounded-l-sm" />
    <div className="absolute -right-0.5 top-20 w-0.5 h-7 bg-slate-700 rounded-r-sm" />
  </div>
);

/* ── Design / Document Mockup ── */
const DesignMockup = ({ image, screenBg }) => (
  <div className={`w-full h-full flex items-center justify-center ${screenBg}`}>
    {image ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={image} alt="" className="w-full h-full object-cover" />
    ) : (
      <div className="relative">
        <div className="w-28 h-20 bg-white rounded-xl shadow-lg border border-white/60 flex items-center justify-center">
          <div className="space-y-1.5 w-3/4">
            <div className="h-2 bg-violet-200 rounded-full" />
            <div className="h-2 bg-violet-100 rounded-full w-4/5" />
            <div className="h-8 bg-violet-100 rounded-lg mt-2" />
          </div>
        </div>
        <div className="absolute -bottom-3 -right-4 w-20 h-14 bg-white rounded-xl shadow-md border border-white/60 flex items-center justify-center rotate-6">
          <div className="w-10 h-8 bg-orange-100 rounded-lg" />
        </div>
      </div>
    )}
  </div>
);

/* ── Project Card ── */
const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col">
    {/* Mockup area */}
    <div className="relative h-56 overflow-hidden bg-slate-50">
      {project.type === "web" && (
        <BrowserMockup image={project.image} screenBg={project.screenBg} />
      )}
      {project.type === "mobile" && (
        <div className="h-full flex items-center justify-center py-3">
          <IPhoneMockup image={project.image} screenBg={project.screenBg} />
        </div>
      )}
      {project.type === "design" && (
        <DesignMockup image={project.image} screenBg={project.screenBg} />
      )}
    </div>

    {/* Card footer */}
    <div className="p-6 flex items-center justify-between gap-4">
      <div className="min-w-0">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 ${project.tag}`}
        >
          {project.category}
        </span>
        <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight truncate">
          {project.name}
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">{project.tools}</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#FF5C00] group-hover:text-white transition-all duration-300 shrink-0 group-hover:scale-110">
        →
      </div>
    </div>
  </div>
);

/* ── Portfolio Section ── */
const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-12 border-b border-slate-200 gap-8">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
              <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
                Portfolio
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
              Selected
              <br />
              Works
            </h2>
          </div>

          <div className="max-w-sm space-y-5">
            <p className="text-slate-500 leading-relaxed">
              A curated look at projects we have built — from web platforms to
              mobile apps and brand identities.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold hover:underline text-[#FF5C00] transition-colors duration-200 group"
            >
              View All Projects
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                active === f.value
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Project Grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl">
              🔍
            </div>
            <p className="text-slate-400 text-sm font-medium">
              No projects in this category yet — check back soon.
            </p>
          </div>
        )}

        {/* ── Footer row ── */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-400 font-medium">
            Showing{" "}
            <span className="text-slate-900 font-bold">{filtered.length}</span>{" "}
            {active === "All"
              ? "projects"
              : `${active} project${filtered.length !== 1 ? "s" : ""}`}
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#FF5C00] transition-colors duration-300"
          >
            See Full Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
