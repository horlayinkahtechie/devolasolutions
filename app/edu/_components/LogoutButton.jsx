"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton({ redirectTo = "/login", className = "" }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/session", { method: "DELETE" });
    router.replace(redirectTo);
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
