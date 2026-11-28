import { getAdminAuth, adminConfigured } from "../../../../_lib/firebase-admin";
import {
  mintSessionCookie,
  setSessionCookie,
  clearSessionCookie,
  getAdminSession,
  revokeAllSessions,
} from "../../../../_lib/auth";

/* Exchanges a just-issued Firebase ID token for our HTTP-only admin session
   cookie — mirrors app/edu/api/auth/session/route.js's POST, generic admin
   version (own cookie, no eduUsers write). */
export async function POST(request) {
  if (!adminConfigured) {
    return Response.json({ success: false, message: "Not configured yet." }, { status: 503 });
  }

  const { idToken } = await request.json();
  if (!idToken) {
    return Response.json({ success: false, message: "Missing ID token." }, { status: 400 });
  }

  try {
    const auth = getAdminAuth();
    const decoded = await auth.verifyIdToken(idToken, true);
    const cookieValue = await mintSessionCookie(idToken);
    await setSessionCookie(cookieValue);

    return Response.json({ success: true, isAdmin: decoded.role === "admin" });
  } catch (err) {
    console.error("Admin session creation failed:", err);
    return Response.json(
      { success: false, message: "Sign-in failed. Please try again." },
      { status: 401 }
    );
  }
}

/* Logout. Pass ?all=true to additionally revoke every other active session
   for this account ("log out of all devices"). */
export async function DELETE(request) {
  try {
    const session = await getAdminSession();
    const revokeAll = new URL(request.url).searchParams.get("all") === "true";

    if (session && revokeAll) {
      await revokeAllSessions(session.uid);
    }
    await clearSessionCookie();

    return Response.json({ success: true });
  } catch (err) {
    console.error("Admin logout failed:", err);
    await clearSessionCookie().catch(() => {});
    return Response.json({ success: true });
  }
}
