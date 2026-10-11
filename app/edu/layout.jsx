import Link from "next/link";

/* Minimal shell for the whole education platform — intentionally not
   reusing the marketing site's Navbar (different product, different nav:
   no pricing/services links, no currency toggle). Visual design is a
   later-phase concern (public pages / learning portal UI); this is just
   enough chrome for Phase 1's auth routes to sit inside. */
export const metadata = {
  title: {
    default: "Devola Academy",
    template: "%s | Devola Academy",
  },
  description: "Courses by Devola Solutions.",
};

export default function EduLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <header className="border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="font-black text-slate-900">
            Devola <span className="text-[#FF5C00]">Academy</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-slate-100 py-6 px-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Devola Solutions
      </footer>
    </div>
  );
}
