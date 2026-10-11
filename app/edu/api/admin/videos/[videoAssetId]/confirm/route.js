import { requireAdminApi } from "../../../../../_lib/auth";
import { getEduAdminDb } from "../../../../../_lib/firebase-admin";
import { COLLECTIONS } from "../../../../../_data/schema";
import { logAdminAction } from "../../../../../_lib/audit-log";

/* Step 2 of admin video upload: the browser's direct PUT to R2 resolved
   successfully, so flip the video asset from "pending" to "ready". A
   lesson should only ever be linked to a "ready" video asset — this is
   what stops a half-finished/abandoned upload from being playable. */
export async function POST(request, { params }) {
  const { session, response } = await requireAdminApi();
  if (response) return response;

  const { videoAssetId } = await params;

  try {
    const db = getEduAdminDb();
    const ref = db.collection(COLLECTIONS.VIDEO_ASSETS).doc(videoAssetId);

    const snap = await ref.get();
    if (!snap.exists) {
      return Response.json({ success: false, message: "Video asset not found." }, { status: 404 });
    }

    await ref.set({ status: "ready" }, { merge: true });
    await logAdminAction(session, "video.confirmed", videoAssetId);

    return Response.json({ success: true });
  } catch (err) {
    console.error("video confirm failed:", err);
    return Response.json(
      { success: false, message: "Couldn't confirm the upload. Please try again." },
      { status: 503 }
    );
  }
}
