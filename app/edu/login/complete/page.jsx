"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { getEduAuth, eduFirebaseConfigured } from "../../_lib/firebase-client";
import { PENDING_EMAIL_STORAGE_KEY } from "../../_lib/constants";

/* The page the magic-link email points to. Firebase's email-link flow
   requires completing sign-in from the SAME browser the link was requested
   from (we stash the email in localStorage when requesting the link so we
   don't have to ask for it again) — if it's a different browser/device, we
   fall back to asking for the email again, which is still safe since the
   link itself is single-use and tied to Firebase's own verification. */
export default function CompleteSignInPage() {
  const router = useRouter();
  const [status, setStatus] = useState("working"); // working | need-email | error
  const [manualEmail, setManualEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    finishSignIn(window.localStorage.getItem(PENDING_EMAIL_STORAGE_KEY));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function finishSignIn(email) {
    if (!eduFirebaseConfigured) {
      setStatus("error");
      setErrorMessage("The learning portal isn't set up yet.");
      return;
    }

    const auth = getEduAuth();
    if (!isSignInWithEmailLink(auth, window.location.href)) {
      setStatus("error");
      setErrorMessage("This sign-in link is invalid.");
      return;
    }
    if (!email) {
      setStatus("need-email");
      return;
    }

    try {
      const credential = await signInWithEmailLink(auth, email, window.location.href);
      const idToken = await credential.user.getIdToken();
      window.localStorage.removeItem(PENDING_EMAIL_STORAGE_KEY);

      const res = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      router.replace(data.isAdmin ? "/admin" : "/learn");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "That sign-in link has expired or already been used.");
    }
  }

  if (status === "need-email") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-5 py-20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            finishSignIn(manualEmail);
          }}
          className="w-full max-w-sm bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-4"
        >
          <h1 className="text-xl font-black text-slate-900">Confirm your email</h1>
          <p className="text-sm text-slate-500">
            Opening this link on a different device? Confirm the email you signed in with.
          </p>
          <input
            type="email"
            required
            value={manualEmail}
            onChange={(e) => setManualEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5C00]/20 focus:border-[#FF5C00]"
          />
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-[#FF5C00] transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-5 py-20 text-center">
        <div>
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-5 py-4 mb-4">
            {errorMessage}
          </p>
          <a href="/login" className="text-sm font-bold text-slate-900 hover:text-[#FF5C00]">
            Request a new sign-in link →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5 py-20">
      <p className="text-sm text-slate-500">Signing you in…</p>
    </div>
  );
}
