"use client";

/* Firebase CLIENT SDK for the general (non-edu) admin area — generic
   mirror of app/edu/_lib/firebase-client.js. Same Firebase project, same
   NEXT_PUBLIC_FIREBASE_* env vars (nothing edu-specific about the values
   themselves), kept as its own copy so the general admin doesn't reach
   into /edu's internals — see the plan's architecture note on why these
   are deliberately separate, cleanly-named systems sharing one Firebase
   project. Used only for admin sign-in (email/password + MFA); everything
   else (reading/writing blog posts) goes through our own Route Handlers
   backed by firebase-admin — see firestore.rules for the enforced boundary. */

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const adminFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId
);

function getAdminFirebaseApp() {
  if (!adminFirebaseConfigured) {
    throw new Error(
      "Firebase is not configured. Set the NEXT_PUBLIC_FIREBASE_* environment variables — see .env.example."
    );
  }
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export function getAdminAuthClient() {
  return getAuth(getAdminFirebaseApp());
}
