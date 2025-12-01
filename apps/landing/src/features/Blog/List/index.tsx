import { GridItem, SimpleGrid, type SimpleGridProps } from "@mutuals/ui";
import { Post } from "@mutuals/payload/payload-types";
import BlogListEmptyCard from "@/features/Blog/List/EmptyCard";
import BlogPostCard from "@/features/Blog/PostCard";

export type BlogListProps = SimpleGridProps & { data: Partial<Post>[] };

export default function BlogList({ data, ...props }: BlogListProps) {
  if (data.length <= 0) {
    return <BlogListEmptyCard />;
  }

  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} gap="6" {...props}>
      {data.map((post) => (
        <GridItem key={post.id}>
          <BlogPostCard data={post} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
}
