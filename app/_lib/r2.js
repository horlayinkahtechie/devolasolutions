import "server-only";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

/* Cloudflare R2 for blog images — generic mirror of app/edu/_lib/r2.js's
   S3Client setup (same bucket/credentials, reused env vars), but with a
   different key prefix and, critically, PUBLIC urls instead of short-lived
   signed ones: edu's videos are gated behind paid enrollment, so they're
   served via signed GET URLs that expire. Blog images need to stay
   reachable forever once a post is published, so they're served from
   R2.dev's public-bucket URL instead — no signing on read, only on the
   one-time upload PUT. */

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const bucket = process.env.R2_BUCKET_NAME;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const endpoint = process.env.R2_ENDPOINT;
const publicBaseUrl = process.env.R2_PUBLIC_BASE_URL;

export const r2Configured = Boolean(accountId && bucket && accessKeyId && secretAccessKey && endpoint);
export const r2PublicUrlConfigured = Boolean(publicBaseUrl);

let client;

function getClient() {
  if (!r2Configured) {
    throw new Error(
      "R2 is not configured. Set CLOUDFLARE_ACCOUNT_ID, R2_BUCKET_NAME, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY and R2_ENDPOINT."
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

/** A collision-proof object key for a freshly-uploaded blog image. */
export function buildBlogImageKey(originalFilename) {
  const ext = (originalFilename.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
  const id = crypto.randomUUID();
  return `blog-images/${id}.${ext || "jpg"}`;
}

/** Presigned PUT URL so the admin's browser uploads the image directly to R2. */
export async function getUploadUrl(key, contentType, expiresInSeconds = 60 * 15) {
  const command = new PutObjectCommand({ Bucket: bucket, Key: key, ContentType: contentType });
  return getSignedUrl(getClient(), command, { expiresIn: expiresInSeconds });
}

/** The permanent, public, non-expiring URL for an already-uploaded image. */
export function getPublicImageUrl(key) {
  if (!r2PublicUrlConfigured) {
    throw new Error("R2_PUBLIC_BASE_URL is not set — enable public access on the R2 bucket first.");
  }
  return `${publicBaseUrl.replace(/\/$/, "")}/${key}`;
}

export async function deleteImage(key) {
  const command = new DeleteObjectCommand({ Bucket: bucket, Key: key });
  await getClient().send(command);
}
