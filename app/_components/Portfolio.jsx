"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const allProjects = [
  {
    id: 1,
    name: "GTA Hotels",
    category: "Web Development",
    type: "web",
    tools: "Next.js · Firebase · Tailwind",
    desc: "Full hotel booking system with room management, availability calendar, and online reservations.",
    image: "/gtaHotel.png",
    screenBg: "bg-blue-100",
    tag: "bg-blue-50 text-blue-600",
    year: "2026",
    featured: true,
    status: "Almost completed",
    link: "https://gtahotelikeja.com",
  },
  {
    id: 2,
    name: "That Local Girl (Web App)",
    category: "Web Development",
    type: "web",
    tools: "Next.js · Supabase · Tailwind",
    desc: "E-commerce mobile app with product listings, cart, Stripe payment integration, Carrier integration, real-time shipping fee calculation, and order tracking.",
    image: "/thatlocalgirl.png",
    screenBg: "bg-blue-100",
    tag: "bg-blue-50 text-blue-600",
    year: "2025",
    featured: true,
    status: "Completed",
    link: "https://thatlocalgirl.com",
  },
  {
    id: 3,
    name: "LolasElan",
    category: "Web Development",
    type: "web",
    tools: "Next.js · Supabase · Tailwind",
    desc: "E-commerce website for cloth listings, cart, Stripe payment integration, Carrier integration, real-time shipping fee calculation, and order tracking, and admin management system.",
    image: "/lolaselan.png",
    screenBg: "bg-blue-100",
    tag: "bg-blue-50 text-blue-600",
    year: "2025",
    featured: true,
    status: "Completed",
    link: "https://shoplolaselan.uk",
  },
  {
    id: 4,
    name: "Royal Moss Hotel",
    category: "Web Development",
    type: "web",
    tools: "Next.js · Supabase · Tailwind",
    desc: "An Hotel Management System with booking integration, real-time room availability check, payment integration, authentication and admin management system.",
    image: "/royalmosshotel.png",
    screenBg: "bg-blue-100",
    tag: "bg-blue-50 text-blue-600",
    year: "2026",
    featured: true,
    status: "Completed",
    link: "https://royalmoss.org",
  },
  {
    id: 6,
    name: "Amazon World",
    category: "Web Development",
    type: "web",
    tools: "Next.js · Supabase · Tailwind",
    desc: "An E-commerce website for a clothing brand where users can add to cart, make payment, and admin can list products, and manage products.",
    image: "/amazonworld.png",
    screenBg: "bg-blue-100",
    tag: "bg-blue-50 text-blue-600",
    year: "2026",
    featured: true,
    status: "Completed",
    link: "https://amazonworld.com",
  },
  {
    id: 20,
    name: "With Love By TLG",
    category: "Web Development",
    type: "web",
    tools: "Next.js · Supabase · Tailwind",
    desc: "A platform that allows users to make donations, purchase event tickets, and participate in fundraising campaigns through a secure and intuitive user experience.",
    image: "/withlove.png",
    screenBg: "bg-blue-100",
    tag: "bg-blue-50 text-blue-600",
    year: "2026",
    featured: true,
    status: "Completed",
    link: "https://withlovebytlg.com",
  },
  {
    id: 7,
    name: "That Local Girl (Mobile App)",
    category: "Mobile App",
    type: "mobile",
    tools: "React Native · Expo · Supabase",
    desc: "E-commerce mobile app with product listings, cart, Paystack checkout, and order tracking.",
    image: "/thatlocalgirlmobileapp.jpg",
    screenBg: "bg-orange-100",
    tag: "bg-orange-50 text-[#FF5C00]",
    year: "2024",
    featured: true,
    status: "Ongoing",
    link: "https://www.figma.com/design/TSZMZQ3E4iBlWYIGFjh9l3/E-Commerce-Shopping-App?t=GCtgR0SKzuiNTdpx-0",
  },
  {
    id: 9,
    name: "Campfleet",
    category: "Mobile App",
    type: "mobile",
    tools: "React Native · Node.js · Firebase",
    desc: "An all-in-one campus social network for Nigerian students.",
    image: "/campfleet.png",
    screenBg: "bg-slate-200",
    tag: "bg-slate-100 text-slate-600",
    year: "2026",
    featured: false,
    status: "Ongoing",
    link: null,
  },
  {
    id: 10,
    name: "Looks Clothing",
    category: "Web Development",
    type: "web",
    tools: "Next.js · Tailwind · Firebase",
    desc: "Corporate law firm website with practice areas, team profiles, and client consultation booking.",
    image: "/looksclothing.png",
    screenBg: "bg-amber-100",
    tag: "bg-amber-50 text-amber-700",
    year: "2026",
    featured: false,
    status: "Ongoing",
    link: "https://looksclothing.netlify.app",
  },

  {
    id: 12,
    name: "Haut Logistics (Web Design)",
    category: "Web Development",
    type: "web",
    tools: "Figma",
    desc: "A Website Redesign of an existing logistics company in Canada.",
    image: "/looksclothing.png",
    screenBg: "bg-amber-100",
    tag: "bg-amber-50 text-amber-700",
    year: "2026",
    featured: true,
    status: "Completed",
    link: "https://hautlogistics.com",
  },
  {
    id: 8,
    name: "Mr Vincent Itodo",
    category: "Graphic Design",
    type: "design",
    tools: "Figma · Adobe Illustrator",
    desc: "Complete flier design and invitation card design.",
    image: null,
    screenBg: "bg-green-100",
    tag: "bg-green-50 text-green-600",
    year: "2026",
    featured: true,
    status: "Completed",
    link: null,
  },

  {
    id: 13,
    name: "PocketHealth NG",
    category: "Graphic Design",
    type: "design",
    tools: "Figma · Adobe Photoshop",
    desc: "Investor pitch deck design — 24 slides covering product overview, traction, and financials.",
    image: null,
    screenBg: "bg-rose-100",
    tag: "bg-rose-50 text-rose-600",
    year: "2026",
    featured: false,
    status: "Completed",
    link: null,
  },
  {
    id: 14,
    name: "Trenova Logistics Ltd",
    category: "Business Registration",
    type: "registration",
    tools: "CAC · FIRS · SCUML",
    desc: "Full LLC incorporation — CAC registration, TIN, SCUML enrolment, and corporate bank account guidance.",
    image: null,
    screenBg: "bg-teal-100",
    tag: "bg-teal-50 text-teal-600",
    year: "2025",
    featured: false,
    status: "Completed",
    link: null,
  },
  {
    id: 15,
    name: "Obi Catering Co.",
    category: "Business Registration",
    type: "registration",
    tools: "CAC · FIRS",
    desc: "Sole proprietorship business name registration with TIN and post-registration compliance checklist.",
    image: null,
    screenBg: "bg-yellow-100",
    tag: "bg-yellow-50 text-yellow-700",
    year: "2025",
    featured: false,
    status: "Completed",
    link: null,
  },
  {
    id: 16,
    name: "Afolabi Chambers",
    category: "Graphic Design",
    type: "design",
    tools: "Adobe Illustrator · Figma",
    desc: "Brand identity refresh — new logo mark, letterhead, business cards, and email signature templates.",
    image: null,
    screenBg: "bg-indigo-100",
    tag: "bg-indigo-50 text-indigo-600",
    year: "2026",
    featured: false,
    status: "Completed",
    link: null,
  },
  {
    id: 17,
    name: "World Famous Clothing",
    category: "Business Registration",
    type: "registration",
    tools: "CAC · Trade Mark",
    desc: "Business name registration with CAC and full trademark filing to protect the brand name and logo.",
    image: null,
    screenBg: "bg-teal-100",
    tag: "bg-teal-50 text-teal-600",
    year: "2025",
    featured: false,
    status: "Completed",
    link: null,
  },
  {
    id: 18,
    name: "Glittering Icon Hub",
    category: "Business Registration",
    type: "registration",
    tools: "CAC · Trade Mark",
    desc: "Business name registration with CAC and full trademark filing to protect the brand name and logo.",
    image: null,
    screenBg: "bg-teal-100",
    tag: "bg-teal-50 text-teal-600",
    year: "2025",
    featured: false,
    status: "Completed",
    link: null,
  },
  {
    id: 19,
    name: "Laide Luxe Hub",
    category: "Business Registration",
    type: "registration",
    tools: "CAC · Trade Mark",
    desc: "Business name registration with CAC and full trademark filing to protect the brand name and logo.",
    image: null,
    screenBg: "bg-teal-100",
    tag: "bg-teal-50 text-teal-600",
    year: "2025",
    featured: false,
    status: "Completed",
    link: null,
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
        <Image
          src={image}
          alt="Project screenshot"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
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

/* ── iPhone Mockup ── */
const IPhoneMockup = ({ image, screenBg }) => (
  <div className="relative mx-auto" style={{ width: 116 }}>
    {/* Outer frame — titanium-like gradient */}
    <div
      className="relative rounded-[2.6rem] shadow-2xl shadow-black/40"
      style={{
        background:
          "linear-gradient(160deg, #4a4a4a 0%, #1c1c1e 50%, #3a3a3a 100%)",
        padding: "2px",
      }}
    >
      {/* Inner black bezel */}
      <div
        className="rounded-[2.4rem] overflow-hidden"
        style={{ background: "#0a0a0a", padding: "7px 5px" }}
      >
        {/* Screen */}
        <div
          className={`rounded-[1.9rem] overflow-hidden relative ${screenBg}`}
          style={{ aspectRatio: "9 / 19.5" }}
        >
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-7 z-20 flex items-center justify-between px-4 pt-1.5">
            <span className="text-[5px] font-bold text-black/50 tracking-tight">
              9:41
            </span>
            <div className="flex items-center gap-0.5">
              <div className="w-2 h-1 bg-black/30 rounded-[1px]" />
              <div className="w-1 h-1 bg-black/30 rounded-full" />
              <div className="w-1.5 h-1 bg-black/30 rounded-[1px]" />
            </div>
          </div>

          {/* Dynamic Island */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-9 h-2.5 bg-black rounded-full z-30" />

          {/* Screen content */}
          {image ? (
            <Image
              src={image}
              alt="App screenshot"
              fill
              sizes="116px"
              className="object-cover"
            />
          ) : (
            <div className="pt-9 px-2 space-y-1.5">
              <div className="h-2 bg-white/60 rounded-full w-3/4 mx-auto" />
              <div className="h-1.5 bg-white/40 rounded-full w-full" />
              <div className="h-1.5 bg-white/40 rounded-full w-5/6" />
              <div className="mt-2 h-14 bg-white/35 rounded-lg" />
              <div className="h-8 bg-white/35 rounded-lg" />
              <div className="h-8 bg-white/35 rounded-lg" />
            </div>
          )}

          {/* Home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/20 rounded-full z-20" />
        </div>
      </div>
    </div>

    {/* Left side — mute toggle */}
    <div
      className="absolute rounded-l-sm"
      style={{
        left: "-3px",
        top: "68px",
        width: "3px",
        height: "14px",
        background: "linear-gradient(to bottom, #4a4a4a, #222)",
      }}
    />
    {/* Left side — volume up */}
    <div
      className="absolute rounded-l-sm"
      style={{
        left: "-3px",
        top: "92px",
        width: "3px",
        height: "22px",
        background: "linear-gradient(to bottom, #4a4a4a, #222)",
      }}
    />
    {/* Left side — volume down */}
    <div
      className="absolute rounded-l-sm"
      style={{
        left: "-3px",
        top: "122px",
        width: "3px",
        height: "22px",
        background: "linear-gradient(to bottom, #4a4a4a, #222)",
      }}
    />
    {/* Right side — power */}
    <div
      className="absolute rounded-r-sm"
      style={{
        right: "-3px",
        top: "102px",
        width: "3px",
        height: "30px",
        background: "linear-gradient(to bottom, #4a4a4a, #222)",
      }}
    />
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
  <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
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
    <div className="p-6 flex flex-col gap-3 flex-1">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 ${project.tag}`}
          >
            {project.category}
          </span>
          <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight">
            {project.name}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">{project.tools}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#FF5C00] group-hover:text-white transition-all duration-300 shrink-0 group-hover:scale-110">
          →
        </div>
      </div>

      {project.desc && (
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
          {project.desc}
        </p>
      )}

      {project.link && (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#FF5C00] hover:underline mt-auto"
        >
          View project →
        </Link>
      )}
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
