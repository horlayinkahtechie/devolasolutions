import Image from "next/image";

/* Mobile app screenshots render inside a small iPhone-style frame (notch,
   rounded bezel) so they read as an app, not a cropped website screenshot.
   Pure presentation — no project-shape assumptions — so it's also reusable
   from places that don't have a full `project` object on hand (e.g.
   ProofTabs.jsx's proof-of-work cards). */
export function MobilePhoneFrame({ image, alt, category, screenBg, sizes }) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${screenBg || "bg-slate-100"}`}>
      <div className="relative h-[92%] aspect-[9/19.5] rounded-[1.75rem] bg-slate-900 p-[6px] shadow-xl">
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-slate-900 rounded-full z-10" />
        <div className="relative w-full h-full rounded-[1.4rem] overflow-hidden bg-white">
          {image ? (
            <Image
              src={image}
              alt={alt}
              fill
              sizes={sizes || "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500/70 text-center px-3">
                {category}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* A plain project screenshot — no fake browser-chrome bar, matching the
   simple card style used on the e-commerce landing page — except mobile
   app projects, which get the phone frame above instead. Drop this inside
   any existing `relative` + sized container (it renders only the fill
   content, not its own wrapper, so it works with whatever height or
   aspect-ratio the caller's container already uses).

   Falls back to a soft tinted placeholder naming the category for entries
   with no screenshot (some design/registration work has nothing to show). */
export default function ProjectImage({ project, sizes }) {
  if (project.type === "mobile") {
    return (
      <MobilePhoneFrame
        image={project.image}
        alt={project.name}
        category={project.category}
        screenBg={project.screenBg}
        sizes={sizes}
      />
    );
  }

  if (!project.image) {
    return (
      <div
        className={`w-full h-full flex items-center justify-center ${project.screenBg || "bg-slate-100"}`}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500/70 text-center px-6">
          {project.category}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={project.image}
      alt={project.name}
      fill
      sizes={sizes || "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
      className="object-cover"
    />
  );
}
