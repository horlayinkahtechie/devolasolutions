"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects as allProjects } from "../_data/projects";

const filters = [
  { label: "Web Development", value: "Web Development" },
  { label: "Mobile App", value: "Mobile App" },
  { label: "Graphic Design", value: "Graphic Design" },
  { label: "Business Registration", value: "Business Registration" },
];

const BrowserMockup = ({ image, screenBg }) => (
  <div className="w-full h-full flex flex-col overflow-hidden">
    <div className="flex items-center gap-2 px-3 py-2 bg-slate-200/80 shrink-0">
      <div className="flex gap-1.5 shrink-0">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 bg-white rounded-md h-4 flex items-center px-2">
        <div className="w-1/3 h-1.5 bg-slate-200 rounded-full" />
      </div>
    </div>
    <div className={`flex-1 ${screenBg} relative overflow-hidden`}>
      {image ? (
        <Image
          src={image}
          alt="Project screenshot"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top"
        />
      ) : (
        <div className="p-4 space-y-2">
          <div className="h-3 bg-white/60 rounded-full w-1/2" />
          <div className="h-2 bg-white/40 rounded-full w-full" />
          <div className="h-2 bg-white/40 rounded-full w-4/5" />
          <div className="mt-3 h-14 bg-white/35 rounded-xl" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-9 bg-white/35 rounded-lg" />
            <div className="h-9 bg-white/35 rounded-lg" />
          </div>
        </div>
      )}
    </div>
  </div>
);

const IPhoneMockup = ({ image, screenBg }) => (
  <div className="relative mx-auto" style={{ width: 110 }}>
    <div
      className="relative rounded-[2.4rem] shadow-2xl shadow-black/40"
      style={{
        background: "linear-gradient(160deg, #4a4a4a 0%, #1c1c1e 50%, #3a3a3a 100%)",
        padding: "2px",
      }}
    >
      <div className="rounded-[2.2rem] overflow-hidden" style={{ background: "#0a0a0a", padding: "6px 5px" }}>
        <div
          className={`rounded-[1.8rem] overflow-hidden relative ${screenBg}`}
          style={{ aspectRatio: "9 / 19.5" }}
        >
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-black rounded-full z-30" />
          {image ? (
            <Image src={image} alt="App screenshot" fill sizes="110px" className="object-cover" />
          ) : (
            <div className="pt-8 px-2 space-y-1.5">
              <div className="h-2 bg-white/50 rounded-full w-3/4 mx-auto" />
              <div className="h-1.5 bg-white/35 rounded-full w-full" />
              <div className="mt-2 h-12 bg-white/30 rounded-lg" />
              <div className="h-7 bg-white/30 rounded-lg" />
            </div>
          )}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-7 h-1 bg-black/20 rounded-full z-20" />
        </div>
      </div>
    </div>
  </div>
);

const DesignMockup = ({ image, screenBg }) => (
  <div className={`w-full h-full flex items-center justify-center ${screenBg}`}>
    {image ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={image} alt="" className="w-full h-full object-cover" />
    ) : (
      <div className="relative">
        <div className="w-28 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center">
          <div className="space-y-1.5 w-3/4">
            <div className="h-2 bg-violet-200 rounded-full" />
            <div className="h-2 bg-violet-100 rounded-full w-4/5" />
            <div className="h-7 bg-violet-100 rounded-lg mt-2" />
          </div>
        </div>
        <div className="absolute -bottom-3 -right-4 w-20 h-14 bg-white rounded-xl shadow-md flex items-center justify-center rotate-6">
          <div className="w-10 h-7 bg-orange-100 rounded-lg" />
        </div>
      </div>
    )}
  </div>
);

const ProjectCardContent = ({ project }) => (
  <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:shadow-slate-900/8 hover:-translate-y-1 transition-all duration-400 flex flex-col h-full">
    <div className="relative h-52 overflow-hidden bg-slate-50">
      {project.type === "web" && <BrowserMockup image={project.image} screenBg={project.screenBg} />}
      {project.type === "mobile" && (
        <div className="h-full flex items-center justify-center py-3">
          <IPhoneMockup image={project.image} screenBg={project.screenBg} />
        </div>
      )}
      {project.type === "design" && <DesignMockup image={project.image} screenBg={project.screenBg} />}
    </div>

    <div className="p-5 flex flex-col gap-2.5 flex-1">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${project.tag}`}>
            {project.category}
          </span>
          <h3 className="text-base font-black text-slate-900 tracking-tight leading-tight">{project.name}</h3>
          <p className="text-xs text-slate-400 mt-0.5">{project.tools}</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#FF5C00] group-hover:text-white transition-all duration-300 shrink-0 text-sm">
          →
        </div>
      </div>

      {project.desc && (
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{project.desc}</p>
      )}

      {project.caseStudy ? (
        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#FF5C00] mt-auto">
          Read about project →
        </span>
      ) : (
        project.link && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#FF5C00] mt-auto">
            View project →
          </span>
        )
      )}
    </div>
  </div>
);

const ProjectCard = ({ project }) => {
  if (project.caseStudy) {
    return (
      <Link href={`/portfolio/${project.slug}`} className="block h-full">
        <ProjectCardContent project={project} />
      </Link>
    );
  }

  return project.link ? (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <ProjectCardContent project={project} />
    </Link>
  ) : (
    <ProjectCardContent project={project} />
  );
};

const Portfolio = () => {
  const [active, setActive] = useState(filters[0].value);

  const filtered = allProjects.filter((p) => p.category === active);

  return (
    <section className="py-24 px-5 md:px-10 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-12 border-b border-slate-200 gap-8">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-[#FF5C00] rounded-full" />
              <span className="text-[#FF5C00] text-[11px] font-bold uppercase tracking-widest">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
              Selected<br />Works
            </h2>
          </div>

          <div className="max-w-sm space-y-4">
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              A curated look at projects we have built — from web platforms to
              mobile apps and brand identities.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF5C00] hover:gap-2.5 transition-all duration-200 group"
            >
              View All Projects
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                active === f.value
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl">🔍</div>
            <p className="text-slate-400 text-sm font-medium">No projects in this category yet — check back soon.</p>
          </div>
        )}

        {/* Footer row */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-400 font-medium">
            Showing{" "}
            <span className="text-slate-900 font-bold">{filtered.length}</span>{" "}
            {active} project{filtered.length !== 1 ? "s" : ""}
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#FF5C00] transition-colors duration-300"
          >
            See Full Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
