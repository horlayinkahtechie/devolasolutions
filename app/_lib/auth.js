import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminAuth, adminConfigured } from "./firebase-admin";

/* General (non-edu) admin session handling — a clean, generic mirror of
   app/edu/_lib/auth.js's shape, not an import of it. Same Firebase project,
   same `role: "admin"` custom claim (already granted via
   scripts/edu-set-admin.js — that claim lives on the Firebase user, not
   scoped to edu, so no new claim-setting script is needed), but its own
   session cookie and its own login surface (/admin/login), since "edu
   platform admin" and "marketing-site content admin" are different
   products that happen to share one human admin. */

export const ADMIN_SESSION_COOKIE = "admin_session";
export const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 14; // 14 days — Firebase's createSessionCookie cap.

export async function mintSessionCookie(idToken) {
  const auth = getAdminAuth();
  return auth.createSessionCookie(idToken, { expiresIn: ADMIN_SESSION_MAX_AGE_SECONDS * 1000 });
}

export async function setSessionCookie(cookieValue) {
  const store = await cookies();
  store.set(ADMIN_SESSION_COOKIE, cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(ADMIN_SESSION_COOKIE);
}

/**
 * @returns {Promise<{uid: string, email: string, isAdmin: boolean}|null>}
 */
export async function getAdminSession() {
  if (!adminConfigured) return null;

  const store = await cookies();
  const cookieValue = store.get(ADMIN_SESSION_COOKIE)?.value;
  if (!cookieValue) return null;

  try {
    const auth = getAdminAuth();
    const decoded = await auth.verifySessionCookie(cookieValue, true);
    return {
      uid: decoded.uid,
      email: decoded.email,
      isAdmin: decoded.role === "admin",
    };
  } catch {
    return null;
  }
}

export async function revokeAllSessions(uid) {
  const auth = getAdminAuth();
  await auth.revokeRefreshTokens(uid);
}

/** For Server Components: redirects to admin login if not an authenticated admin. */
export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session || !session.isAdmin) redirect("/admin/login");
  return session;
}

/* Route Handlers can't call redirect() the way Server Components do — they
   return a Response instead. Usage:
     const { session, response } = await requireAdminApi();
     if (response) return response;
   `session` is non-null exactly when `response` is null. */
export async function requireAdminApi() {
  const session = await getAdminSession();
  if (!session || !session.isAdmin) {
    return { session: null, response: Response.json({ success: false, message: "Forbidden." }, { status: 403 }) };
  }
  return { session, response: null };
}
