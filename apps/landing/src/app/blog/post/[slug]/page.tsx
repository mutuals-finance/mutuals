import { fetchAllPosts, fetchPost } from "@/lib/cms";
import { unstable_cache } from "next/cache";
import BlogPost from "@/features/Blog/Post";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { createOpenGraph } from "@mutuals/metadata-nextjs";

export const dynamic = "force-static";

export type BlogPostPageProps = PageProps<"/blog/post/[slug]">;

const getPost = async (slug: string, draft = false) =>
  draft
    ? await fetchPost(slug)
    : await unstable_cache(fetchPost, ["post", `post-${slug}`])(slug);

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return <BlogPost {...post} />;
}

export async function generateStaticParams() {
  const getAllPosts = unstable_cache(fetchAllPosts, [`posts-all`]);
  const posts = await getAllPosts();

  return posts
    .map(({ slug }) => ({
      slug,
    }))
    .filter(Boolean);
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const draft = true;
  const { slug } = await params;
  const post = await getPost(slug, draft);

  let ogImage: null | string = null;

  if (post) {
    if (
      typeof post.meta == "object" &&
      post.meta.image &&
      typeof post.meta.image == "object" &&
      post.meta.image.url
    ) {
      ogImage = post.meta.image.url;
    } else if (
      post.featuredMedia === "upload" &&
      post.image &&
      typeof post.image == "object" &&
      post.image?.url
    ) {
      ogImage = post.image.url;
    } else if (post.featuredMedia === "videoUrl" && post.videoUrl) {
      ogImage = `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?type=blog&title=${post.title}`;
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
