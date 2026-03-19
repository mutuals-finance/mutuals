import type { Post, User } from "@mutuals/payload/payload-types";
import {
  AvatarFallback,
  AvatarImage,
  type AvatarImageProps,
  AvatarRoot,
  Badge,
  Box,
  Button,
  Container,
  DateTime,
  For,
  Heading,
  HStack,
  IconButton,
  Link,
  Separator,
  Stack,
  type StackProps,
  Text,
  Wrap,
} from "@mutuals/ui";
import { getImageProps } from "next/image";
import {
  IoArrowBackSharp,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import CmsProse from "@/components/cms-prose";
import BlogList from "@/features/blog/list";
import BlogPostImage from "@/features/blog/post-image";

export default function BlogPost(data: Partial<Post>) {
  const { content, excerpt, image, title, authors, category, relatedPosts } =
    data;

  return (
    <Box pt={"20"}>
      <Container maxW={"4xl"} my={"16"}>
        <Stack direction={"column"} gap={"6"}>
          <Stack
            align={"center"}
            direction={"row"}
            justify={"space-between"}
            w={"full"}
          >
            <Stack align={"center"} direction={"row"}>
              <Link
                asChild={true}
                href={`/blog/${typeof category === "object" ? category.slug : ""}`}
              >
                <IconButton variant={"ghost"}>
                  <IoArrowBackSharp />
                </IconButton>
              </Link>
            </Stack>

            <Text asChild={true} color="fg.muted" textStyle={"sm"}>
              <DateTime timestamp={data?.publishedOn} />
            </Text>
          </Stack>

          <Box textAlign={"center"}>
            {data?.category && typeof data.category === "object" && (
              <Link asChild={true} href={`/blog/${data.category.slug}/`}>
                <Badge
                  colorPalette={"brand"}
                  size={"lg"}
                  textStyle={"xs"}
                  variant={"gradient"}
                >
                  {data.category.name}
                </Badge>
              </Link>
            )}
          </Box>

          <Heading
            as="h1"
            mb={"6"}
            textAlign={"center"}
            textStyle={{ base: "4xl", md: "6xl" }}
          >
            {title}
          </Heading>

          <Stack direction={"column"} gap={"6"}>
            <Stack
              alignItems={"center"}
              direction={{ base: "column", lg: "row" }}
              gap={"6"}
              justifyContent={"center"}
            >
              <BlogPostImage image={image} maxW={"4xl"} w={"full"} />
            </Stack>

            <Box w={"full"}>
              <Box>
                <CmsProse data={excerpt} size={{ base: "lg", lg: "lg" }} />
              </Box>

              {content?.map((data) => (
                <Box key={data.id}>
                  {data.blockType === "blogContent" && (
                    <CmsProse
                      data={data.blogContentFields.richText}
                      size={{ base: "md", lg: "md" }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Stack>
        </Stack>

        <Stack direction={"column"} gap={"16"} my={"16"}>
          <Stack alignItems={"center"} gap="6">
            <Box>
              <Stack>
                {authors
                  ?.filter((a) => typeof a === "object")
                  .map((author) => (
                    <CMSUserAvatar key={author.id} user={author} />
                  ))}
              </Stack>
            </Box>

            <Box>
              <Wrap gap={"2"} justify={"center"}>
                <For
                  each={[
                    {
                      key: "linkedin",
                      children: (
                        <>
                          <IoLogoLinkedin />
                          <Box>Share on LinkedIn</Box>
                        </>
                      ),
                    },
                    {
                      key: "x",
                      children: (
                        <>
                          <IoLogoTwitter />
                          <Box> Share on X</Box>
                        </>
                      ),
                    },
                    {
                      key: "facebook",
                      children: (
                        <>
                          <IoLogoFacebook />
                          <Box>Share on Facebook</Box>
                        </>
                      ),
                    },
                  ]}
                >
                  {({ key, children }) => (
                    <Button key={key} variant={"subtle"}>
                      {children}
                    </Button>
                  )}
                </For>
              </Wrap>
            </Box>
          </Stack>

          {relatedPosts && relatedPosts.length > 0 && (
            <>
              <Separator />

              <BlogList.Root>
                <BlogList.Carousel data={relatedPosts as Post[]} />
              </BlogList.Root>
            </>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

type CMSUserAvatarProps = StackProps & { user: User };

function CMSUserAvatar({ user, ...props }: CMSUserAvatarProps) {
  let imageProps: AvatarImageProps = {};

  if (typeof user.photo === "object" && user.photo) {
    const { fill: _, ...nextImageProps } = getImageProps({
      src: user.photo.url ?? "",
      alt: user.photo.alt,
      fill: true,
      loading: "eager",
    }).props;

    imageProps = nextImageProps;
  }

  return (
    <HStack gap="2" {...props}>
      <AvatarRoot overflow={"hidden"}>
        <AvatarFallback name={`${user.firstName} ${user.lastName}`} />
        <AvatarImage h={"4"} w={"4"} {...imageProps} />
      </AvatarRoot>
      <Stack gap="0">
        <Text fontWeight="medium">
          {user.firstName} {user.lastName}
        </Text>
        <Text color="fg.muted" textStyle="sm">
          {user.email}
        </Text>
      </Stack>
    </HStack>
  );
}
