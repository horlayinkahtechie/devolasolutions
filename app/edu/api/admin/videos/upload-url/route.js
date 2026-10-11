import { getUploadUrl, buildVideoKey, r2Configured } from "../../../../_lib/r2";
import { requireAdminApi } from "../../../../_lib/auth";
import { getEduAdminDb } from "../../../../_lib/firebase-admin";
import { COLLECTIONS } from "../../../../_data/schema";
import { logAdminAction } from "../../../../_lib/audit-log";

/* Step 1 of admin video upload: issue a presigned PUT URL. The admin's
   browser then uploads the file bytes directly to R2 (see confirm/route.js
   for step 2) — our server never touches the video file itself. */
export async function POST(request) {
  if (!r2Configured) {
    return Response.json({ success: false, message: "Video storage isn't configured yet." }, { status: 503 });
  }

  const { session, response } = await requireAdminApi();
  if (response) return response;

  const { filename, contentType, sizeBytes } = await request.json();
  if (!filename || !contentType) {
    return Response.json({ success: false, message: "filename and contentType are required." }, { status: 400 });
  }
  if (!contentType.startsWith("video/")) {
    return Response.json({ success: false, message: "Only video files are accepted." }, { status: 400 });
  }

  try {
    const key = buildVideoKey(filename);
    const uploadUrl = await getUploadUrl(key, contentType);

    const db = getEduAdminDb();
    const docRef = await db.collection(COLLECTIONS.VIDEO_ASSETS).add({
      provider: "r2",
      key,
      originalFilename: filename,
      sizeBytes: sizeBytes || null,
      status: "pending",
      createdAt: Date.now(),
    });

    await logAdminAction(session, "video.upload-url-issued", docRef.id, { filename });

    return Response.json({ success: true, uploadUrl, videoAssetId: docRef.id, key });
  } catch (err) {
    console.error("upload-url failed:", err);
    return Response.json(
      { success: false, message: "Couldn't start the upload. Please try again." },
      { status: 503 }
    );
  }
}
