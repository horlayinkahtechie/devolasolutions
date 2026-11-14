import { Resend } from "resend";
import { SLOT_DURATION_LABEL } from "./booking-config.js";

const FROM = "Devola Solutions <bookings@devolasolutions.com>";

/* Renders the join-call button, or a plain fallback line if meetLink is
   somehow still falsy (e.g. an older booking created before GOOGLE_MEET_LINK
   was validated) — never bakes a literal "null" href into the email again. */
function meetLinkBlock(meetLink) {
  if (!meetLink) {
    return `<p style="margin:28px 0;color:#666">We'll follow up separately with your call link — if you don't hear from us soon, just reply to this email.</p>`;
  }
  return `
    <p style="margin:28px 0">
      <a href="${meetLink}" style="background:#0f172a;color:#fff;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold;display:inline-block">
        Join the call on Google Meet
      </a>
    </p>
  `;
}

/* Modeled on app/edu/_lib/send-auth-email.js: exported functions, inline
   HTML template literals, throws on error (caller decides how to shape the
   response). Deliberately no "server-only" import — this file is also
   imported directly by the standalone Netlify scheduled function that
   sends reminders, which runs outside Next's bundler. */

function formatCallTime(startMs) {
  const formatted = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(startMs));
  // Africa/Lagos has no daylight saving time, so this is always exactly WAT.
  return `${formatted} WAT`;
}

/* Same full date+time format, but in the visitor's own IANA timezone
   (captured client-side at booking time) with its abbreviation picked up
   from Intl itself — there's no way to hand-maintain abbreviations for
   every possible zone the way formatCallTime hardcodes "WAT" for the one
   zone this business runs in. Returns null if `timezone` is missing or
   isn't a timezone Intl recognizes, so a bad/garbled client-submitted
   value degrades to "just show WAT" instead of throwing. */
function formatLocalTime(startMs, timezone) {
  if (!timezone) return null;
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZoneName: "short",
    }).format(new Date(startMs));
  } catch {
    return null;
  }
}

/* The WAT time, plus the visitor's local time underneath when it's known
   and actually different from WAT (same-offset zones would otherwise show
   the identical line twice). */
function whenBlock(startMs, timezone) {
  const watText = formatCallTime(startMs);
  const localText = formatLocalTime(startMs, timezone);
  const localLine =
    localText && localText !== watText
      ? `<p style="font-size:14px;color:#666;margin:4px 0 0">(${localText} your time)</p>`
      : "";
  return `<p style="font-size:18px;font-weight:bold;margin:20px 0 0">${watText}</p>${localLine}`;
}

export async function sendBookingConfirmationEmail({ to, name, startMs, meetLink, timezone }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set — cannot send the booking confirmation email.");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const whenText = formatCallTime(startMs);

  const html = `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
      <h2 style="color:#FF5C00">You're booked!</h2>
      <p>Hi ${name || "there"},</p>
      <p>Your ${SLOT_DURATION_LABEL} call with Devola Solutions is confirmed for:</p>
      ${whenBlock(startMs, timezone)}
      ${meetLinkBlock(meetLink)}
      <p style="font-size:13px;color:#666">Save this email — you'll need that link at the time of your call. We'll also send you reminders 3 days, 1 day, and a few hours before.</p>
      <hr style="margin-top:32px;border:none;border-top:1px solid #eee"/>
      <p style="font-size:12px;color:#999">If anything changes on your end, just reply to this email.</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: FROM,
    to,
    subject: `Confirmed: your call with Devola Solutions — ${whenText}`,
    html,
  });
  if (error) throw error;
}

export async function sendBookingReminderEmail({ to, name, startMs, meetLink, label, timezone }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set — cannot send the booking reminder email.");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
      <h2 style="color:#FF5C00">Your call is coming up ${label}</h2>
      <p>Hi ${name || "there"},</p>
      <p>Just a reminder — your ${SLOT_DURATION_LABEL} call with Devola Solutions is scheduled for:</p>
      ${whenBlock(startMs, timezone)}
      ${meetLinkBlock(meetLink)}
      <hr style="margin-top:32px;border:none;border-top:1px solid #eee"/>
      <p style="font-size:12px;color:#999">If anything changes on your end, just reply to this email.</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: FROM,
    to,
    subject: `Reminder: your call with Devola Solutions is ${label}`,
    html,
  });
  if (error) throw error;
}
