import BlogList from "@/features/Blog/List";
import { fetchAllPosts } from "@/lib/cms";
import { Box } from "@mutuals/ui";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

const getAllPosts = async (draft = false) =>
  draft
    ? await fetchAllPosts()
    : await unstable_cache(fetchAllPosts, [`posts-all`])();

export default async function BlogCategoryPage() {
  const posts = await getAllPosts();

  if (!posts) {
    return notFound();
  }

  return (
    <Box w={"full"}>
      <BlogList data={posts} />
    </Box>
  );
}
