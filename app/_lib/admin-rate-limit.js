import "server-only";
import { getAdminDb } from "./firebase-admin";
import { COLLECTIONS } from "../_data/blog-schema";

/* Same Firestore-backed sliding-window rate limiter as
   app/_lib/booking-rate-limit.js and app/edu/_lib/rate-limit.js, on its own
   collection — guards the admin login endpoint and admin write APIs
   against brute-force/abuse attempts. */

/**
 * @param {string} key - e.g. `admin-login-ip:${ip}`.
 * @param {{max: number, windowMs: number}} opts
 * @returns {Promise<{allowed: boolean, remaining: number}>}
 */
export async function checkRateLimit(key, { max, windowMs }) {
  const db = getAdminDb();
  const ref = db.collection(COLLECTIONS.ADMIN_RATE_LIMITS).doc(key);
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

/** Best-effort client IP from standard proxy headers. */
export function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}
