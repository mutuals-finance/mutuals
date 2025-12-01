import { Post, User } from "@mutuals/payload/payload-types";
import {
  AvatarRoot,
  Bleed,
  Box,
  Container,
  Heading,
  MotionBox,
  Stack,
  Text,
  AvatarFallback,
  HStack,
  AvatarImage,
  AvatarImageProps,
  StackProps,
} from "@mutuals/ui";
import { itemVariants } from "@/components/MotionBoxWrapper";
import BlogPostImage from "@/features/Blog/PostImage";
import CmsProse from "@/components/CmsProse";
import BlogPostMetaStack from "@/features/Blog/PostMeta";
import { getImageProps } from "next/image";

export default function BlogPost(data: Partial<Post>) {
  const { content, excerpt, image, title, authors } = data;

  return (
    <Box pt={"20"}>
      <Container maxW={"4xl"} my={{ base: "6", lg: "12" }}>
        <Stack direction={"column"} gap={"6"}>
          <BlogPostMetaStack data={data} size={"lg"} />

          <Box>
            <MotionBox variants={itemVariants} asChild={true}>
              <Heading textStyle={{ base: "4xl", md: "6xl" }} as="h1" mb={"6"}>
                {title}
              </Heading>
            </MotionBox>
          </Box>

          <Stack direction={"column"} gap={"6"}>
            <Bleed inline={{ lg: "48" }}>
              <Stack
                direction={{ base: "column", lg: "row" }}
                gap={"6"}
                alignItems={"stretch"}
              >
                <BlogPostImage w={"full"} maxW={"4xl"} image={image} />
                <Box>
                  <Text fontWeight={"medium"} textStyle={"sm"} mb={"2"}>
                    Author
                  </Text>
                  <Stack gap="6">
                    {authors
                      ?.filter((a) => typeof a == "object")
                      .map((author) => (
                        <CMSUserAvatar key={author.id} user={author} />
                      ))}
                  </Stack>
                </Box>
              </Stack>
            </Bleed>
            <Box w={"full"}>
              <Box>
                <CmsProse data={excerpt} size={{ base: "xl", lg: "3xl" }} />
              </Box>

              {content?.map((data) => (
                <Box key={data.id}>
                  {data.blockType == "blogContent" && (
                    <CmsProse
                      data={data.blogContentFields.richText}
                      size={{ base: "md", lg: "lg" }}
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
  console.log("Photo", user.photo);
  if (typeof user.photo == "object" && user.photo) {
    const { fill: _, ...nextImageProps } = getImageProps({
      src: user.photo.url ?? "",
      alt: user.photo.alt,
      fill: true,
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
