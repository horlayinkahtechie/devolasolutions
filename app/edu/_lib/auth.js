import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getEduAdminAuth, eduAdminConfigured } from "./firebase-admin";

export const SESSION_COOKIE_NAME = "edu_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 14; // 14 days — Firebase's createSessionCookie cap.

/* Exchanges a fresh Firebase ID token (just-completed sign-in, client-side)
   for a long-lived, revocable, HTTP-only session cookie value. The ID token
   itself is never stored — only this opaque cookie is, so a leaked
   access-token-style credential from browser storage isn't possible. */
export async function mintSessionCookie(idToken) {
  const auth = getEduAdminAuth();
  return auth.createSessionCookie(idToken, { expiresIn: SESSION_MAX_AGE_SECONDS * 1000 });
}

export async function setSessionCookie(cookieValue) {
  const store = await cookies();
  store.set(SESSION_COOKIE_NAME, cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(SESSION_COOKIE_NAME);
}

/**
 * Verifies the session cookie against Firebase (checking revocation, so a
 * "log out everywhere" via revokeAllSessions() takes effect immediately
 * rather than only once the cookie naturally expires). Returns null on any
 * failure — missing cookie, expired, revoked, tampered, or Firebase not yet
 * configured — never throws, so callers can treat "no session" uniformly.
 *
 * @returns {Promise<{uid: string, email: string, isAdmin: boolean}|null>}
 */
export async function getEduSession() {
  if (!eduAdminConfigured) return null;

  const store = await cookies();
  const cookieValue = store.get(SESSION_COOKIE_NAME)?.value;
  if (!cookieValue) return null;

  try {
    const auth = getEduAdminAuth();
    const decoded = await auth.verifySessionCookie(cookieValue, true);
    return {
      uid: decoded.uid,
      email: decoded.email,
      isAdmin: decoded.role === "admin",
    };
  } catch {
    // Expired, revoked, or malformed — treat exactly like "not signed in".
    return null;
  }
}

/* Revokes every refresh token for a user, so every existing session cookie
   (every device) fails verifyCheckRevoked on its very next check. */
export async function revokeAllSessions(uid) {
  const auth = getEduAdminAuth();
  await auth.revokeRefreshTokens(uid);
}

/** For Server Components: redirects to student login if not signed in. */
export async function requireEduUser() {
  const session = await getEduSession();
  if (!session) redirect("/login");
  return session;
}

/** For Server Components: redirects to admin login if not an authenticated admin. */
export async function requireEduAdmin() {
  const session = await getEduSession();
  if (!session || !session.isAdmin) redirect("/admin/login");
  return session;
}

/* Route Handlers can't call redirect() the way Server Components do — they
   return a Response instead. Usage:
     const { session, response } = await requireAdminApi();
     if (response) return response;
   `session` is non-null exactly when `response` is null. */
export async function requireAdminApi() {
  const session = await getEduSession();
  if (!session || !session.isAdmin) {
    return { session: null, response: Response.json({ success: false, message: "Forbidden." }, { status: 403 }) };
  }
  return { session, response: null };
}

/** Same pattern as requireAdminApi(), for any signed-in student. */
export async function requireUserApi() {
  const session = await getEduSession();
  if (!session) {
    return { session: null, response: Response.json({ success: false, message: "Not signed in." }, { status: 401 }) };
  }
  return { session, response: null };
}
