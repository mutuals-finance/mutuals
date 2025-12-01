import { Post } from "@mutuals/payload/payload-types";
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
} from "@mutuals/ui";
import { itemVariants } from "@/components/MotionBoxWrapper";
import BlogPostImage from "@/features/Blog/PostImage";
import CmsProse from "@/components/CmsProse";
import BlogPostMetaStack from "@/features/Blog/PostMeta";
import NextImage from "next/image";

export default function BlogPost(data: Partial<Post>) {
  const {
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
    authors,
  } = data;

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
                <Stack gap="6">
                  {authors
                    ?.filter((a) => typeof a == "object")
                    .map((author) => (
                      <HStack key={author.id} gap="2">
                        <AvatarRoot>
                          <AvatarFallback
                            name={`${author.firstName} ${author.lastName}`}
                          />
                          {typeof author.photo == "object" &&
                            author.photo &&
                            author.photo.url && (
                              <AvatarImage asChild={true}>
                                <NextImage
                                  width={48}
                                  height={48}
                                  src={author.photo.url}
                                  alt={`${author.firstName} ${author.lastName}`}
                                />
                              </AvatarImage>
                            )}
                        </AvatarRoot>
                        <Stack gap="0">
                          <Text fontWeight="medium">
                            {author.firstName} {author.lastName}
                          </Text>
                          <Text color="fg.muted" textStyle="sm">
                            {author.email}
                          </Text>
                        </Stack>
                      </HStack>
                    ))}
                </Stack>
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
