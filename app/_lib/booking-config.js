/* Adjustable business policy for the "Book a Call" feature — every value
   here is a config choice, not something deeply wired into the booking
   logic, so changing the hours later is a one-line edit.

   No framework imports here on purpose — this file is shared by the Next.js
   app AND the standalone Netlify scheduled function (see
   netlify/functions/send-call-reminders.mjs), which runs outside Next's own
   bundler. */

export const SLOT_MINUTES = 30;

// Nigeria (WAT) has no daylight saving time — it's always a fixed UTC+1
// offset. That's what makes plain epoch-ms arithmetic safe everywhere in
// this feature without pulling in a timezone library.
export const WAT_OFFSET_MS = 60 * 60 * 1000;

// Mon–Fri, 10am–4pm WAT, in local (WAT) hour numbers.
export const BUSINESS_DAYS = [1, 2, 3, 4, 5];
export const BUSINESS_START_HOUR = 10;
export const BUSINESS_END_HOUR = 16;

// Can't book a slot starting less than this soon (gives the business time
// to prepare, and leaves room for at least the "3 hours before" reminder to
// still make sense), or further out than this many days.
export const MIN_NOTICE_HOURS = 4;
export const MAX_ADVANCE_DAYS = 21;

// Reminder offsets before the call start time. `key` doubles as the field
// name under a booking's `remindersSent` map.
export const REMINDER_OFFSETS = [
  { key: "h72", ms: 72 * 60 * 60 * 1000, label: "in 3 days" },
  { key: "h24", ms: 24 * 60 * 60 * 1000, label: "tomorrow" },
  { key: "h3", ms: 3 * 60 * 60 * 1000, label: "in 3 hours" },
];
