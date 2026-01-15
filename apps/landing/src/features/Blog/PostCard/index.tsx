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
      <LinkBox asChild={true}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "6", lg: "12" }}
        >
          <Stack flex={{ base: "1", lg: "0 0 50%" }}>
            <BlogPostImage image={data.image} bg={"bg.muted"} />
          </Stack>
          <Stack
            py={{ lg: "12" }}
            gap={"4"}
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <BlogPostMetaStack
              data={data}
              alignSelf={"stretch"}
              hideBelow={"lg"}
            />

            <Stack gap={"2"}>
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
                textStyle={{ base: "md", lg: "lg" }}
              />
            </Stack>

            <Box>
              <Link href={href} variant={"underline"}>
                Read more
              </Link>
            </Box>
          </Stack>
          <LinkOverlay href={href} />
        </Stack>
      </LinkBox>
    );
  }

  return (
    <Box w={"full"} {...props}>
      <BlogPostMetaStack data={data} size={"xs"} mb={"2"} />
      <LinkBox>
        <BlogPostImage image={data.image} bg={"bg.muted"} w={"full"} mb={"2"} />
        <Heading as={"h3"} size={"xl"}>
          {title}
        </Heading>
        <LinkOverlay href={href} />
      </LinkBox>
    </Box>
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
    <Box color="fg.muted" lineClamp="2" {...props}>
      <CmsProse data={excerpt} />
    </Box>
  );
}
