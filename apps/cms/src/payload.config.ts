// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Posts } from "@/collections/Posts";
import { Categories } from "@/collections/Categories";
import { ReusableContent } from "@/collections/ReusableContent";
import { revalidateRedirects } from "@/hooks/revalidateRedirects";

import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { redirectsPlugin } from "@payloadcms/plugin-redirects";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { BlogContent } from "@/blocks/BlogContent";
import { Code } from "@/blocks/Code";
import { BlogMarkdown } from "@/blocks/BlogMarkdown";
import { MediaBlock } from "@/blocks/Media";
import { ReusableContent as ReusableContentBlock } from "@/blocks/ReusableContent";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    autoLogin: {
      email: "dev@payloadcms.com",
      password: "test",
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  blocks: [
    BlogContent,
    BlogMarkdown,
    /*
    CodeExampleBlock,
    MediaExampleBlock,
    Callout,
    CallToAction,
    DownloadBlock,
    LightDarkImageBlock,
    TableWithDrawersBlock,
    YoutubeBlock,
    CardGrid,
    CaseStudyCards,
    CaseStudiesHighlight,
    UploadBlock,
    CaseStudyParallax,
    CodeFeature,
    Content,
    ContentGrid,
    ComparisonTable,
    Form,
    HoverCards,
    HoverHighlights,
    LinkGrid,
    LogoGrid,
*/
    MediaBlock,
    /*
    MediaContent,
    MediaContentAccordion,
    RestExamplesBlock,
    Pricing,
*/
    ReusableContentBlock,
    /*
    ResourceBlock,
    Slider,
    Statement,
    Steps,
    StickyHighlights,
    ExampleTabs,
    {
      slug: "spotlight",
      fields: [
        {
          name: "element",
          type: "select",
          options: [
            {
              label: "H1",
              value: "h1",
            },
            {
              label: "H2",
              value: "h2",
            },
            {
              label: "H3",
              value: "h3",
            },
            {
              label: "Paragraph",
              value: "p",
            },
          ],
        },
        {
          name: "richText",
          type: "richText",
          editor: lexicalEditor(),
        },
      ],
      interfaceName: "SpotlightBlock",
    },
    {
      slug: "video",
      fields: [
        {
          name: "url",
          type: "text",
        },
      ],
      interfaceName: "VideoBlock",
    },
    {
      slug: "br",
      fields: [
        {
          name: "ignore",
          type: "text",
        },
      ],

      interfaceName: "BrBlock",
    },
    VideoDrawerBlock,
    {
      slug: "commandLine",
      fields: [
        {
          name: "command",
          type: "text",
        },
      ],
      interfaceName: "CommandLineBlock",
    },
    {
      slug: "command",
      fields: [
        {
          name: "command",
          type: "text",
          required: true,
        },
      ],
      labels: {
        plural: "Command Lines",
        singular: "Command Line",
      },
    },
    {
      slug: "link",
      fields: [link()],
      labels: {
        plural: "Links",
        singular: "Link",
      },
    },
    {
      slug: "templateCards",
      fields: [
        {
          name: "templates",
          type: "array",
          fields: [
            {
              name: "name",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: true,
            },
            {
              name: "image",
              type: "text",
              required: true,
            },
            {
              name: "slug",
              type: "text",
              required: true,
            },
            {
              name: "order",
              type: "number",
              required: true,
            },
          ],
          labels: {
            plural: "Templates",
            singular: "Template",
          },
        },
      ],
      interfaceName: "TemplateCardsBlock",
    },
    BannerBlock,
    CodeBlock,
*/
    Code,
  ],
  collections: [Media, Posts, Categories, Users, ReusableContent],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ["posts"],
      globals: ["get-started"],
      uploadsCollection: "media",
    }),
    redirectsPlugin({
      collections: ["posts"],
      overrides: {
        hooks: {
          afterChange: [revalidateRedirects],
        },
      },
    }),
    vercelBlobStorage({
      cacheControlMaxAge: 60 * 60 * 24 * 365, // 1 year
      collections: {
        media: {
          generateFileURL: ({ filename }) =>
            `https://${process.env.BLOB_STORE_ID}/${filename}`,
        },
      },
      enabled: Boolean(process.env.BLOB_STORAGE_ENABLED) || false,
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
});
