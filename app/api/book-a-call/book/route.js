import { adminConfigured } from "../../../_lib/firebase-admin.js";
import { meetLinkConfigured } from "../../../_lib/booking-config.js";
import { createBooking } from "../../../_lib/booking-service.js";
import { checkRateLimit, getClientIp } from "../../../_lib/booking-rate-limit.js";

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export async function POST(request) {
  if (!adminConfigured || !meetLinkConfigured) {
    return Response.json({ success: false, message: "Booking isn't set up yet." }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: "Invalid request." }, { status: 400 });
  }
  const { name, email, startMs, timezone } = body || {};

  if (!name?.trim() || !email?.trim() || !isValidEmail(email) || !Number.isFinite(startMs)) {
    return Response.json(
      { success: false, message: "Please provide a valid name, email, and time slot." },
      { status: 400 }
    );
  }

  try {
    // The call is free, so this endpoint is the only barrier against a bot
    // filling up every slot for no cost — keep this rate limit in place.
    const ip = getClientIp(request);
    const { allowed } = await checkRateLimit(`book-ip:${ip}`, {
      max: 5,
      windowMs: 60 * 60 * 1000,
    });
    if (!allowed) {
      return Response.json(
        { success: false, message: "Too many attempts. Please try again later." },
        { status: 429 }
      );
    }

    const result = await createBooking({ name: name.trim(), email: email.trim(), startMs, timezone });
    if (!result.ok) {
      if (result.reason === "not_configured") {
        return Response.json({ success: false, message: "Booking isn't set up yet." }, { status: 503 });
      }
      return Response.json(
        { success: false, message: "That time slot is no longer available. Please pick another." },
        { status: 409 }
      );
    }

    return Response.json({ success: true, startMs: result.startMs });
  } catch (err) {
    console.error("Book-a-call booking failed:", err);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
