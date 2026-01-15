import type { CollectionConfig } from "payload";

import { revalidatePath } from "next/cache";

import { isAdmin, publishedOnly } from "../access";
import { slugField, richText } from "../fields";
import { formatPreviewURL } from "../utils";
import { revalidatePageHook } from "../hooks/revalidate-path";

export const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
  },
  admin: {
    livePreview: {
      url: ({ data }) => formatPreviewURL("posts", data),
    },
    preview: (doc) => {
      return formatPreviewURL(
        "posts",
        doc,
        (doc?.category as { slug: string })?.slug,
      );
    },
    useAsTitle: "title",
  },
  defaultPopulate: {
    slug: true,
    authors: true,
    authorType: true,
    category: true,
    dynamicThumbnail: true,
    featuredMedia: true,
    guestAuthor: true,
    guestSocials: true,
    image: true,
    publishedOn: true,
    relatedPosts: true,
    thumbnail: true,
    title: true,
    videoUrl: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "featuredMedia",
      type: "select",
      defaultValue: "upload",
      options: [
        {
          label: "Image Upload",
          value: "upload",
        },
        {
          label: "Video Embed",
          value: "videoUrl",
        },
      ],
    },
    {
      name: "image",
      type: "upload",
      admin: {
        condition: (_, siblingData) => siblingData?.featuredMedia === "upload",
      },
      relationTo: "media",
      required: true,
    },
    {
      name: "videoUrl",
      type: "text",
      admin: {
        condition: (_, siblingData) =>
          siblingData?.featuredMedia === "videoUrl",
      },
      label: "Video URL",
    },
    {
      name: "dynamicThumbnail",
      type: "checkbox",
      admin: {
        condition: (_, siblingData) =>
          siblingData?.featuredMedia === "videoUrl",
      },
      defaultValue: true,
      label: "Use dynamic thumbnail",
    },
    {
      name: "thumbnail",
      type: "upload",
      admin: {
        condition: (_, siblingData) =>
          !siblingData?.dynamicThumbnail &&
          siblingData?.featuredMedia !== "upload",
      },
      relationTo: "media",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "category",
          type: "relationship",
          admin: {
            width: "50%",
          },
          hooks: {
            afterChange: [
              async ({ previousValue, req, value }) => {
                try {
                  const category = await req.payload.findByID({
                    id: value,
                    collection: "categories",
                    select: {
                      slug: true,
                    },
                  });
                  if (!category) {
                    throw new Error("Category not found");
                  } else {
                    revalidatePath(`/blog`);
                    console.log(`Revalidated: /blog`);
                    revalidatePath(`/blog/${category.slug}`);
                    console.log(`Revalidated: /blog/${category.slug}`);
                  }

                  if (value !== previousValue) {
                    const previousCategory = await req.payload.findByID({
                      id: previousValue,
                      collection: "categories",
                      select: {
                        slug: true,
                      },
                    });
                    if (!previousCategory) {
                      throw new Error("Previous category not found");
                    } else {
                      revalidatePath(`/blog/${previousCategory.slug}`);
                      console.log(
                        `Revalidated: /blog/${previousCategory.slug}`,
                      );
                    }
                  }
                } catch (error) {
                  console.error(error);
                }
              },
            ],
          },
          relationTo: "categories",
          required: true,
        },
        {
          name: "tags",
          type: "text",
          admin: {
            width: "50%",
          },
          hasMany: true,
        },
      ],
    },
    richText({
      name: "excerpt",
    }),
    {
      name: "content",
      type: "blocks",
      blockReferences: ["blogContent", "code"],
      blocks: [],
      required: true,
    },
    {
      name: "relatedPosts",
      type: "relationship",
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        };
      },
      hasMany: true,
      relationTo: "posts",
    },
    slugField(),
    {
      name: "authorType",
      type: "select",
      admin: {
        position: "sidebar",
      },
      defaultValue: "team",
      options: [
        { label: "Guest", value: "guest" },
        { label: "Team", value: "team" },
      ],
    },
    {
      name: "authors",
      type: "relationship",
      admin: {
        condition: (_, siblingData) => siblingData?.authorType === "team",
        position: "sidebar",
      },
      hasMany: true,
      relationTo: "users",
      required: true,
    },
    {
      name: "guestAuthor",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData?.authorType === "guest",
        position: "sidebar",
      },
    },
    {
      type: "collapsible",
      admin: {
        condition: (_, siblingData) => siblingData?.authorType === "guest",
        initCollapsed: true,
        position: "sidebar",
      },
      fields: [
        {
          name: "guestSocials",
          type: "group",
          fields: [
            {
              name: "youtube",
              type: "text",
            },
            {
              name: "twitter",
              type: "text",
            },
            {
              name: "linkedin",
              type: "text",
            },
            {
              name: "website",
              type: "text",
            },
          ],
          label: false,
        },
      ],
      label: "Guest Author Socials",
    },
    {
      name: "publishedOn",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
      required: true,
    },
    //addToDocs,
  ],
  forceSelect: {
    relatedPosts: true,
  },
  hooks: {
    afterChange: [revalidatePageHook],
    afterDelete: [
      async ({ doc, req }) => {
        try {
          const category = await req.payload.findByID({
            id: doc.category,
            collection: "categories",
            select: {
              slug: true,
            },
          });

          if (!category) {
            throw new Error("Category not found");
          } else {
            revalidatePath(`/blog`);
            console.log(`Revalidated: /blog`);
            revalidatePath(`/blog/${category.slug}`);
            console.log(`Revalidated: /blog/${category.slug}`);
          }
        } catch (error) {
          console.error(error);
        }
      },
    ],
  },
  versions: {
    drafts: true,
  },
};
