import { getEduAdminAuth, getEduAdminDb, eduAdminConfigured } from "../../../_lib/firebase-admin";
import { COLLECTIONS } from "../../../_data/schema";
import { checkRateLimit, getClientIp } from "../../../_lib/rate-limit";
import { sendMagicLinkEmail } from "../../../_lib/send-auth-email";

const NOT_FOUND_MESSAGE = "We couldn't find an account associated with this email address.";

const EDU_BASE_URL =
  process.env.NEXT_PUBLIC_EDU_BASE_URL || "http://edu.localhost:3000";

export async function POST(request) {
  if (!eduAdminConfigured) {
    return Response.json(
      { success: false, message: "The learning portal isn't set up yet. Please try again later." },
      { status: 503 }
    );
  }

  const { email } = await request.json();
  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

  if (!normalizedEmail || !/\S+@\S+\.\S+/.test(normalizedEmail)) {
    return Response.json({ success: false, message: "Enter a valid email address." }, { status: 400 });
  }

  // Rate limit both by email (stop repeated-request abuse of one address)
  // and by IP (blunt broad enumeration/spam across many addresses).
  const ip = getClientIp(request);
  const [byEmail, byIp] = await Promise.all([
    checkRateLimit(`login-email:${normalizedEmail}`, { max: 3, windowMs: 15 * 60 * 1000 }),
    checkRateLimit(`login-ip:${ip}`, { max: 10, windowMs: 60 * 60 * 1000 }),
  ]);
  if (!byEmail.allowed || !byIp.allowed) {
    return Response.json(
      { success: false, message: "Too many attempts. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  try {
    const db = getEduAdminDb();
    const snap = await db
      .collection(COLLECTIONS.USERS)
      .where("email", "==", normalizedEmail)
      .limit(1)
      .get();

    // Explicit product requirement (not an oversight): tell the visitor
    // outright when there's no account, rather than the usual "check your
    // email either way" anti-enumeration pattern — rate limiting above is
    // what keeps this from being abusable at scale.
    if (snap.empty) {
      return Response.json({ success: false, found: false, message: NOT_FOUND_MESSAGE });
    }

    const user = snap.docs[0].data();
    const auth = getEduAdminAuth();
    const link = await auth.generateSignInWithEmailLink(normalizedEmail, {
      url: `${EDU_BASE_URL}/login/complete`,
      handleCodeInApp: true,
    });

    await sendMagicLinkEmail({ to: normalizedEmail, name: user.name, link });

    return Response.json({ success: true, found: true });
  } catch (err) {
    console.error("request-login failed:", err);
    return Response.json(
      { success: false, message: "Something went wrong sending your sign-in link. Please try again." },
      { status: 503 }
    );
  }
}
