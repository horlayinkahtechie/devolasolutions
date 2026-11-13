"use client";

import { useState } from "react";
import Link from "next/link";
import { projects as allProjects } from "../_data/projects";
import ProjectImage from "./ProjectImage";

const filters = [
  { label: "Web Development", value: "Web Development" },
  { label: "Mobile App", value: "Mobile App" },
  { label: "Graphic Design", value: "Graphic Design" },
  { label: "Business Registration", value: "Business Registration" },
];

const ProjectCardContent = ({ project }) => (
  <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:shadow-slate-900/8 hover:-translate-y-1 transition-all duration-400 flex flex-col h-full">
    <div className="relative h-52 overflow-hidden bg-slate-50">
      <ProjectImage project={project} />
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
