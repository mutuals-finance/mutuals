import type { Post } from "@mutuals/payload/payload-types";
import { Bleed, Carousel, For, Heading, HStack, IconButton } from "@mutuals/ui";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import BlogListEmptyCard from "@/features/blog/list/empty-card";
import BlogPostCard from "@/features/blog/post-card";

export type BlogListCarouselProps = Omit<Carousel.RootProps, "slideCount"> & {
  data: Partial<Post>[];
};

export default function BlogListCarousel({
  data,
  ...props
}: BlogListCarouselProps) {
  return (
    <Carousel.Root
      autoSize={data.length > 0}
      gap="4"
      slideCount={data.length}
      slidesPerPage={data.length > 0 ? undefined : 1}
      spacing="0"
      {...props}
    >
      <HStack justify="space-between">
        <Heading size={"2xl"}>Related posts</Heading>
        <HStack>
          <Carousel.PrevTrigger asChild>
            <IconButton disabled={data.length <= 0} size="xs" variant="subtle">
              <LuChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger asChild disabled={data.length <= 0}>
            <IconButton size="xs" variant="subtle">
              <LuChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </HStack>
      </HStack>
      <Bleed inline={"6"}>
        <Carousel.ItemGroup>
          <For
            each={data}
            fallback={
              <Carousel.Item index={0} px={"6"} width="auto">
                <BlogListEmptyCard w={"full"} />
              </Carousel.Item>
            }
          >
            {(post, index) => (
              <Carousel.Item
                index={index}
                key={post.id}
                pl={index <= 0 ? "6" : "3"}
                pr={index >= data.length - 1 ? "6" : "3"}
                width="auto"
              >
                <BlogPostCard data={post} w={{ base: "80", md: "96" }} />
              </Carousel.Item>
            )}
          </For>
        </Carousel.ItemGroup>
      </Bleed>
    </Carousel.Root>
  );
}
