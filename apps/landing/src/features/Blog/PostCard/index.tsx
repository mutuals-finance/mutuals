import {
  LinkBox,
  LinkOverlay,
  Card,
  Box,
  Link,
  Heading,
  Stack,
  BoxProps,
  Icon,
} from "@mutuals/ui";
import { Post } from "@mutuals/payload/payload-types";
import CmsProse from "@/components/CmsProse";
import BlogPostImage from "@/features/Blog/PostImage";
import BlogPostMetaStack from "@/features/Blog/PostMeta";
import IconBox from "@/components/IconBox";
import { LuArrowUpRight } from "react-icons/lu";

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
      <LinkBox className="group">
        <Card.Root
          border={"none"}
          _groupHover={{ bg: "bg.muted", transition: "all 0.1s ease-in-out" }}
          {...props}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "0", lg: "6" }}
          >
            <Stack flex={{ base: "1", lg: "0 0 50%" }}>
              <BlogPostImage image={data.image} bg={"bg.muted"} />
            </Stack>

            <Card.Body px={{ mdDown: "0" }}>
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
    <LinkBox className="group">
      <Card.Root
        w={"full"}
        _groupHover={{ bg: "bg.muted", transition: "all 0.1s ease-in-out" }}
        {...props}
      >
        <Box position={"relative"}>
          <BlogPostImage image={data.image} bg={"bg.muted"} w={"full"} />

          <Box p="2" position={"absolute"} bottom={"0"} right={"0"}>
            <IconBox size={"xs"} bg={"blackAlpha.700"} color={"gray.300"}>
              <Icon asChild={true}>
                <LuArrowUpRight />
              </Icon>
            </IconBox>
          </Box>
        </Box>

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
