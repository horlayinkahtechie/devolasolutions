/* Pure slot-generation and reminder-timing math for "Book a Call" — no
   framework imports, no I/O. Shared by the Next.js API routes AND the
   standalone Netlify scheduled function, which runs outside Next's own
   bundler, so this file (and anything it imports) must stay importable from
   plain Node with zero Next-specific dependencies.

   Nigeria (WAT) has no daylight saving time — always a fixed UTC+1 offset —
   which is what makes plain epoch-ms arithmetic safe here without a
   timezone library. */

import {
  SLOT_MINUTES,
  WAT_OFFSET_MS,
  BUSINESS_DAYS,
  BUSINESS_START_HOUR,
  BUSINESS_END_HOUR,
  MIN_NOTICE_HOURS,
  MAX_ADVANCE_DAYS,
} from "./booking-config.js";

const DAY_MS = 24 * 60 * 60 * 1000;

function pad(n) {
  return String(n).padStart(2, "0");
}

/** "YYYY-MM-DD" (a WAT calendar date) -> epoch ms of midnight WAT that day. */
export function watDateToUtcMs(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return Date.UTC(y, m - 1, d) - WAT_OFFSET_MS;
}

/** epoch ms -> "YYYY-MM-DD", the WAT calendar date it falls on. */
export function watMsToDateString(ms) {
  const watShifted = new Date(ms + WAT_OFFSET_MS);
  return `${watShifted.getUTCFullYear()}-${pad(watShifted.getUTCMonth() + 1)}-${pad(watShifted.getUTCDate())}`;
}

/** 0 (Sun) - 6 (Sat) weekday of a "YYYY-MM-DD" calendar date. */
function weekdayOf(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

/**
 * Every bookable 30-min slot on a given WAT calendar date, filtered by the
 * minimum-notice and max-advance window relative to `nowMs`.
 * @returns {{startMs: number, endMs: number}[]}
 */
export function getSlotsForDate(dateStr, nowMs = Date.now()) {
  if (!BUSINESS_DAYS.includes(weekdayOf(dateStr))) return [];

  const dayStartMs = watDateToUtcMs(dateStr);
  const earliest = nowMs + MIN_NOTICE_HOURS * 60 * 60 * 1000;
  const latest = nowMs + MAX_ADVANCE_DAYS * DAY_MS;

  const slots = [];
  for (
    let minutes = BUSINESS_START_HOUR * 60;
    minutes + SLOT_MINUTES <= BUSINESS_END_HOUR * 60;
    minutes += SLOT_MINUTES
  ) {
    const startMs = dayStartMs + minutes * 60 * 1000;
    const endMs = startMs + SLOT_MINUTES * 60 * 1000;
    if (startMs >= earliest && startMs <= latest) slots.push({ startMs, endMs });
  }
  return slots;
}

/** WAT calendar dates, from today through MAX_ADVANCE_DAYS out, that are
 *  business days (may still turn out to have zero free slots once
 *  booked-out slots are subtracted — callers fetch per-date to find out). */
export function getBookableDateRange(nowMs = Date.now()) {
  const startOfTodayWatMs = watDateToUtcMs(watMsToDateString(nowMs));
  const dates = [];
  for (let i = 0; i <= MAX_ADVANCE_DAYS; i++) {
    const dateStr = watMsToDateString(startOfTodayWatMs + i * DAY_MS);
    if (BUSINESS_DAYS.includes(weekdayOf(dateStr))) dates.push(dateStr);
  }
  return dates;
}

/** Whether a stored booking still "holds" its slot. The call is free, so
 *  there's no payment step to wait for — a booking is confirmed the instant
 *  it's created, nothing is ever "pending". Used identically by the
 *  slots-listing route and the claim transaction so availability never
 *  drifts between the two call sites. */
export function isBookingActive(bookingData) {
  return bookingData?.status === "confirmed";
}
