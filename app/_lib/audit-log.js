import "server-only";
import { getAdminDb } from "./firebase-admin";
import { COLLECTIONS } from "../_data/blog-schema";

/**
 * Records an admin action — generic mirror of app/edu/_lib/audit-log.js.
 * Append only, never update/delete these documents from application code.
 *
 * @param {{uid: string, email: string}} admin
 * @param {string} action - e.g. "blogPost.publish".
 * @param {string|null} [targetId]
 * @param {Object} [metadata]
 */
export async function logAdminAction(admin, action, targetId = null, metadata = {}) {
  const db = getAdminDb();
  await db.collection(COLLECTIONS.ADMIN_AUDIT_LOGS).add({
    adminUid: admin.uid,
    adminEmail: admin.email,
    action,
    targetId,
    metadata,
    createdAt: Date.now(),
  });
}
