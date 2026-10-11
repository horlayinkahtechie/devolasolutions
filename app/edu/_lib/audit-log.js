import "server-only";
import { getEduAdminDb } from "./firebase-admin";
import { COLLECTIONS } from "../_data/schema";

/**
 * Records an admin action. Call this from every Phase 2+ admin mutation
 * (publish a course, revoke an enrollment, issue a refund, etc.) — append
 * only, never update/delete these documents from application code.
 *
 * @param {{uid: string, email: string}} admin
 * @param {string} action - e.g. "course.publish".
 * @param {string|null} [targetId]
 * @param {Object} [metadata]
 */
export async function logAdminAction(admin, action, targetId = null, metadata = {}) {
  const db = getEduAdminDb();
  await db.collection(COLLECTIONS.AUDIT_LOGS).add({
    adminUid: admin.uid,
    adminEmail: admin.email,
    action,
    targetId,
    metadata,
    createdAt: Date.now(),
  });
}
