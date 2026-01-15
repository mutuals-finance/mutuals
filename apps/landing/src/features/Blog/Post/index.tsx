import { Post, User } from "@mutuals/payload/payload-types";
import {
  AvatarRoot,
  Box,
  Container,
  Heading,
  Stack,
  Text,
  AvatarFallback,
  HStack,
  AvatarImage,
  AvatarImageProps,
  StackProps,
  Breadcrumbs,
  Link,
  IconButton,
  DateTime,
  Badge,
} from "@mutuals/ui";
import BlogPostImage from "@/features/Blog/PostImage";
import CmsProse from "@/components/CmsProse";
import { getImageProps } from "next/image";
import { IoArrowBackSharp } from "react-icons/io5";

export default function BlogPost(data: Partial<Post>) {
  const { content, excerpt, image, title, authors, category } = data;

  return (
    <Box pt={"20"}>
      <Container maxW={"4xl"} my={{ base: "6", lg: "12" }}>
        <Stack direction={"column"} gap={"6"}>
          <Stack
            direction={"row"}
            align={"center"}
            w={"full"}
            justify={"space-between"}
          >
            <Stack direction={"row"} align={"center"}>
              <Link
                asChild={true}
                href={`/blog/${typeof category == "object" ? category.slug : ""}`}
              >
                <IconButton size={"xs"} variant={"ghost"}>
                  <IoArrowBackSharp />
                </IconButton>
              </Link>

              <Breadcrumbs
                overwrite={{ home: false, post: false, slug: false }}
              />
            </Stack>

            <Text asChild={true} textStyle={"sm"} color="fg.muted">
              <DateTime timestamp={data?.publishedOn} />
            </Text>
          </Stack>

          <Box textAlign={"center"}>
            {data?.category && typeof data.category == "object" && (
              <Link asChild={true} href={`/blog/${data.category.slug}/`}>
                <Badge
                  colorPalette="brand"
                  size={"lg"}
                  textStyle={"xs"}
                  letterSpacing={"wide"}
                  textTransform={"uppercase"}
                  rounded={"full"}
                  bg={"bg"}
                  bgGradient="to-tr"
                  fontWeight={"medium"}
                  color={"fg"}
                  gradientFrom="colorPalette.muted/10"
                  gradientVia="colorPalette.emphasized/30"
                  gradientTo="colorPalette.subtle/20"
                >
                  {data.category.name}
                </Badge>
              </Link>
            )}
          </Box>

          <Heading
            textStyle={{ base: "4xl", md: "6xl" }}
            as="h1"
            mb={"6"}
            textAlign={"center"}
          >
            {title}
          </Heading>

          <Stack direction={"column"} gap={"6"}>
            <Stack
              direction={{ base: "column", lg: "row" }}
              gap={"6"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <BlogPostImage w={"full"} maxW={"4xl"} image={image} />
              {/*
                <Stack gap="6">
                  <Box>
                    <Text fontWeight={"medium"} textStyle={"sm"} mb={"2"}>
                      Author
                    </Text>
                    <Stack>
                      {authors
                        ?.filter((a) => typeof a == "object")
                        .map((author) => (
                          <CMSUserAvatar key={author.id} user={author} />
                        ))}
                    </Stack>
                  </Box>

                  <Box mt={{ lg: "auto" }}>
                    <Text fontWeight={"medium"} textStyle={"sm"} mb={"2"}>
                      Share
                    </Text>
                    <Stack direction={{ base: "row", lg: "column" }}>
                      <For
                        each={[
                          {
                            key: "linkedin",
                            children: (
                              <>
                                <IoLogoLinkedin />
                                <Box hideBelow={"lg"}>Share on LinkedIn</Box>
                              </>
                            ),
                          },
                          {
                            key: "x",
                            children: (
                              <>
                                <IoLogoTwitter />
                                <Box hideBelow={"lg"}> Share on X</Box>
                              </>
                            ),
                          },
                          {
                            key: "facebook",
                            children: (
                              <>
                                <IoLogoFacebook />
                                <Box hideBelow={"lg"}>Share on Facebook</Box>
                              </>
                            ),
                          },
                        ]}
                      >
                        {({ key, children }) => (
                          <Button
                            key={key}
                            size={"sm"}
                            variant={"subtle"}
                            textAlign={{ lg: "left" }}
                            justifyContent={{ lg: "flex-start" }}
                          >
                            {children}
                          </Button>
                        )}
                      </For>
                    </Stack>
                  </Box>
                </Stack>
*/}
            </Stack>

            <Box w={"full"}>
              <Box>
                <CmsProse data={excerpt} size={{ base: "lg", lg: "lg" }} />
              </Box>

              {content?.map((data) => (
                <Box key={data.id}>
                  {data.blockType == "blogContent" && (
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
      </Container>
    </Box>
  );
}

type CMSUserAvatarProps = StackProps & { user: User };

function CMSUserAvatar({ user, ...props }: CMSUserAvatarProps) {
  let imageProps: AvatarImageProps = {};

  if (typeof user.photo == "object" && user.photo) {
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
        <AvatarImage w={"4"} h={"4"} {...imageProps} />
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
