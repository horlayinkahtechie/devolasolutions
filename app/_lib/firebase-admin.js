import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

/* Firebase Admin SDK for the main marketing site (not the "edu" sub-app —
   see app/edu/_lib/firebase-admin.js for that one). Same Firebase project,
   same env vars, same lazy-singleton pattern. Used by the booking feature
   (Firestore only) and the general admin/blog system (Firestore + Auth, for
   verifying admin session cookies).

   Deliberately NOT `import "server-only"` here, unlike the edu version:
   this file is also imported directly (via a relative path) by the
   standalone Netlify scheduled function that sends call reminders, which
   runs in plain Node outside Next's bundler. Verified directly that
   `server-only` throws unconditionally outside Next's "react-server"
   resolution condition (`node -e "require('server-only')"` throws) — so
   importing it here would crash that function at cold start. Every new
   lib file this feature adds follows the same rule. */

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
// Service account private keys are usually stored with literal "\n" in env
// vars — unescape them.
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

export const adminConfigured = Boolean(projectId && clientEmail && privateKey);

let app;

function getAdminApp() {
  if (!adminConfigured) {
    throw new Error(
      "Firebase Admin is not configured. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY."
    );
  }
  if (!app) {
    app = getApps().length
      ? getApps()[0]
      : initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
  }
  return app;
}

export function getAdminDb() {
  return getFirestore(getAdminApp());
}

export function getAdminAuth() {
  return getAuth(getAdminApp());
}
