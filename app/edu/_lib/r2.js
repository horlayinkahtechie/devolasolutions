import "server-only";
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

/* Cloudflare R2 — S3-compatible object storage for course videos. Chosen
   over Cloudflare Stream specifically for zero egress fees (see the
   conversation that led here); chosen over Firebase Storage for the same
   reason (GCS egress isn't free, R2's is). No transcoding, no adaptive
   bitrate — a single file per lesson, served via short-lived presigned
   URLs. Admins should upload reasonably web-encoded H.264/AAC MP4s. */

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const bucket = process.env.R2_BUCKET_NAME;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const endpoint = process.env.R2_ENDPOINT;

export const r2Configured = Boolean(accountId && bucket && accessKeyId && secretAccessKey && endpoint);

let client;

function getClient() {
  if (!r2Configured) {
    throw new Error(
      "R2 is not configured. Set CLOUDFLARE_ACCOUNT_ID, R2_BUCKET_NAME, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY and R2_ENDPOINT — see .env.example."
    );
  }
  if (!client) {
    client = new S3Client({
      region: "auto",
      endpoint,
      credentials: { accessKeyId, secretAccessKey },
    });
  }
  return client;
}

/** A collision-proof object key for a freshly-uploaded lesson video. */
export function buildVideoKey(originalFilename) {
  const ext = (originalFilename.split(".").pop() || "mp4").toLowerCase().replace(/[^a-z0-9]/g, "");
  const id = crypto.randomUUID();
  return `lesson-videos/${id}.${ext || "mp4"}`;
}

/**
 * Presigned PUT URL so the admin's browser uploads the video file directly
 * to R2 — the file bytes never pass through our own server (avoids
 * serverless body-size/duration limits entirely, and avoids paying for
 * that bandwidth twice).
 */
export async function getUploadUrl(key, contentType, expiresInSeconds = 60 * 15) {
  const command = new PutObjectCommand({ Bucket: bucket, Key: key, ContentType: contentType });
  return getSignedUrl(getClient(), command, { expiresIn: expiresInSeconds });
}

/**
 * Presigned GET URL for playback. Callers MUST have already verified
 * auth + enrollment + course/lesson ownership before calling this — this
 * function itself does no authorization, it only knows how to sign a URL.
 * Kept short-lived; the player re-requests a fresh one well before expiry
 * for anything long enough to matter.
 */
export async function getPlaybackUrl(key, expiresInSeconds = 60 * 10) {
  const command = new GetObjectCommand({ Bucket: bucket, Key: key });
  return getSignedUrl(getClient(), command, { expiresIn: expiresInSeconds });
}

export async function deleteVideo(key) {
  const command = new DeleteObjectCommand({ Bucket: bucket, Key: key });
  await getClient().send(command);
}
