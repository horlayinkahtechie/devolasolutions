#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports -- standalone CommonJS
   Node script, run directly via `node scripts/edu-set-admin.js`, not bundled
   by Next.js. */
/**
 * One-off bootstrap script: grants the `role: "admin"` custom claim to a
 * Firebase Auth user, and (optionally) enrolls a phone number as their MFA
 * second factor — server-side, via the Admin SDK. There's no self-service
 * "become an admin" flow in the app itself, on purpose.
 *
 * Usage:
 *   node scripts/edu-set-admin.js owner@example.com
 *   node scripts/edu-set-admin.js owner@example.com +2348169415526
 *
 * Requires FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY
 * to be set — this will read them from .env.local automatically if present,
 * or from the real environment otherwise.
 *
 * Note: enrolling an MFA phone factor requires the Firebase project to be
 * upgraded to Identity Platform (Firebase Authentication -> enable
 * "Multi-factor Authentication" in the console) — plain Firebase Auth
 * doesn't support it. The admin claim still works without this; MFA is an
 * optional second step.
 */

const fs = require("fs");
const path = require("path");

function loadDotEnvLocal() {
  const file = path.join(process.cwd(), ".env.local");
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2];
    }
  }
}

async function main() {
  loadDotEnvLocal();

  const [, , email, phoneNumber] = process.argv;
  if (!email) {
    console.error("Usage: node scripts/edu-set-admin.js <email> [phoneNumber]");
    process.exit(1);
  }

  const { initializeApp, cert } = require("firebase-admin/app");
  const { getAuth } = require("firebase-admin/auth");
  const { getFirestore } = require("firebase-admin/firestore");

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    console.error(
      "Missing FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY. Set them in .env.local first."
    );
    process.exit(1);
  }

  initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
  const auth = getAuth();

  let user = await auth.getUserByEmail(email).catch(() => null);
  let generatedPassword = null;

  if (!user) {
    generatedPassword = require("crypto").randomBytes(18).toString("base64url");
    user = await auth.createUser({ email, password: generatedPassword, emailVerified: true });
    console.log(`✓ Created Firebase Auth user for ${email} (uid: ${user.uid})`);
  }

  await auth.setCustomUserClaims(user.uid, { role: "admin" });
  console.log(`✓ Granted admin claim to ${email} (uid: ${user.uid})`);

  const db = getFirestore();
  await db
    .collection("eduUsers")
    .doc(user.uid)
    .set(
      {
        name: user.displayName || email.split("@")[0],
        email,
        isAdmin: true,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      { merge: true }
    );
  console.log(`✓ Upserted eduUsers/${user.uid} with isAdmin: true`);

  if (phoneNumber) {
    await auth.updateUser(user.uid, {
      multiFactor: {
        enrolledFactors: [
          { phoneNumber, factorId: "phone", displayName: "Primary phone" },
        ],
      },
    });
    console.log(`✓ Enrolled ${phoneNumber} as an MFA second factor for ${email}`);
    console.log("  (requires Identity Platform / Multi-factor Authentication enabled in the Firebase console)");
  } else {
    console.log("  No phone number passed — skipped MFA enrollment. Re-run with a phone number to add it.");
  }

  // Custom claims only take effect on the user's NEXT sign-in / token
  // refresh, not retroactively on an already-issued ID token.
  if (generatedPassword) {
    console.log(`\nGenerated password for ${email}: ${generatedPassword}`);
    console.log("Save this now (password manager) — it's only printed this once. Change it anytime via");
    console.log("Firebase Console -> Authentication -> Users -> (this user) -> Reset password.");
  } else {
    console.log("\nIf this account is already signed in anywhere, sign out and back in for the admin claim to apply.");
  }
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
