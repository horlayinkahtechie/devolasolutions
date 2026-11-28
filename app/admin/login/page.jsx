"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
} from "firebase/auth";
import { getAdminAuthClient, adminFirebaseConfigured } from "../../_lib/firebase-client";

/* Admin sign-in — generic mirror of app/edu/admin/login/page.jsx. Same
   Firebase project, same `role: "admin"` custom claim, same email/password
   (+ optional phone MFA step-up) flow — kept even though MFA isn't required
   today, because enrollment (scripts/edu-set-admin.js) is on the Firebase
   user itself, not edu-scoped, so any login surface for that account must
   handle the MFA resolver or it breaks the moment a phone factor exists. */
export default function AdminLoginPage() {
  const router = useRouter();
  const recaptchaContainerRef = useRef(null);
  const verifierRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [stage, setStage] = useState("credentials"); // credentials | mfa | loading
  const [resolver, setResolver] = useState(null);
  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState("");

  const finishLogin = async (userCredential) => {
    const idToken = await userCredential.user.getIdToken();
    const res = await fetch("/api/admin/auth/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });
    const data = await res.json();
    if (!data.success || !data.isAdmin) {
      throw new Error("This account doesn't have admin access.");
    }
    router.replace("/admin");
  };

  const handleCredentials = async (e) => {
    e.preventDefault();
    setError("");
    setStage("loading");
    try {
      const auth = getAdminAuthClient();
      const credential = await signInWithEmailAndPassword(auth, email, password);
      await finishLogin(credential);
    } catch (err) {
      if (err.code === "auth/multi-factor-auth-required") {
        setResolver(err.resolver);
        if (!verifierRef.current) {
          verifierRef.current = new RecaptchaVerifier(getAdminAuthClient(), recaptchaContainerRef.current, {
            size: "invisible",
          });
        }
        const phoneProvider = new PhoneAuthProvider(getAdminAuthClient());
        const id = await phoneProvider.verifyPhoneNumber(
          { multiFactorHint: err.resolver.hints[0], session: err.resolver.session },
          verifierRef.current
        );
        setVerificationId(id);
        setStage("mfa");
      } else {
        setError("Incorrect email or password.");
        setStage("credentials");
      }
    }
  };

  const handleMfaSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStage("loading");
    try {
      const cred = PhoneAuthProvider.credential(verificationId, smsCode);
      const assertion = PhoneMultiFactorGenerator.assertion(cred);
      const credential = await resolver.resolveSignIn(assertion);
      await finishLogin(credential);
    } catch {
      setError("That code didn't work. Please try again.");
      setStage("mfa");
    }
  };

  if (!adminFirebaseConfigured) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-5 py-20 text-center">
        <p className="text-sm text-slate-500">The admin portal isn&apos;t set up yet.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5 py-20">
      <div className="w-full max-w-sm bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
        <h1 className="text-2xl font-black text-slate-900 mb-6">Admin sign in</h1>

        {stage === "mfa" ? (
          <form onSubmit={handleMfaSubmit} className="space-y-4">
            <p className="text-sm text-slate-500">Enter the code sent to your phone.</p>
            <input
              type="text"
              inputMode="numeric"
              required
              value={smsCode}
              onChange={(e) => setSmsCode(e.target.value)}
              placeholder="123456"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5C00]/20 focus:border-[#FF5C00]"
            />
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-[#FF5C00] transition-colors"
            >
              Verify
            </button>
          </form>
        ) : (
          <form onSubmit={handleCredentials} className="space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5C00]/20 focus:border-[#FF5C00]"
            />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5C00]/20 focus:border-[#FF5C00]"
            />
            <button
              type="submit"
              disabled={stage === "loading"}
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-[#FF5C00] transition-colors disabled:opacity-60"
            >
              {stage === "loading" ? "Signing in…" : "Sign in"}
            </button>
          </form>
        )}

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 mt-4">
            {error}
          </p>
        )}

        <div ref={recaptchaContainerRef} />
      </div>
    </div>
  );
}
