import { requireEduAdmin } from "../_lib/auth";
import LogoutButton from "../_components/LogoutButton";

/* Protected admin dashboard. requireEduAdmin() redirects to /admin/login
   unless the session's custom claim is role: "admin" — see
   scripts/edu-set-admin.js for how that claim gets set. Stats, course
   list, and student management are Phase 2. */
export default async function AdminDashboardPage() {
  const session = await requireEduAdmin();

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Admin Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">Signed in as {session.email}</p>
        </div>
        <LogoutButton redirectTo="/admin/login" />
      </div>
      <div className="bg-white border border-slate-100 rounded-2xl p-10 text-center text-sm text-slate-400">
        Course management, students and revenue stats land in Phase 2.
      </div>
    </div>
  );
}
