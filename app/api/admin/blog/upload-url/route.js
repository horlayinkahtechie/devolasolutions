import { buildBlogImageKey, getUploadUrl, r2Configured, r2PublicUrlConfigured } from "../../../../_lib/r2";
import { requireAdminApi } from "../../../../_lib/auth";
import { logAdminAction } from "../../../../_lib/audit-log";

/* Presigned PUT for a blog cover/content image — the admin's browser then
   uploads the file bytes directly to R2 (mirrors
   app/edu/api/admin/videos/upload-url/route.js's shape). Unlike the video
   flow, there's no separate "confirm" step: blog images don't need a
   pending-asset Firestore doc, since the key is only ever referenced once
   the post itself is saved. */
export async function POST(request) {
  if (!r2Configured || !r2PublicUrlConfigured) {
    return Response.json({ success: false, message: "Image storage isn't configured yet." }, { status: 503 });
  }

  const { session, response } = await requireAdminApi();
  if (response) return response;

  const { filename, contentType } = await request.json();
  if (!filename || !contentType) {
    return Response.json({ success: false, message: "filename and contentType are required." }, { status: 400 });
  }
  if (!contentType.startsWith("image/")) {
    return Response.json({ success: false, message: "Only image files are accepted." }, { status: 400 });
  }

  try {
    const key = buildBlogImageKey(filename);
    const uploadUrl = await getUploadUrl(key, contentType);
    await logAdminAction(session, "blogImage.upload-url-issued", key, { filename });
    return Response.json({ success: true, uploadUrl, key });
  } catch (err) {
    console.error("Blog image upload-url failed:", err);
    return Response.json(
      { success: false, message: "Couldn't start the upload. Please try again." },
      { status: 503 }
    );
  }
}
