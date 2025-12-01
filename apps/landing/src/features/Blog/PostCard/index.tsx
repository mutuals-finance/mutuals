import {
  Card,
  Icon,
  Box,
  Link,
  Heading,
  AspectRatio,
  Badge,
  Stack,
  Text,
  StackSeparator,
  DateTime,
  LinkOverlay,
  Flex,
  LinkBox,
  StackProps,
  BoxProps,
  AspectRatioProps,
  Show,
} from "@mutuals/ui";
import { Media, Post } from "@mutuals/payload/payload-types";
import CmsProse from "@/components/CmsProse";
import NextImage from "next/image";
import { IoCalendarOutline } from "react-icons/io5";

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
  const href = `/blog/${slug}`;
  console.log("BlogPostCard", data);
  if (featured) {
    return (
      <Stack
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "6", lg: "12" }}
      >
        <PostImage
          featured={featured}
          data={data}
          flex={{ base: "1", lg: "0 0 60%" }}
          bg={"bg.muted"}
        />

        <Stack py={{ lg: "12" }} gap={"0"}>
          <PostMetaStack featured={featured} data={data} mb={"4"} />

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
          <PostImage
            featured={featured}
            data={data}
            bg={"bg.muted"}
            w={"full"}
          />
        </Card.Header>
        <Card.Body>
          <PostMetaStack featured={featured} data={data} mb={"2"} />

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

type PostExcerptImageProps = AspectRatioProps & BlogPostCardContentProps;

function PostImage({ data, featured: _, ...props }: PostExcerptImageProps) {
  const { image } = data;

  return (
    <Show when={image && typeof image != "number" && "url" in image}>
      <AspectRatio ratio={16 / 9} rounded={"2xl"} {...props}>
        <NextImage
          src={(image as Media).url!}
          alt={(image as Media).alt}
          fill={true}
        />
      </AspectRatio>
    </Show>
  );
}

type PostMetaStackProps = StackProps & BlogPostCardContentProps;

function PostMetaStack({ data, featured: _, ...props }: PostMetaStackProps) {
  const { publishedOn, category } = data;
  return (
    <Stack
      direction={"row"}
      align={"center"}
      separator={<StackSeparator />}
      {...props}
    >
      <Flex gap={"1"}>
        <Icon display={"inline-block"}>
          <IoCalendarOutline />
        </Icon>
        <Text textStyle={"xs"} asChild={true}>
          <DateTime timestamp={publishedOn} />
        </Text>
      </Flex>

      {category && typeof category == "object" && (
        <Link asChild={true} href={`/blog/${category.slug}/`}>
          <Badge colorPalette="purple">{category.name}</Badge>
        </Link>
      )}
    </Stack>
  );
}

type PostExcerptBoxProps = BoxProps & BlogPostCardContentProps;

function PostExcerptBox({ data, featured: _, ...props }: PostExcerptBoxProps) {
  const { excerpt } = data;
  return (
    <Box {...props}>
      <CmsProse data={excerpt} />
    </Box>
  );
}
