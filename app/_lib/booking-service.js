import { getAdminDb } from "./firebase-admin.js";
import { COLLECTIONS } from "../_data/booking-schema.js";
import { REMINDER_OFFSETS } from "./booking-config.js";
import { getSlotsForDate, watMsToDateString, isBookingActive } from "./booking-slots.js";
import { sendBookingConfirmationEmail } from "./send-booking-email.js";

/* The call is free, so there's no payment step to wait for — claiming a
   slot and confirming the booking collapse into one atomic transaction
   (unlike a paid flow, where "claim" and "confirm" have to stay separate
   steps bridged by a webhook). */

class SlotTakenError extends Error {}

function emptyRemindersSent() {
  return Object.fromEntries(REMINDER_OFFSETS.map((o) => [o.key, { sent: false, sentAt: null }]));
}

/**
 * Validates the slot is genuinely bookable, atomically claims it, and sends
 * the confirmation email. @returns {Promise<{ok: true, startMs: number, meetLink: string|null} | {ok: false, reason: string}>}
 */
export async function createBooking({ name, email, startMs }) {
  // Never trust the client's startMs blindly — re-derive the WAT date and
  // re-run the same slot generator to confirm it's genuinely one of today's
  // valid, bookable slots.
  const dateStr = watMsToDateString(startMs);
  const validSlot = getSlotsForDate(dateStr).find((s) => s.startMs === startMs);
  if (!validSlot) {
    return { ok: false, reason: "invalid_slot" };
  }

  const db = getAdminDb();
  const ref = db.collection(COLLECTIONS.CALL_BOOKINGS).doc(String(startMs));
  const now = Date.now();
  const meetLink = process.env.GOOGLE_MEET_LINK || null;

  try {
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(ref);
      if (snap.exists && isBookingActive(snap.data())) {
        throw new SlotTakenError();
      }
      tx.set(ref, {
        startMs,
        endMs: validSlot.endMs,
        status: "confirmed",
        name,
        email,
        meetLink,
        remindersSent: emptyRemindersSent(),
        createdAt: now,
        updatedAt: now,
      });
    });
  } catch (err) {
    if (err instanceof SlotTakenError) {
      return { ok: false, reason: "slot_taken" };
    }
    throw err;
  }

  try {
    await sendBookingConfirmationEmail({ to: email, name, startMs, meetLink });
  } catch (err) {
    // The booking itself is still correctly created — don't fail the whole
    // request over an email-sending hiccup.
    console.error("Booking confirmation email failed:", err);
  }

  return { ok: true, startMs, meetLink };
}
