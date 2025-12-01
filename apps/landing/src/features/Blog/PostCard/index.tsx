import {
  Card,
  Box,
  Link,
  Heading,
  Stack,
  LinkOverlay,
  LinkBox,
  BoxProps,
} from "@mutuals/ui";
import { Post } from "@mutuals/payload/payload-types";
import CmsProse from "@/components/CmsProse";
import BlogPostImage from "@/features/Blog/PostImage";
import BlogPostMetaStack from "@/features/Blog/PostMeta";

export type BlogPostCardProps = Omit<Card.RootProps, "children"> & {
  featured?: boolean;
  data: Partial<Post>;
};

export default function BlogPostCard({
  data,
  featured = false,
  ...props
}: BlogPostCardProps) {
  const { title, slug } = data;
  const href = `/blog/post/${slug}`;

  if (featured) {
    return (
      <Stack
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "6", lg: "12" }}
      >
        <BlogPostImage
          image={data.image}
          flex={{ base: "1", lg: "0 0 60%" }}
          bg={"bg.muted"}
        />

        <Stack py={{ lg: "12" }} gap={"0"}>
          <BlogPostMetaStack data={data} mb={"4"} />

          <Heading
            as="h1"
            size={{
              base: "2xl",
              lg: "4xl",
            }}
            fontWeight={"medium"}
          >
            {title}
          </Heading>

          <PostExcerptBox
            featured={featured}
            data={data}
            textStyle={{ base: "md", lg: "xl" }}
          />

          <Box>
            <Link href={href} variant={"underline"}>
              Read more
            </Link>
          </Box>
        </Stack>
      </Stack>
    );
  }

  return (
    <LinkBox asChild={true}>
      <Card.Root variant={"outline"} w={"full"} size={"sm"} {...props}>
        <Card.Header>
          <BlogPostImage image={data.image} bg={"bg.muted"} w={"full"} />
        </Card.Header>
        <Card.Body>
          <BlogPostMetaStack data={data} mb={"2"} />

          <Heading as={"h3"} size={"lg"}>
            {title}
          </Heading>
        </Card.Body>
        <LinkOverlay href={href} />
      </Card.Root>
    </LinkBox>
  );
}

type BlogPostCardContentProps = {
  featured?: boolean;
  data: Partial<Post>;
};

type PostExcerptBoxProps = BoxProps & BlogPostCardContentProps;

function PostExcerptBox({ data, featured: _, ...props }: PostExcerptBoxProps) {
  const { excerpt } = data;
  return (
    <Box {...props}>
      <CmsProse data={excerpt} />
    </Box>
  );
}
