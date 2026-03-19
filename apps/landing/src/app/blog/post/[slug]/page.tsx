import { createOpenGraph } from "@mutuals/metadata-nextjs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/features/blog/post";
import { fetchAllPosts, fetchPost } from "@/lib/cms";

export type BlogPostPageProps = PageProps<"/blog/post/[slug]">;

async function getPost(slug: string) {
  "use cache";
  return await fetchPost(slug);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return <BlogPost {...post} />;
}

export async function generateStaticParams() {
  const posts = await fetchAllPosts();

  return posts
    .map(({ slug }) => ({
      slug,
    }))
    .filter(Boolean);
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  let ogImage: null | string = null;

  if (post) {
    if (
      typeof post.meta === "object" &&
      post.meta.image &&
      typeof post.meta.image === "object" &&
      post.meta.image.url
    ) {
      ogImage = post.meta.image.url;
    } else if (
      post.featuredMedia === "upload" &&
      post.image &&
      typeof post.image === "object" &&
      post.image?.url
    ) {
      ogImage = post.image.url;
    }
  }

  return {
    description: post?.meta?.description,
    openGraph: createOpenGraph({
      description: post?.meta?.description ?? undefined,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title: post?.meta?.title ?? undefined,
      url: `/blog/post/${slug}`,
    }),
    title: post?.meta?.title ?? post?.title ?? undefined,
  };
}
