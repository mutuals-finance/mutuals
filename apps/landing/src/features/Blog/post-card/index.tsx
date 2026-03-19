import type { Post } from "@mutuals/payload/payload-types";
import {
  Box,
  type BoxProps,
  Card,
  Heading,
  Icon,
  Link,
  LinkBox,
  type LinkBoxProps,
  LinkOverlay,
  Stack,
} from "@mutuals/ui";
import { LuArrowUpRight } from "react-icons/lu";
import CmsProse from "@/components/cms-prose";
import IconBox from "@/components/icon-box";
import BlogPostImage from "@/features/blog/post-image";
import BlogPostMetaStack from "@/features/blog/post-meta";

export type BlogPostCardProps = Omit<LinkBoxProps, "children"> & {
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
      <LinkBox className="group" {...props}>
        <Card.Root
          _groupHover={{ bg: "bg.muted", transition: "all 0.1s ease-in-out" }}
          border={"none"}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "0", lg: "6" }}
          >
            <Stack flex={{ base: "1", lg: "0 0 50%" }}>
              <BlogPostImage bg={"bg.muted"} image={data.image} />
            </Stack>

            <Card.Body px={{ mdDown: "0" }}>
              <Stack gap={"4"}>
                <BlogPostMetaStack
                  alignSelf={"stretch"}
                  data={data}
                  hideBelow={"lg"}
                />

                <Stack gap={"2"}>
                  <Heading
                    as="h1"
                    fontWeight={"medium"}
                    size={{
                      base: "2xl",
                      lg: "4xl",
                    }}
                  >
                    {title}
                  </Heading>

                  <PostExcerptBox
                    data={data}
                    featured={featured}
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
    <LinkBox className="group" {...props}>
      <Card.Root
        _groupHover={{ bg: "bg.muted", transition: "all 0.1s ease-in-out" }}
        w={"full"}
      >
        <Box position={"relative"}>
          <BlogPostImage bg={"bg.muted"} image={data.image} w={"full"} />

          <Box p="4" position={"absolute"} right={"0"} top={"0"}>
            <IconBox bg={"blackAlpha.700"} color={"gray.300"} size={"sm"}>
              <Icon asChild={true}>
                <LuArrowUpRight />
              </Icon>
            </IconBox>
          </Box>
        </Box>

        <Card.Body>
          <BlogPostMetaStack data={data} size={"xs"} />
          <Heading as={"h3"} mt={"2"} size={"xl"}>
            {title}
          </Heading>
        </Card.Body>
      </Card.Root>
      <LinkOverlay href={href} />
    </LinkBox>
  );
}

interface BlogPostCardContentProps {
  data: Partial<Post>;
  featured?: boolean;
}

type PostExcerptBoxProps = BoxProps & BlogPostCardContentProps;

function PostExcerptBox({ data, featured: _, ...props }: PostExcerptBoxProps) {
  const { excerpt } = data;
  return (
    <Box color="fg.muted" lineClamp="2" {...props}>
      <CmsProse data={excerpt} />
    </Box>
  );
}
