import { unstable_cache } from "next/cache";
import { PropsWithChildren } from "react";
import { Box } from "@mutuals/ui";
import { fetchCategories, fetchFeaturedPost } from "@/lib/cms";
import ShellPageHeader from "@/features/Shell/PageHeader";
import BlogTabs from "@/features/Blog/Tabs";
import BlogFeaturedPost from "@/features/Blog/FeaturedPost";

const getFeaturedPost = async (draft = false) =>
  draft
    ? await fetchFeaturedPost()
    : await unstable_cache(fetchFeaturedPost, ["featured-post"])();

const getCategories = async (draft = false) =>
  draft
    ? await fetchCategories()
    : await unstable_cache(fetchCategories, ["categories"])();

export default async function BlogCategoriesLayout({
  children,
}: PropsWithChildren) {
  const [categories, featuredPost] = await Promise.all([
    getCategories(),
    getFeaturedPost(),
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
      <BlogTabs tabs={tabs!}>
        <Box my={"6"}>{children}</Box>
      </BlogTabs>
    </>
  );
}
