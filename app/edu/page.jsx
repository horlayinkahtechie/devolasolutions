import Link from "next/link";

/* Public course marketplace home — placeholder for Phase 1. The real
   listing (course cards, search, filters) is Phase 3. */
export default function EduHomePage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-24 text-center">
      <h1 className="text-4xl font-black text-slate-900 mb-4">Courses, coming soon.</h1>
      <p className="text-slate-500 mb-8">
        We&apos;re building the Devola Academy course catalogue. Already purchased a course?
      </p>
      <Link
        href="/login"
        className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-colors"
      >
        Sign in →
      </Link>
    </div>
  );
}
