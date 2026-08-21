"use client";

import { useState } from "react";
import Link from "next/link";
import FinalCTA from "../_components/FinalCTA";
import Image from "next/image";
import { projects as allProjects } from "../_data/projects";

/* ─────────────────────────────────
   FILTERS
───────────────────────────────── */
const filters = [
  { label: "All", value: "All" },
  { label: "Web Development", value: "Web Development" },
  { label: "Mobile App", value: "Mobile App" },
  { label: "Graphic Design", value: "Graphic Design" },
  { label: "Business Registration", value: "Business Registration" },
];

/* ─────────────────────────────────
   STATUS BADGE COMPONENT
───────────────────────────────── */
const StatusBadge = ({ status }) => {
  let styles = "bg-slate-100 text-slate-600";
  if (status === "Completed") styles = "bg-green-100 text-green-700";
  if (status === "Ongoing") styles = "bg-amber-100 text-amber-700";
  if (status === "Almost completed") styles = "bg-blue-100 text-blue-700";

  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${styles}`}
    >
      {status}
    </span>
  );
};

/* ─────────────────────────────────
   MOCKUPS
───────────────────────────────── */
const BrowserMockup = ({ image, screenBg }) => (
  <div className="w-full h-full flex flex-col overflow-hidden">
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
    <div className={`flex-1 ${screenBg} relative overflow-hidden`}>
      {image ? (
        <Image
          src={image}
          alt="Product Image"
          fill
          sizes="(max-w-7xl) 33vw, 50vw"
          className="object-cover object-top"
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
const IPhoneMockup = (
  { image, screenBg, width = 90 }, // Added width prop defaulting to 90
) => (
  <div className="relative mx-auto" style={{ width: width }}>
    <div className="bg-slate-900 rounded-[2.2rem] p-1.25 shadow-2xl relative">
      <div
        className={`rounded-[1.8rem] overflow-hidden relative ${screenBg}`}
        style={{ aspectRatio: "9 / 19" }}
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-slate-900 rounded-full z-10" />
        {image ? (
          <Image
            src={image}
            alt="product image"
            fill
            sizes={`${width}px`} // Pass the dynamic width to sizes
            className="object-cover"
          />
        ) : (
          <div className="pt-7 px-2 space-y-1.5">{/* skeleton code */}</div>
        )}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-900/30 rounded-full" />
      </div>
    </div>
    {/* static buttons lines */}
  </div>
);

const DesignMockup = ({ image, screenBg }) => (
  <div
    className={`w-full h-full flex items-center justify-center relative ${screenBg}`}
  >
    {image ? (
      <Image
        src={image}
        alt="Product Image"
        fill
        sizes="(max-w-7xl) 33vw, 50vw"
        className="object-cover"
      />
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

const RegistrationMockup = ({ screenBg }) => (
  <div
    className={`w-full h-full flex items-center justify-center ${screenBg} p-6`}
  >
    <div className="relative w-full max-w-[160px]">
      <div className="bg-white rounded-xl shadow-lg border border-white/60 p-4 space-y-2">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-full" />
          </div>
          <div className="h-2 bg-slate-200 rounded-full flex-1" />
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full w-full" />
        <div className="h-1.5 bg-slate-100 rounded-full w-4/5" />
        <div className="h-1.5 bg-slate-100 rounded-full w-3/5" />
        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="h-1.5 bg-green-100 rounded-full flex-1" />
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 w-14 h-10 bg-white rounded-lg shadow-md border border-white/60 rotate-6 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-teal-50 border-2 border-teal-300" />
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────
   PROJECT CARD
───────────────────────────────── */
const ProjectCardContent = ({ project }) => (
  <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
    {/* Mockup Container */}
    <div className="relative h-56 overflow-hidden bg-slate-50">
      {project.type === "web" && (
        <BrowserMockup image={project.image} screenBg={project.screenBg} />
      )}
      {project.type === "mobile" && (
        <div className="h-full flex items-center justify-center py-6">
          <IPhoneMockup
            image={project.image}
            screenBg={project.screenBg}
            width={160}
          />
        </div>
      )}
      {project.type === "design" && (
        <DesignMockup image={project.image} screenBg={project.screenBg} />
      )}
      {project.type === "registration" && (
        <RegistrationMockup screenBg={project.screenBg} />
      )}

      {/* Badges on Top of Images */}
      <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
        <span className="bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-[10px] font-bold text-slate-500">
          {project.year}
        </span>
        <StatusBadge status={project.status} />
      </div>
    </div>

    {/* Description Box */}
    <div className="p-6 flex items-start justify-between gap-4 flex-1">
      <div className="min-w-0 flex-1">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 ${project.tag}`}
        >
          {project.category}
        </span>
        <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight mb-1">
          {project.name}
        </h3>
        <p className="text-xs text-slate-400 mb-2">{project.tools}</p>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
          {project.desc}
        </p>

        {/* Dynamic Link Notification */}
        {project.caseStudy ? (
          <p className="text-xs font-bold text-[#FF5C00] mt-3 group-hover:underline">
            Read about project →
          </p>
        ) : (
          project.link && (
            <p className="text-xs font-bold text-[#FF5C00] mt-3 group-hover:underline">
              Visit project →
            </p>
          )
        )}
      </div>
      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#FF5C00] group-hover:text-white transition-all duration-300 shrink-0 group-hover:scale-110 mt-1">
        →
      </div>
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

