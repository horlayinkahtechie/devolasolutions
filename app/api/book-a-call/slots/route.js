import { getAdminDb, adminConfigured } from "../../../_lib/firebase-admin.js";
import { COLLECTIONS } from "../../../_data/booking-schema.js";
import { getSlotsForDate, isBookingActive } from "../../../_lib/booking-slots.js";

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export async function GET(request) {
  if (!adminConfigured) {
    return Response.json({ success: false, message: "Booking isn't set up yet." }, { status: 503 });
  }

  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  if (!date || !DATE_RE.test(date)) {
    return Response.json({ success: false, message: "Invalid date." }, { status: 400 });
  }

  try {
    const candidates = getSlotsForDate(date);
    if (candidates.length === 0) {
      return Response.json({ success: true, slots: [] });
    }

    const db = getAdminDb();
    const refs = candidates.map((c) => db.collection(COLLECTIONS.CALL_BOOKINGS).doc(String(c.startMs)));
    const snaps = await db.getAll(...refs);

    const freeSlots = candidates.filter((c, i) => {
      const snap = snaps[i];
      return !(snap.exists && isBookingActive(snap.data()));
    });

    return Response.json({ success: true, slots: freeSlots.map((s) => s.startMs) });
  } catch (err) {
    console.error("Book-a-call slots lookup failed:", err);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
