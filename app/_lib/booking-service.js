import { getAdminDb } from "./firebase-admin.js";
import { COLLECTIONS } from "../_data/booking-schema.js";
import { REMINDER_OFFSETS, GOOGLE_MEET_LINK, meetLinkConfigured } from "./booking-config.js";
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

/* The client submits this straight from Intl.DateTimeFormat().resolvedOptions()
   .timeZone — normally always valid, but it crosses a trust boundary, so a
   garbled value degrades to "store nothing" instead of throwing. */
function normalizeTimezone(timezone) {
  if (typeof timezone !== "string" || !timezone) return null;
  try {
    new Intl.DateTimeFormat("en-GB", { timeZone: timezone });
    return timezone;
  } catch {
    return null;
  }
}

/**
 * Validates the slot is genuinely bookable, atomically claims it, and sends
 * the confirmation email. @returns {Promise<{ok: true, startMs: number, meetLink: string|null} | {ok: false, reason: string}>}
 */
export async function createBooking({ name, email, startMs, timezone }) {
  // A confirmed call with no way to join it isn't a successful booking —
  // refuse to create one until GOOGLE_MEET_LINK is a real Meet link.
  if (!meetLinkConfigured) {
    return { ok: false, reason: "not_configured" };
  }

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
  const meetLink = GOOGLE_MEET_LINK;
  const timezoneValue = normalizeTimezone(timezone);

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
        timezone: timezoneValue,
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
    await sendBookingConfirmationEmail({ to: email, name, startMs, meetLink, timezone: timezoneValue });
  } catch (err) {
    // The booking itself is still correctly created — don't fail the whole
    // request over an email-sending hiccup.
    console.error("Booking confirmation email failed:", err);
  }

  return { ok: true, startMs, meetLink };
}
