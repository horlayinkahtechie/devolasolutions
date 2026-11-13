/* FIRESTORE SCHEMA for the "Book a Call" feature — mirrors
   app/edu/_data/schema.js's role: one file to read to understand the data
   model. No framework imports (shared with the Netlify scheduled function). */

export const COLLECTIONS = {
  CALL_BOOKINGS: "callBookings",
  CALL_BOOKING_RATE_LIMITS: "callBookingRateLimits",
};

/**
 * @typedef {"confirmed"|"cancelled"} CallBookingStatus - the call is free,
 *   so there's no payment step — a booking is "confirmed" the instant it's
 *   created. "cancelled" is reserved for a future cancel/reschedule feature
 *   (not built yet).
 *
 * @typedef {Object} ReminderState
 * @property {boolean} sent
 * @property {number|null} sentAt - ms epoch.
 *
 * @typedef {Object} CallBooking
 * @property {number} startMs - ms epoch. Also the Firestore doc id (as a
 *   string) — this is what lets claiming a slot be a plain Firestore
 *   transaction instead of a separate locking scheme.
 * @property {number} endMs - startMs + SLOT_MINUTES.
 * @property {CallBookingStatus} status
 * @property {string} name
 * @property {string} email
 * @property {string|null} meetLink - GOOGLE_MEET_LINK snapshotted at
 *   booking time; the reminder function reads this field, never the env
 *   var directly.
 * @property {{h72: ReminderState, h24: ReminderState, h3: ReminderState}} remindersSent
 * @property {number} createdAt - ms epoch.
 * @property {number} updatedAt - ms epoch.
 */

export {};
