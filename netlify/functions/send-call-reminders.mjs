// Netlify Scheduled Function — runs every 15 minutes, outside Next.js's own
// bundler. `.mjs` specifically: the repo's root package.json has no
// "type": "module", so a plain `.js` file here would default to CommonJS.
//
// Imports the shared booking lib files directly via relative paths — this
// is the entire reason none of those files may import "server-only" (see
// app/_lib/firebase-admin.js for the verified explanation).
//
// SETUP NOTE: Netlify's scheduled-function syntax has changed over Netlify's
// product history and nothing in this repo exercised it before this file —
// verify this `config.schedule` export is still the current mechanism
// against Netlify's docs when first deploying this.

import { getAdminDb, adminConfigured } from "../../app/_lib/firebase-admin.js";
import { COLLECTIONS } from "../../app/_data/booking-schema.js";
import { REMINDER_OFFSETS } from "../../app/_lib/booking-config.js";
import { sendBookingReminderEmail } from "../../app/_lib/send-booking-email.js";

const MAX_OFFSET_MS = Math.max(...REMINDER_OFFSETS.map((o) => o.ms));
const QUERY_BUFFER_MS = 60 * 60 * 1000; // 1h buffer past the largest offset

const handler = async () => {
  if (!adminConfigured) {
    console.error("send-call-reminders: Firebase Admin not configured, skipping run.");
    return new Response("skipped", { status: 200 });
  }

  const now = Date.now();
  const db = getAdminDb();

  let snap;
  try {
    snap = await db
      .collection(COLLECTIONS.CALL_BOOKINGS)
      .where("status", "==", "confirmed")
      .where("startMs", ">=", now)
      .where("startMs", "<=", now + MAX_OFFSET_MS + QUERY_BUFFER_MS)
      .get();
  } catch (err) {
    console.error("send-call-reminders: query failed:", err);
    return new Response("error", { status: 500 });
  }

  let sentCount = 0;
  for (const doc of snap.docs) {
    const booking = doc.data();
    for (const offset of REMINDER_OFFSETS) {
      if (booking.remindersSent?.[offset.key]?.sent) continue;

      const windowStart = booking.startMs - offset.ms;
      if (now < windowStart || now >= booking.startMs) continue;

      try {
        // Send before marking — a rare duplicate reminder beats a silent miss.
        await sendBookingReminderEmail({
          to: booking.email,
          name: booking.name,
          startMs: booking.startMs,
          meetLink: booking.meetLink,
          label: offset.label,
          timezone: booking.timezone,
        });
        await doc.ref.update({
          [`remindersSent.${offset.key}`]: { sent: true, sentAt: Date.now() },
          updatedAt: Date.now(),
        });
        sentCount += 1;
      } catch (err) {
        console.error(`send-call-reminders: failed to send "${offset.key}" for booking ${doc.id}:`, err);
      }
    }
  }

  console.log(`send-call-reminders: checked ${snap.docs.length} booking(s), sent ${sentCount} reminder(s).`);
  return new Response("ok", { status: 200 });
};

export default handler;
export const config = { schedule: "*/15 * * * *" };
