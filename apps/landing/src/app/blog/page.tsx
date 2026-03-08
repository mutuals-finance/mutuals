import { fetchAllPosts } from "@/lib/cms";
import { notFound } from "next/navigation";
import BlogLayoutContent from "@/features/Blog/LayoutContent";

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
