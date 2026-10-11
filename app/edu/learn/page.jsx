import { requireEduUser } from "../_lib/auth";
import LogoutButton from "../_components/LogoutButton";

/* Protected student dashboard. requireEduUser() redirects to /login if
   there's no valid session — this is the enforcement point; the "My
   Courses" list, progress bars, and "Continue Learning" are Phase 5. */
export default async function LearnPage() {
  const session = await requireEduUser();

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl font-black text-slate-900">My Courses</h1>
          <p className="text-sm text-slate-500 mt-1">Signed in as {session.email}</p>
        </div>
        <LogoutButton />
      </div>
      <div className="bg-white border border-slate-100 rounded-2xl p-10 text-center text-sm text-slate-400">
        Your enrolled courses will show up here once the course catalogue is live.
      </div>
    </div>
  );
}
