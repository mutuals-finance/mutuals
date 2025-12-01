import { fetchPost } from "@/lib/cms";
import { unstable_cache } from "next/cache";
import BlogPost from "@/features/Blog/Post";
import { notFound } from "next/navigation";

const getPost = async (slug: string, draft = false) =>
  draft
    ? await fetchPost(slug)
    : await unstable_cache(fetchPost, ["post", `post-${slug}`])(slug);

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return <BlogPost {...post} />;
}
