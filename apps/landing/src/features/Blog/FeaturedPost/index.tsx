import { Container } from "@mutuals/ui";
import BlogPostCard, { BlogPostCardProps } from "@/features/Blog/PostCard";

type BlogFeaturedPostProps = Omit<BlogPostCardProps, "featured">;

export default function BlogFeaturedPost(props: BlogFeaturedPostProps) {
  return (
    <Container maxW={"7xl"} my={"16"}>
      <BlogPostCard {...props} featured={true} />
    </Container>
  );
}
