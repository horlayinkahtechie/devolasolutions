import "server-only";
import { getEduAdminDb } from "./firebase-admin";
import { COLLECTIONS } from "../_data/schema";

/**
 * A small Firestore-backed sliding-window rate limiter. Not a replacement
 * for edge/WAF-level rate limiting in front of a high-traffic production
 * app, but covers the brief's explicit requirement to rate-limit login and
 * magic-link/OTP requests without introducing a new infra dependency
 * (Redis, etc.) for an MVP.
 *
 * @param {string} key - e.g. `login-email:${email}` or `login-ip:${ip}`.
 * @param {{max: number, windowMs: number}} opts
 * @returns {Promise<{allowed: boolean, remaining: number}>}
 */
export async function checkRateLimit(key, { max, windowMs }) {
  const db = getEduAdminDb();
  const ref = db.collection(COLLECTIONS.RATE_LIMITS).doc(key);
  const now = Date.now();

  return db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? snap.data() : null;

    if (!data || now - data.windowStart > windowMs) {
      tx.set(ref, { count: 1, windowStart: now });
      return { allowed: true, remaining: max - 1 };
    }

    if (data.count >= max) {
      return { allowed: false, remaining: 0 };
    }

    tx.update(ref, { count: data.count + 1 });
    return { allowed: true, remaining: max - (data.count + 1) };
  });
}

/** Best-effort client IP from standard proxy headers (Vercel sets x-forwarded-for). */
export function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}
