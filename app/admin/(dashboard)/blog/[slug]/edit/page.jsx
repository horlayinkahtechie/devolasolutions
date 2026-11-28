import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "../../../../../_lib/blog-service";
import PostEditor from "../../_components/PostEditor";

export default async function EditBlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return <PostEditor initialPost={post} existingSlug={slug} />;
}
