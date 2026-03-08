import { For, GridItem, SimpleGrid, type SimpleGridProps } from "@mutuals/ui";
import { Post } from "@mutuals/payload/payload-types";
import BlogPostCard from "@/features/Blog/PostCard";
import BlogListEmptyCard from "@/features/Blog/List/EmptyCard";

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
