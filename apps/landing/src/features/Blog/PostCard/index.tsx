import {
  LinkBox,
  LinkOverlay,
  Card,
  Box,
  Link,
  Heading,
  Stack,
  BoxProps,
} from "@mutuals/ui";
import { Post } from "@mutuals/payload/payload-types";
import CmsProse from "@/components/CmsProse";
import BlogPostImage from "@/features/Blog/PostImage";
import BlogPostMetaStack from "@/features/Blog/PostMeta";

export type BlogPostCardProps = Omit<Card.RootProps, "children"> & {
  featured?: boolean;
  data?: Partial<Post>;
};

export default function BlogPostCard({
  data = {},
  featured = false,
  ...props
}: BlogPostCardProps) {
  const { title, slug } = data;
  const href = `/blog/post/${slug}`;

  if (featured) {
    return (
      <LinkBox>
        <Card.Root border={"none"}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "0", lg: "6" }}
          >
            <Stack flex={{ base: "1", lg: "0 0 50%" }}>
              <BlogPostImage image={data.image} bg={"bg.muted"} />
            </Stack>

            <Card.Body>
              <Stack gap={"4"}>
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
            </Card.Body>
          </Stack>
        </Card.Root>
        <LinkOverlay href={href} />
      </LinkBox>
    );
  }

  return (
    <LinkBox>
      <Card.Root w={"full"} {...props}>
        <BlogPostImage image={data.image} bg={"bg.muted"} w={"full"} />

        <Card.Body>
          <BlogPostMetaStack data={data} size={"xs"} />
          <Heading as={"h3"} size={"xl"} mt={"2"}>
            {title}
          </Heading>
        </Card.Body>
      </Card.Root>
      <LinkOverlay href={href} />
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
    <Box color="fg.muted" lineClamp="2" {...props}>
      <CmsProse data={excerpt} />
    </Box>
  );
}
