import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import FinalCTA from "../../_components/FinalCTA";
import { projects } from "../../_data/projects";

const caseStudyProjects = projects.filter((p) => p.caseStudy);

export function generateStaticParams() {
  return caseStudyProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = caseStudyProjects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.name} Case Study | Devola Solutions`;
  const description = project.desc;

  return {
    metadataBase: new URL("https://devolasolutions.com"),
    title,
    description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      type: "article",
      url: `https://devolasolutions.com/portfolio/${project.slug}`,
      siteName: "Devola Solutions",
      title,
      description,
      images: project.image ? [project.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = caseStudyProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const tools = project.tools.split(/[·.]/).map((t) => t.trim()).filter(Boolean);

  return (
    <div>
      <Navbar />

      <div className="bg-[#fafafa]">
        {/* Header */}
        <section className="px-6 md:px-12 pt-36 pb-16">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-10">
              <Link href="/" className="hover:text-[#FF5C00] transition-colors duration-200">Home</Link>
              <span className="text-slate-300">›</span>
              <Link href="/portfolio" className="hover:text-[#FF5C00] transition-colors duration-200">Portfolio</Link>
              <span className="text-slate-300">›</span>
              <span className="text-slate-700 font-bold">{project.name}</span>
            </nav>

            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 ${project.tag}`}>
              {project.category}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] mb-5">
              {project.name}
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-8">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-9">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-slate-100 text-slate-600"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#FF5C00] transition-colors duration-300"
                >
                  Visit Live Site
                  <span>↗</span>
                </Link>
              )}
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold text-sm px-6 py-3 rounded-full hover:border-slate-300 transition-colors duration-300"
              >
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Hero image */}
        {project.image && (
          <section className="px-6 md:px-12 pb-20">
            <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-100 bg-white">
              <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                />
              </div>
            </div>
          </section>
        )}

        {/* Challenge + What We Solved */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="w-6 h-0.5 bg-[#FF5C00] rounded-full" />
                <span className="text-[#FF5C00] text-[11px] font-bold uppercase tracking-widest">The Challenge</span>
              </div>
              <p className="text-slate-600 leading-relaxed">{caseStudy.challenge}</p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="w-6 h-0.5 bg-[#FF5C00] rounded-full" />
                <span className="text-[#FF5C00] text-[11px] font-bold uppercase tracking-widest">What We Solved</span>
              </div>
              <ul className="space-y-3">
                {caseStudy.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] shrink-0 mt-2" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Client feedback */}
        {caseStudy.testimonial && (
          <section className="px-6 md:px-12 pb-24">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="w-6 h-0.5 bg-[#FF5C00] rounded-full" />
                <span className="text-[#FF5C00] text-[11px] font-bold uppercase tracking-widest">Client Feedback</span>
              </div>
              <div className="relative rounded-3xl border border-slate-100 bg-white p-8 overflow-hidden">
                <span className="absolute top-3 right-6 text-[6rem] font-black leading-none select-none pointer-events-none text-slate-100">
                  &ldquo;
                </span>
                <p className="relative z-10 text-lg leading-relaxed font-medium text-slate-800 mb-8">
                  &ldquo;{caseStudy.testimonial.quote}&rdquo;
                </p>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-black shrink-0">
                    {caseStudy.testimonial.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{caseStudy.testimonial.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{caseStudy.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <FinalCTA />
      <Footer />
    </div>
  );
}
