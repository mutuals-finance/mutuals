import { Carousel, HStack, IconButton, Heading, For, Bleed } from "@mutuals/ui";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Post } from "@mutuals/payload/payload-types";
import BlogPostCard from "@/features/Blog/PostCard";
import BlogListEmptyCard from "@/features/Blog/List/EmptyCard";

export type BlogListCarouselProps = Omit<Carousel.RootProps, "slideCount"> & {
  data: Partial<Post>[];
};

export default function BlogListCarousel({
  data,
  ...props
}: BlogListCarouselProps) {
  return (
    <Carousel.Root
      slideCount={data.length}
      autoSize={data.length > 0}
      slidesPerPage={data.length > 0 ? undefined : 1}
      gap="4"
      {...props}
    >
      <HStack justify="space-between">
        <Heading size={"2xl"}>Related posts</Heading>
        <HStack>
          <Carousel.PrevTrigger asChild>
            <IconButton size="xs" variant="subtle" disabled={data.length <= 0}>
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
      <Bleed inline={"6"} px={"6"}>
        <Carousel.ItemGroup>
          <For
            each={data}
            fallback={
              <Carousel.Item index={0} width="auto">
                <BlogListEmptyCard w={"full"} />
              </Carousel.Item>
            }
          >
            {(post, index) => (
              <Carousel.Item key={post.id} index={index} width="auto">
                <BlogPostCard data={post} w={{ base: "72", md: "96" }} />
              </Carousel.Item>
            )}
          </For>
        </Carousel.ItemGroup>
      </Bleed>
    </Carousel.Root>
  );
}
