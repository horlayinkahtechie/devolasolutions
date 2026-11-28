import { adminConfigured } from "../../../_lib/firebase-admin";
import { requireAdminApi } from "../../../_lib/auth";
import { createBlogPost, listBlogPosts, SlugTakenError, ValidationError } from "../../../_lib/blog-service";
import { logAdminAction } from "../../../_lib/audit-log";

export async function GET(request) {
  if (!adminConfigured) {
    return Response.json({ success: false, message: "Not configured yet." }, { status: 503 });
  }
  const { response } = await requireAdminApi();
  if (response) return response;

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") || undefined;

  try {
    const posts = await listBlogPosts({ status });
    return Response.json({ success: true, posts });
  } catch (err) {
    console.error("Admin blog list failed:", err);
    return Response.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}

export async function POST(request) {
  if (!adminConfigured) {
    return Response.json({ success: false, message: "Not configured yet." }, { status: 503 });
  }
  const { session, response } = await requireAdminApi();
  if (response) return response;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  try {
    const post = await createBlogPost(body);
    await logAdminAction(session, "blogPost.create", post.slug, { status: post.status });
    return Response.json({ success: true, post });
  } catch (err) {
    if (err instanceof ValidationError) {
      return Response.json({ success: false, message: err.message }, { status: 400 });
    }
    if (err instanceof SlugTakenError) {
      return Response.json({ success: false, message: err.message }, { status: 409 });
    }
    console.error("Admin blog create failed:", err);
    return Response.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}
