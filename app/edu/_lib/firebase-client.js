"use client";

/* Firebase CLIENT SDK — safe to import from Client Components only.
   Used for: completing the email-link ("magic link") sign-in, and the
   admin email/password + MFA challenge. Everything else (reading course
   data, enrollments, payments, progress) goes through our own Route
   Handlers backed by firebase-admin, never direct client Firestore access
   to anything sensitive — see firestore.rules for the enforced boundary. */

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

export const eduFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId
);

/* Lazily initialised so importing this file never throws when the edu
   platform's Firebase project hasn't been configured yet — callers should
   check eduFirebaseConfigured first and show a clear "not configured yet"
   state instead of a crash. */
export function getEduFirebaseApp() {
  if (!eduFirebaseConfigured) {
    throw new Error(
      "Firebase is not configured for the education platform. Set the NEXT_PUBLIC_FIREBASE_* environment variables — see .env.example."
    );
  }
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export function getEduAuth() {
  return getAuth(getEduFirebaseApp());
}
