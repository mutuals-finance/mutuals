import type { Post } from "@mutuals/payload/payload-types";
import { For, GridItem, SimpleGrid, type SimpleGridProps } from "@mutuals/ui";
import BlogListEmptyCard from "@/features/blog/list/empty-card";
import BlogPostCard from "@/features/blog/post-card";

export type BlogListGridProps = SimpleGridProps & { data: Partial<Post>[] };

export default function BlogListGrid({ data, ...props }: BlogListGridProps) {
  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} gap="6" {...props}>
      <For
        each={data}
        fallback={
          <GridItem gridColumn={"1 / -1"}>
            <BlogListEmptyCard />
          </GridItem>
        }
      >
        {(post) => (
          <GridItem key={post.id}>
            <BlogPostCard data={post} />
          </GridItem>
        )}
      </For>
    </SimpleGrid>
  );
}
