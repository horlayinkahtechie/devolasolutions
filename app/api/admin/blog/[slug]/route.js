import { adminConfigured } from "../../../../_lib/firebase-admin";
import { requireAdminApi } from "../../../../_lib/auth";
import {
  getBlogPostBySlug,
  updateBlogPost,
  deleteBlogPost,
  SlugTakenError,
  ValidationError,
} from "../../../../_lib/blog-service";
import { logAdminAction } from "../../../../_lib/audit-log";

export async function GET(request, { params }) {
  if (!adminConfigured) {
    return Response.json({ success: false, message: "Not configured yet." }, { status: 503 });
  }
  const { response } = await requireAdminApi();
  if (response) return response;

  const { slug } = await params;
  try {
    const post = await getBlogPostBySlug(slug);
    if (!post) return Response.json({ success: false, message: "Post not found." }, { status: 404 });
    return Response.json({ success: true, post });
  } catch (err) {
    console.error("Admin blog get failed:", err);
    return Response.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  if (!adminConfigured) {
    return Response.json({ success: false, message: "Not configured yet." }, { status: 503 });
  }
  const { session, response } = await requireAdminApi();
  if (response) return response;

  const { slug } = await params;
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  try {
    const post = await updateBlogPost(slug, body);
    await logAdminAction(session, "blogPost.update", post.slug, { status: post.status });
    return Response.json({ success: true, post });
  } catch (err) {
    if (err instanceof ValidationError) {
      return Response.json({ success: false, message: err.message }, { status: 400 });
    }
    if (err instanceof SlugTakenError) {
      return Response.json({ success: false, message: err.message }, { status: 409 });
    }
    console.error("Admin blog update failed:", err);
    return Response.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  if (!adminConfigured) {
    return Response.json({ success: false, message: "Not configured yet." }, { status: 503 });
  }
  const { session, response } = await requireAdminApi();
  if (response) return response;

  const { slug } = await params;
  try {
    await deleteBlogPost(slug);
    await logAdminAction(session, "blogPost.delete", slug);
    return Response.json({ success: true });
  } catch (err) {
    console.error("Admin blog delete failed:", err);
    return Response.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}
