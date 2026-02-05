import { Container } from "@mutuals/ui";
import BlogPostCard, { BlogPostCardProps } from "@/features/Blog/PostCard";

type BlogFeaturedPostProps = Omit<BlogPostCardProps, "featured">;

export default function BlogFeaturedPost(props: BlogFeaturedPostProps) {
  return (
    <Container maxW={"7xl"} py={{ base: "12", lg: "24" }}>
      <BlogPostCard {...props} featured={true} />
    </Container>
  );
}
