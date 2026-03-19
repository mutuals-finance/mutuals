import type { Post } from "@mutuals/payload/payload-types";
import BlogFeaturedPost from "@/features/blog/featured-post";
import BlogList from "@/features/blog/list";
import BlogTabs from "@/features/blog/tabs";
import ShellPageHeader from "@/features/shell/page-header";
import { fetchCategories, fetchFeaturedPost } from "@/lib/cms";

async function getFeaturedPost() {
  "use cache";
  return await fetchFeaturedPost();
}

async function getCategories() {
  "use cache";
  return await fetchCategories();
}

export interface BlogPageContentProps {
  posts: Partial<Post>[];
}

export default async function BlogLayoutContent({
  posts,
}: BlogPageContentProps) {
  const [featuredPost, categories] = await Promise.all([
    getFeaturedPost(),
    getCategories(),
  ]);

  const tabs = [
    {
      title: "All",
      value: "all",
      href: "/blog",
    },
    ...categories
      .filter((category) => !!category.name && !!category.slug)
      .map((category, i) => {
        return {
          title: category.name as string,
          href: `/blog/${encodeURI(category.slug as string)}`,
          value: String(category.id ?? i),
        };
      }),
  ];

  return (
    <>
      <ShellPageHeader tag={"Blog"}>
        Updates from the Mutuals team
      </ShellPageHeader>
      <BlogFeaturedPost data={featuredPost} />
      <BlogTabs tabs={tabs}>
        <BlogList.Root my={"6"}>
          <BlogList.Grid data={posts} />
        </BlogList.Root>
      </BlogTabs>
    </>
  );
}
