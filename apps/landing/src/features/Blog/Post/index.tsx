import { Post } from "@mutuals/payload/payload-types";
import { Box, Heading } from "@mutuals/ui";

export default function BlogPost({
  authorType,
  category,
  content,
  excerpt,
  featuredMedia,
  guestAuthor,
  guestSocials,
  image,
  publishedOn,
  relatedPosts,
  title,
  videoUrl,
}: Partial<Post>) {
  return (
    <Box>
      <Heading>{title}</Heading>
    </Box>
  );
}
