import { getEduAdminAuth, getEduAdminDb, eduAdminConfigured } from "../../../_lib/firebase-admin";
import { COLLECTIONS } from "../../../_data/schema";
import {
  mintSessionCookie,
  setSessionCookie,
  clearSessionCookie,
  getEduSession,
  revokeAllSessions,
} from "../../../_lib/auth";

/* Exchanges a just-issued Firebase ID token for our HTTP-only session
   cookie. Called right after the client completes either the student
   email-link flow or the admin email/password(+MFA) flow — the ID token
   itself proves the user just authenticated; we never trust a uid passed
   from the client without this verification step. */
export async function POST(request) {
  if (!eduAdminConfigured) {
    return Response.json({ success: false, message: "Not configured yet." }, { status: 503 });
  }

  const { idToken } = await request.json();
  if (!idToken) {
    return Response.json({ success: false, message: "Missing ID token." }, { status: 400 });
  }

  try {
    const auth = getEduAdminAuth();
    // Fresh verification (not the session-cookie path) — this is the token
    // minted moments ago by the client SDK, not yet our own cookie.
    const decoded = await auth.verifyIdToken(idToken, true);
    const cookieValue = await mintSessionCookie(idToken);
    await setSessionCookie(cookieValue);

    const db = getEduAdminDb();
    await db
      .collection(COLLECTIONS.USERS)
      .doc(decoded.uid)
      .set({ lastLoginAt: Date.now() }, { merge: true });

    return Response.json({ success: true, isAdmin: decoded.role === "admin" });
  } catch (err) {
    console.error("Session creation failed:", err);
    return Response.json(
      { success: false, message: "That sign-in link has expired or already been used." },
      { status: 401 }
    );
  }
}

/* Logout. Pass ?all=true to additionally revoke every other active session
   for this account ("log out of all devices"). */
export async function DELETE(request) {
  try {
    const session = await getEduSession();
    const revokeAll = new URL(request.url).searchParams.get("all") === "true";

    if (session && revokeAll) {
      await revokeAllSessions(session.uid);
    }
    await clearSessionCookie();

    return Response.json({ success: true });
  } catch (err) {
    console.error("Logout failed:", err);
    // Clear the cookie regardless — a failed revoke shouldn't strand the
    // user signed in client-side.
    await clearSessionCookie().catch(() => {});
    return Response.json({ success: true });
  }
}