/* ─────────────────────────────────
   FEATURED CARD (wide)
───────────────────────────────── */
const FeaturedCardContent = ({ project }) => (
  <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 grid md:grid-cols-2 h-full">
    {/* Mockup Container */}
    <div className="relative h-64 md:h-auto overflow-hidden bg-slate-50">
      {project.type === "web" && (
        <BrowserMockup image={project.image} screenBg={project.screenBg} />
      )}
      {project.type === "mobile" && (
        <div className="h-full flex items-center justify-center py-6">
          <IPhoneMockup
            image={project.image}
            screenBg={project.screenBg}
            width={160}
          />
        </div>
      )}
      {project.type === "design" && (
        <DesignMockup image={project.image} screenBg={project.screenBg} />
      )}

      {/* Left Side Badges */}
      <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
        <span className="bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-[10px] font-bold text-slate-500">
          {project.year}
        </span>
        <StatusBadge status={project.status} />
      </div>
      <div className="absolute top-3 right-3 bg-slate-900 text-white rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest">
        Featured
      </div>
    </div>

    {/* Info Container */}
    <div className="p-8 flex flex-col justify-between">
      <div>
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${project.tag}`}
        >
          {project.category}
        </span>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight mb-3">
          {project.name}
        </h3>
        <p className="text-xs text-slate-400 mb-4">{project.tools}</p>
        <p className="text-sm text-slate-500 leading-relaxed">
          {project.desc}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-8 text-sm font-bold text-slate-900 group-hover:text-[#FF5C00] transition-colors">
        {project.caseStudy ? "Read About Project" : project.link ? "Visit Project" : "View Project"}
        <span className="group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </div>
  </div>
);

const FeaturedCard = ({ project }) => {
  if (project.caseStudy) {
    return (
      <Link href={`/portfolio/${project.slug}`} className="block">
        <FeaturedCardContent project={project} />
      </Link>
    );
  }

  return project.link ? (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <FeaturedCardContent project={project} />
    </Link>
  ) : (
    <FeaturedCardContent project={project} />
  );
};

/* ─────────────────────────────────
   MAIN PORTFOLIO PAGE
───────────────────────────────── */
export default function Portfolio() {
  const [active, setActive] = useState("Web Development");

  const featured = allProjects.filter((p) => p.featured);
  const rest = allProjects.filter((p) => !p.featured);

  const filteredAll =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  const showFeatured = active === "All";
  const gridProjects = showFeatured ? rest : filteredAll;

  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-36 pb-20">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-10">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors duration-200">Home</Link>
            <span className="text-slate-300">›</span>
            <span className="text-slate-700 font-bold">Portfolio</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
                <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
                  Our Work
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.0] mb-5">
                Real Projects.
                <br />
                <span className="text-[#FF5C00]">Real Results.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                A curated selection of the websites, mobile apps, brand
                identities, and registrations we&apos;ve delivered. Every
                project here is a business that trusted us to get it right.
              </p>
            </div>

            {/* Value Props Box */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  stat: "Real Projects",
                  label: "Every Entry Is Live",
                  bg: "bg-white border border-slate-100",
                  num: "text-slate-900",
                },
                {
                  stat: "Full-Service",
                  label: "Web, Mobile, Design & Legal",
                  bg: "bg-[#FF5C00]",
                  num: "text-white",
                },
                {
                  stat: "Client-First",
                  label: "Long-Term Partnerships",
                  bg: "bg-slate-900",
                  num: "text-white",
                },
                {
                  stat: "Nigeria-Built",
                  label: "Proudly Local",
                  bg: "bg-white border border-slate-100",
                  num: "text-slate-900",
                },
              ].map(({ stat, label, bg, num }) => (
                <div key={label} className={`rounded-3xl p-6 ${bg}`}>
                  <div
                    className={`text-xl font-black leading-none mb-1.5 ${num}`}
                  >
                    {stat}
                  </div>
                  <div
                    className={`text-xs font-medium ${num === "text-white" ? "opacity-70" : "text-slate-400"}`}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Grid Section */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Tabs Filter Header */}
          <div className="flex flex-wrap gap-2 mb-12">
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
                <span
                  className={`ml-2 text-[10px] font-black px-1.5 py-0.5 rounded-full ${active === f.value ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"}`}
                >
                  {f.value === "All"
                    ? allProjects.length
                    : allProjects.filter((p) => p.category === f.value).length}
                </span>
              </button>
            ))}
          </div>

          {/* Featured Content Area (Default Display) */}
          {showFeatured && (
            <div className="mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-5">
                Featured Projects
              </p>
              <div className="space-y-5">
                {featured.map((p) => (
                  <FeaturedCard key={p.id} project={p} />
                ))}
              </div>

              {rest.length > 0 && (
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mt-12 mb-5">
                  All Projects
                </p>
              )}
            </div>
          )}

          {/* Cards Dynamic Grid */}
          {gridProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gridProjects.map((p) => (
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

          {/* Counter Status Bar */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
            <p className="text-sm text-slate-400 font-medium">
              Showing{" "}
              <span className="text-slate-900 font-bold">
                {filteredAll.length}
              </span>{" "}
              {active === "All"
                ? "projects"
                : `${active} project${filteredAll.length !== 1 ? "s" : ""}`}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#FF5C00] transition-colors duration-300"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>

      {/* Discovery / Process Banner */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
                <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
                  Want to be next?
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight mb-3">
                Every project starts <br /> with a free call.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                No commitment, no pitch pressure. Just a 20-minute conversation
                to understand what you&apos;re building and how we can help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#FF5C00] transition-all duration-300"
              >
                Book a Discovery Call →
              </Link>
              <Link
                href="/how-we-work"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold hover:border-slate-400 transition-all duration-300"
              >
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
