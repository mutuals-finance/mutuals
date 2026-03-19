import { notFound } from "next/navigation";
import BlogLayoutContent from "@/features/blog/layout-content";
import { fetchAllPosts } from "@/lib/cms";

async function getAllPosts() {
  "use cache";
  return await fetchAllPosts();
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  if (!posts) {
    return notFound();
  }

  return <BlogLayoutContent posts={posts} />;
}
