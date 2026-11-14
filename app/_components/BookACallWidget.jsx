"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { BsCheckLg } from "react-icons/bs";
import { getBookableDateRange } from "../_lib/booking-slots";
import { SLOT_DURATION_LABEL } from "../_lib/booking-config";
import { trackEvent } from "../_lib/analytics";

const dateChipFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  weekday: "short",
  day: "numeric",
  month: "short",
});

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const summaryFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function dateChipLabel(dateStr) {
  // dateStr is "YYYY-MM-DD" — midday UTC is always the same WAT calendar
  // date, so this is a safe, DST-irrelevant way to format it for display.
  const [y, m, d] = dateStr.split("-").map(Number);
  return dateChipFormatter.format(new Date(Date.UTC(y, m - 1, d, 12)));
}

/* Formats `date` in an arbitrary IANA timezone, split into the main
   date/time string and a short zone abbreviation picked up from Intl
   itself (DST-aware — e.g. correctly "GMT" or "BST" depending on the
   date) rather than a hand-maintained map, since the visitor's zone is
   only known at runtime. Returns null for an invalid/unrecognized zone. */
function formatInZone(date, timeZone, options) {
  try {
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone, timeZoneName: "short", ...options }).formatToParts(
      date
    );
    const main = parts
      .filter((p) => p.type !== "timeZoneName")
      .map((p) => p.value)
      .join("")
      .trim();
    const zone = parts.find((p) => p.type === "timeZoneName")?.value || "";
    return { main, zone };
  } catch {
    return null;
  }
}

const TIME_OPTS = { hour: "numeric", minute: "2-digit", hour12: true };
const FULL_OPTS = { weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "2-digit", hour12: true };

const inputBase =
  "w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-300 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#FF5C00]/20 focus:border-[#FF5C00]";
const inputError = "border-red-300 focus:ring-red-100 focus:border-red-400";
const inputNormal = "border-slate-200 hover:border-slate-300";

const emptyForm = { name: "", email: "" };

