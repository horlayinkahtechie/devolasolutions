"use client";

import { useState } from "react";
import { PENDING_EMAIL_STORAGE_KEY } from "../_lib/constants";

/* Student sign-in: email only, no password. We never say "check your email
   either way" here — the brief explicitly wants an honest "no account
   found" message for an email with no purchase history, since the intended
   next step for that visitor is "go buy a course," not "wait for an email
   that will never come." Rate limiting (server-side) is what keeps this
   from being an email-enumeration oracle at scale. */
export default function EduLoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | sent | not-found | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/auth/request-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        window.localStorage.setItem(PENDING_EMAIL_STORAGE_KEY, email);
        setStatus("sent");
      } else if (data.found === false) {
        setStatus("not-found");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5 py-20">
      <div className="w-full max-w-sm bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
        <h1 className="text-2xl font-black text-slate-900 mb-2">Sign in to your courses</h1>

        {status === "sent" ? (
          <div className="text-center py-6">
            <p className="text-4xl mb-4">📬</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Check <strong>{email}</strong> for a sign-in link. It works once and expires shortly.
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-slate-500 mb-6">
              Enter the email you purchased with — we&apos;ll send you a secure sign-in link.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5C00]/20 focus:border-[#FF5C00]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-[#FF5C00] transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send sign-in link"}
              </button>
            </form>
            {status === "not-found" && (
              <p className="text-sm text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mt-4">
                {message}{" "}
                <a href="/courses" className="font-bold underline">
                  Browse courses
                </a>
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 mt-4">
                {message}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
