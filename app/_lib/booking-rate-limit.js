import { getAdminDb } from "./firebase-admin.js";
import { COLLECTIONS } from "../_data/booking-schema.js";

/* Same Firestore-backed sliding-window rate limiter as
   app/edu/_lib/rate-limit.js, rebuilt on the generic (non-edu) Firebase
   helper and its own collection — avoids coupling this feature to the edu
   sub-app's data model. The call is free, so this is the only barrier
   against a bot filling up every slot for no cost — guards the
   publicly-reachable booking endpoint against being hammered. */

/**
 * @param {string} key - e.g. `book-ip:${ip}`.
 * @param {{max: number, windowMs: number}} opts
 * @returns {Promise<{allowed: boolean, remaining: number}>}
 */
export async function checkRateLimit(key, { max, windowMs }) {
  const db = getAdminDb();
  const ref = db.collection(COLLECTIONS.CALL_BOOKING_RATE_LIMITS).doc(key);
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