export default function BookACallWidget() {
  const dates = useMemo(() => getBookableDateRange(), []);
  const [selectedDate, setSelectedDate] = useState(dates[0] || "");
  const [slots, setSlots] = useState([]);
  const [slotsLoading, setSlotsLoading] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [booked, setBooked] = useState(null); // { startMs, email } once confirmed
  const [visitorTz, setVisitorTz] = useState(null);

  const latestDateRef = useRef(null);

  // Intl.DateTimeFormat().resolvedOptions().timeZone reflects the browser's
  // own timezone, which isn't available the same way during server/first-
  // client render — applying it as a state update after mount (rather than
  // a lazy useState initializer) sidesteps that entirely, same reasoning as
  // the UTM-sourced source field in app/contact/contact.jsx.
  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisitorTz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch {
      // Stays null — the widget just shows WAT only, which is still correct.
    }
  }, []);

  useEffect(() => {
    if (!selectedDate) return;
    loadSlots(selectedDate);
  }, [selectedDate]);

  // An async named function (not inlined in the effect body) so its
  // setState calls aren't treated as synchronous within the effect — same
  // shape as app/edu/login/complete/page.jsx's finishSignIn. latestDateRef
  // replaces a returned cleanup closure (an async function can't return one
  // synchronously) to ignore a stale response if the date changes again
  // before this fetch resolves.
  async function loadSlots(dateStr) {
    latestDateRef.current = dateStr;
    setSlotsLoading(true);
    setSelectedSlot(null);
    try {
      const res = await fetch(`/api/book-a-call/slots?date=${dateStr}`);
      const data = await res.json();
      if (latestDateRef.current !== dateStr) return;
      setSlots(data.success ? data.slots : []);
    } catch {
      if (latestDateRef.current === dateStr) setSlots([]);
    } finally {
      if (latestDateRef.current === dateStr) setSlotsLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSlot) return;
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/book-a-call/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          startMs: selectedSlot,
          timezone: visitorTz,
        }),
      });
      const data = await res.json();
      if (!data.success) {
        if (res.status === 409) {
          setSubmitError("That time slot was just taken — please pick another.");
          loadSlots(selectedDate);
        } else {
          setSubmitError(data.message || "Something went wrong. Please try again.");
        }
        return;
      }
      trackEvent("book_a_call", { method: "free" });
      setBooked({ startMs: selectedSlot, email: form.email.trim() });
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const showLocal = Boolean(visitorTz && visitorTz !== "Africa/Lagos");

  if (booked) {
    const local = showLocal ? formatInZone(new Date(booked.startMs), visitorTz, FULL_OPTS) : null;
    return (
      <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-3xl text-green-600 mx-auto mb-6">
          <BsCheckLg />
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-2">You&apos;re booked!</h3>
        <p className="text-sm text-slate-600 mb-1">Your call is confirmed for</p>
        <p className="text-base font-bold text-slate-900 mb-1">
          {summaryFormatter.format(new Date(booked.startMs))} WAT
        </p>
        {local && (
          <p className="text-sm text-slate-500 mb-6">
            {local.main} {local.zone} your time
          </p>
        )}
        <p className={`text-sm text-slate-500 ${local ? "" : "mt-5"}`}>
          Check {booked.email} for the Google Meet link — we&apos;ll also
          remind you 3 days, 1 day, and a few hours before.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
      {/* Step 1: date */}
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
        1. Pick a Date
      </p>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-1 px-1">
        {dates.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setSelectedDate(d)}
            className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
              selectedDate === d
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
            }`}
          >
            {dateChipLabel(d)}
          </button>
        ))}
      </div>

      {/* Step 2: time */}
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
        2. Pick a Time (WAT{showLocal ? " · your time shown below" : ""})
      </p>
      {slotsLoading ? (
        <p className="text-sm text-slate-400 mb-6">Loading available times…</p>
      ) : slots.length === 0 ? (
        <p className="text-sm text-slate-400 mb-6">No times left on this date — try another.</p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6">
          {slots.map(({ startMs, booked: isBooked }) => {
            const local = showLocal ? formatInZone(new Date(startMs), visitorTz, TIME_OPTS) : null;
            return (
              <button
                key={startMs}
                type="button"
                disabled={isBooked}
                onClick={() => setSelectedSlot(startMs)}
                title={isBooked ? "Already booked" : undefined}
                className={`px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  isBooked
                    ? "bg-slate-50 text-slate-300 line-through cursor-not-allowed"
                    : selectedSlot === startMs
                      ? "bg-[#FF5C00] text-white"
                      : "bg-slate-50 border border-slate-100 text-slate-700 hover:border-slate-300"
                }`}
              >
                <span className="block">{timeFormatter.format(new Date(startMs))}</span>
                {local && (
                  <span
                    className={`block text-[10px] font-normal mt-0.5 ${
                      isBooked ? "text-slate-300" : selectedSlot === startMs ? "text-white/80" : "text-slate-400"
                    }`}
                  >
                    {local.main} {local.zone}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Step 3: details + submit */}
      {selectedSlot && (
        <form onSubmit={handleSubmit} noValidate className="pt-6 border-t border-slate-100 space-y-4">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            3. Your Details
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
            </div>
          </div>

          <div className="text-sm text-slate-600 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
            <p>
              You&apos;re booking: <span className="font-bold text-slate-900">{summaryFormatter.format(new Date(selectedSlot))} WAT</span> · {SLOT_DURATION_LABEL}
            </p>
            {showLocal &&
              (() => {
                const local = formatInZone(new Date(selectedSlot), visitorTz, FULL_OPTS);
                return local ? (
                  <p className="text-xs text-slate-500 mt-1">
                    That&apos;s <span className="font-bold text-slate-700">{local.main} {local.zone}</span> your time.
                  </p>
                ) : null;
              })()}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Booking…
              </>
            ) : (
              <>Confirm Booking — Free →</>
            )}
          </button>

          {submitError && (
            <p className="text-center text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl py-3 px-4">
              {submitError}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
