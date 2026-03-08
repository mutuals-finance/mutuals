import { Box } from "@mutuals/ui";
import ShellPageHeader from "@/features/Shell/PageHeader";
import BlogFeaturedPost from "@/features/Blog/FeaturedPost";
import BlogTabs from "@/features/Blog/Tabs";
import BlogList from "@/features/Blog/List";
import { fetchCategories, fetchFeaturedPost } from "@/lib/cms";
import { Post } from "@mutuals/payload/payload-types";

async function getFeaturedPost() {
  "use cache";
  return await fetchFeaturedPost();
}

async function getCategories() {
  "use cache";
  return await fetchCategories();
}

export type BlogPageContentProps = {
  posts: Partial<Post>[];
};

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
      href: `/blog`,
    },
    ...categories
      .filter((category) => !!category.name && !!category.slug)
      .map((category, i) => {
        return {
          title: category.name!,
          href: `/blog/${encodeURI(category.slug!)}`,
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
        <Box my={"6"}>
          <BlogList data={posts} />
        </Box>
      </BlogTabs>
    </>
  );
}
