import { getPayload as _getPayload } from "payload";
import config from "@mutuals/payload/payload-config/payload.config";
import { Category, Post } from "@mutuals/payload/payload-types";

const onlyPublished = (draft?: boolean) =>
  draft
    ? []
    : [
        {
          _status: {
            equals: "published",
          },
        },
      ];

export const getPayload = () => _getPayload({ config });

export const fetchAllPosts = async (): Promise<Partial<Post>[]> => {
  const draft = true;
  const currentDate = new Date();
  const payload = await getPayload();

  const data = await payload.find({
    collection: "posts",
    depth: 1,
    limit: 20,
    select: {
      slug: true,
      authors: true,
      image: true,
      publishedOn: true,
      title: true,
      authorType: true,
      category: true,
      excerpt: true,
      featuredMedia: true,
      guestAuthor: true,
      guestSocials: true,
      videoUrl: true,
    },
    sort: "-publishedOn",
    where: {
      and: [
        { publishedOn: { less_than_equal: currentDate } },
        ...onlyPublished(draft),
      ],
    },
  });
  return data.docs;
};

export const fetchPostsByCategory = async (
  category: string,
): Promise<Partial<Post>[] | undefined> => {
  const draft = true;
  const currentDate = new Date();
  const payload = await getPayload();

  const data = await payload.find({
    collection: "categories",
    depth: 3,
    draft,
    joins: {
      posts: {
        sort: "-publishedOn",
        where: {
          and: [
            { publishedOn: { less_than_equal: currentDate } },
            ...onlyPublished(draft),
          ],
        },
      },
    },
    limit: 1,
    populate: {
      posts: {
        slug: true,
        authors: true,
        image: true,
        publishedOn: true,
        title: true,
        authorType: true,
        category: true,
        excerpt: true,
        featuredMedia: true,
        guestAuthor: true,
        guestSocials: true,
        videoUrl: true,
      },
    },
    select: {
      slug: true,
      posts: true,
    },
    where: {
      and: [{ slug: { equals: category } }],
    },
  });

  return data.docs[0]?.posts?.docs as Partial<Post>[];
};

export const fetchPost = async (
  slug: string,
): Promise<Partial<Post> | undefined> => {
  //const { isEnabled: draft } = await draftMode()
  const draft = true;
  const payload = await getPayload();

  const data = await payload.find({
    collection: "posts",
    depth: 2,
    draft,
    limit: 1,
    select: {
      slug: true,
      authors: true,
      authorType: true,
      category: true,
      content: true,
      excerpt: true,
      featuredMedia: true,
      guestAuthor: true,
      guestSocials: true,
      image: true,
      meta: true,
      publishedOn: true,
      relatedPosts: true,
      title: true,
      videoUrl: true,
    },
    where: {
      and: [{ slug: { equals: slug } }, ...onlyPublished(draft)],
    },
  });

  return data.docs[0];
};

export const fetchFeaturedPost = async (): Promise<
  Partial<Post> | undefined
> => {
  //const { isEnabled: draft } = await draftMode()
  const draft = true;
  const payload = await getPayload();

  const data = await payload.find({
    collection: "posts",
    depth: 2,
    draft,
    limit: 1,
    select: {
      authors: true,
      authorType: true,
      category: true,
      content: true,
      excerpt: true,
      featuredMedia: true,
      guestAuthor: true,
      guestSocials: true,
      image: true,
      meta: true,
      publishedOn: true,
      relatedPosts: true,
      slug: true,
      title: true,
      videoUrl: true,
    },
    sort: "-publishedOn",
    where: {
      and: [...onlyPublished(draft)],
    },
  });

  return data.docs[0];
};

export const fetchCategories = async (): Promise<Partial<Category>[]> => {
  //const { isEnabled: draft } = await draftMode()
  const draft = true;
  const payload = await getPayload();

  const data = await payload.find({
    collection: "categories",
    depth: 0,
    select: {
      name: true,
      slug: true,
    },
    sort: "name",
    where: {
      and: [...onlyPublished(draft)],
    },
  });

  return data.docs;
};

export const fetchCategory = async (
  slug: string,
): Promise<Partial<Category> | undefined> => {
  //const { isEnabled: draft } = await draftMode()
  const draft = true;
  const payload = await getPayload();
  const currentDate = new Date();

  const data = await payload.find({
    collection: "categories",
    depth: 2,
    draft,
    joins: {
      posts: {
        sort: "-publishedOn",
        where: {
          and: [
            { publishedOn: { less_than_equal: currentDate } },
            ...onlyPublished(draft),
          ],
        },
      },
    },
    limit: 1,
    select: {
      name: true,
      slug: true,
      description: true,
      headline: true,
      posts: true,
    },
    where: {
      and: [{ slug: { equals: slug } }, ...onlyPublished(draft)],
    },
  });
  return data.docs[0];
};
