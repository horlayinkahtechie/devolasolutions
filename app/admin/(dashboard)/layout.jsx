import Link from "next/link";
import { requireAdmin } from "../../_lib/auth";
import LogoutButton from "../_components/LogoutButton";

/* Protected admin shell — everything under app/admin/(dashboard)/ requires
   an authenticated admin session (the route group doesn't affect the URL,
   so this still serves at /admin, /admin/blog, etc. — it just keeps
   app/admin/login/page.jsx OUTSIDE this layout's reach, avoiding a
   redirect loop). requireAdmin() is checked ONCE here rather than per-page,
   since the sidebar below is meant to grow with more managed resources
   (pages, testimonials, pricing...) over time — each new one is a nav
   entry + its own route, not another auth check to remember. */
const navItems = [{ label: "Blog Posts", href: "/admin/blog" }];

export default async function AdminDashboardLayout({ children }) {
  const session = await requireAdmin();

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      <aside className="w-60 shrink-0 bg-white border-r border-slate-100 flex flex-col">
        <div className="px-6 py-6 border-b border-slate-100">
          <p className="text-sm font-black text-slate-900">Devola Admin</p>
          <p className="text-xs text-slate-400 mt-0.5 truncate">{session.email}</p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-5 border-t border-slate-100">
          <LogoutButton />
        </div>
      </aside>
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
