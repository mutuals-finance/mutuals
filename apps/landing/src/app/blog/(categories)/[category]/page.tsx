import BlogList from "@/features/Blog/List";
import { fetchCategories, fetchPostsByCategory } from "@/lib/cms";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

const getPosts = async (slug: string, draft = false) =>
  draft
    ? await fetchPostsByCategory(slug)
    : await unstable_cache(fetchPostsByCategory, ["posts", `posts-${slug}`])(
        slug,
      );

export default async function BlogCategoryPage({
  params,
}: PageProps<"/blog/[category]">) {
  const { category } = await params;
  const posts = await getPosts(category);

  if (!posts) {
    return notFound();
  }

  return <BlogList data={posts} />;
}

export const generateStaticParams = async () => {
  const categories = await fetchCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
};
