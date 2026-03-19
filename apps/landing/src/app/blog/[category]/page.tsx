import { notFound } from "next/navigation";
import BlogLayoutContent from "@/features/blog/layout-content";
import { fetchCategories, fetchPostsByCategory } from "@/lib/cms";

async function getPosts(slug: string) {
  "use cache";
  return await fetchPostsByCategory(slug);
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const posts = await getPosts(category);

  if (!posts) {
    return notFound();
  }

  return <BlogLayoutContent posts={posts} />;
}

export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories
    .filter((category) => !!category.slug)
    .map((category) => ({
      category: category.slug as string,
    }));
}
