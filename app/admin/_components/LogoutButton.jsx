"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton({ className = "" }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/auth/session", { method: "DELETE" });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className={className || "text-sm font-bold text-slate-500 hover:text-[#FF5C00] transition-colors"}
    >
      Log out
    </button>
  );
}
