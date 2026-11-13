import { test } from "node:test";
import assert from "node:assert/strict";
import {
  watDateToUtcMs,
  watMsToDateString,
  getSlotsForDate,
  getBookableDateRange,
  isBookingActive,
} from "./booking-slots.js";
import { SLOT_MINUTES } from "./booking-config.js";

// A fixed Wednesday in WAT, used as "now" across several tests.
// 2026-11-11 is a Wednesday.
const WED_10AM_WAT_MS = Date.UTC(2026, 10, 11, 9, 0, 0); // 10:00 WAT = 09:00 UTC

test("watDateToUtcMs / watMsToDateString round-trip", () => {
  const ms = watDateToUtcMs("2026-11-11");
  // Midnight WAT = 23:00 UTC the previous day.
  assert.equal(ms, Date.UTC(2026, 10, 10, 23, 0, 0));
  assert.equal(watMsToDateString(ms), "2026-11-11");
  assert.equal(watMsToDateString(ms + 60 * 60 * 1000), "2026-11-11"); // 1am WAT, same WAT date
});

test("getSlotsForDate excludes weekends", () => {
  // 2026-11-14 is a Saturday.
  assert.deepEqual(getSlotsForDate("2026-11-14", WED_10AM_WAT_MS), []);
  // 2026-11-15 is a Sunday.
  assert.deepEqual(getSlotsForDate("2026-11-15", WED_10AM_WAT_MS), []);
});

test("getSlotsForDate generates 30-min slots across business hours", () => {
  // Far enough ahead that the notice window doesn't trim anything.
  const slots = getSlotsForDate("2026-11-20", WED_10AM_WAT_MS); // a Friday
  // 10am-4pm WAT, 30-min slots = 12 slots.
  assert.equal(slots.length, 12);
  assert.equal(slots[0].endMs - slots[0].startMs, SLOT_MINUTES * 60 * 1000);
  // First slot starts at 10:00 WAT = 09:00 UTC on 2026-11-20.
  assert.equal(slots[0].startMs, Date.UTC(2026, 10, 20, 9, 0, 0));
  // Last slot starts at 3:30pm WAT (so it ends exactly at 4pm WAT).
  assert.equal(slots.at(-1).startMs, Date.UTC(2026, 10, 20, 14, 30, 0));
});

test("getSlotsForDate respects the minimum-notice window", () => {
  // Same WAT date as "now" (Wednesday) — slots before now + 4h should be cut.
  const todaySlots = getSlotsForDate("2026-11-11", WED_10AM_WAT_MS);
  const earliestAllowed = WED_10AM_WAT_MS + 4 * 60 * 60 * 1000;
  assert.ok(todaySlots.every((s) => s.startMs >= earliestAllowed));
  // The 2:30pm WAT slot (13:30 UTC) is after the 4h cutoff (13:00 UTC) and should remain.
  assert.ok(todaySlots.some((s) => s.startMs === Date.UTC(2026, 10, 11, 13, 30, 0)));
  // The 10:00am WAT slot (09:00 UTC) is before "now" entirely and must be gone.
  assert.ok(!todaySlots.some((s) => s.startMs === Date.UTC(2026, 10, 11, 9, 0, 0)));
});

test("getSlotsForDate respects the max-advance window", () => {
  const farDate = watMsToDateString(WED_10AM_WAT_MS + 30 * 24 * 60 * 60 * 1000); // 30 days out
  assert.deepEqual(getSlotsForDate(farDate, WED_10AM_WAT_MS), []);
});

test("getBookableDateRange only returns business days, starting today", () => {
  const dates = getBookableDateRange(WED_10AM_WAT_MS);
  assert.equal(dates[0], "2026-11-11"); // today, a Wednesday
  assert.ok(!dates.includes("2026-11-14")); // Saturday excluded
  assert.ok(!dates.includes("2026-11-15")); // Sunday excluded
  assert.ok(dates.includes("2026-11-20")); // a Friday within the window
});

test("isBookingActive: confirmed bookings are active", () => {
  assert.equal(isBookingActive({ status: "confirmed" }), true);
});

test("isBookingActive: cancelled or missing bookings are never active", () => {
  assert.equal(isBookingActive({ status: "cancelled" }), false);
  assert.equal(isBookingActive(null), false);
  assert.equal(isBookingActive(undefined), false);
});
