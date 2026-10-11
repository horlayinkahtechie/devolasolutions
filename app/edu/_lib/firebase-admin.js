import "server-only";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

/* Firebase ADMIN SDK — server-only (route handlers, server components,
   server actions). Uses a service account, never the client API key.
   Trusted code path: this is where we actually verify sessions, check
   enrollment ownership, and write payments/enrollments/progress. The
   client SDK (firebase-client.js) never writes to those collections
   directly — see firestore.rules. */

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
// Service account private keys are usually stored with literal "\n" in env
// vars (e.g. Vercel's env UI can't hold real newlines) — unescape them.
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

export const eduAdminConfigured = Boolean(projectId && clientEmail && privateKey);

let app;

/* Throws a clear, caught-by-the-caller error instead of crashing the whole
   process at import time when credentials aren't set yet (e.g. this repo
   right after Phase 1 lands, before the Firebase project exists). Every
   route that calls this wraps it and returns a clean 503, so the rest of
   the (unrelated) marketing site keeps working regardless. */
function getEduAdminApp() {
  if (!eduAdminConfigured) {
    throw new Error(
      "Firebase Admin is not configured for the education platform. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY — see .env.example."
    );
  }
  if (!app) {
    app = getApps().length
      ? getApps()[0]
      : initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
  }
  return app;
}

export function getEduAdminAuth() {
  return getAuth(getEduAdminApp());
}

export function getEduAdminDb() {
  return getFirestore(getEduAdminApp());
}
