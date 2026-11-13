import { Resend } from "resend";

const FROM = "Devola Solutions <bookings@devolasolutions.com>";

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

export async function sendBookingConfirmationEmail({ to, name, startMs, meetLink }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set — cannot send the booking confirmation email.");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const whenText = formatCallTime(startMs);

  const html = `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
      <h2 style="color:#FF5C00">You're booked!</h2>
      <p>Hi ${name || "there"},</p>
      <p>Your 30-minute call with Devola Solutions is confirmed for:</p>
      <p style="font-size:18px;font-weight:bold;margin:20px 0">${whenText}</p>
      <p style="margin:28px 0">
        <a href="${meetLink}" style="background:#0f172a;color:#fff;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold;display:inline-block">
          Join the call on Google Meet
        </a>
      </p>
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

export async function sendBookingReminderEmail({ to, name, startMs, meetLink, label }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set — cannot send the booking reminder email.");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const whenText = formatCallTime(startMs);

  const html = `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
      <h2 style="color:#FF5C00">Your call is coming up ${label}</h2>
      <p>Hi ${name || "there"},</p>
      <p>Just a reminder — your 30-minute call with Devola Solutions is scheduled for:</p>
      <p style="font-size:18px;font-weight:bold;margin:20px 0">${whenText}</p>
      <p style="margin:28px 0">
        <a href="${meetLink}" style="background:#0f172a;color:#fff;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold;display:inline-block">
          Join the call on Google Meet
        </a>
      </p>
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
