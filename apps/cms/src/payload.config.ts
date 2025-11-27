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
import { revalidateRedirects } from "@/hooks/revalidateRedirects";

import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { redirectsPlugin } from "@payloadcms/plugin-redirects";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { BlogContent } from "@/blocks/BlogContent";
import { Code } from "@/blocks/Code";
import { BlogMarkdown } from "@/blocks/BlogMarkdown";

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
  blocks: [BlogContent, BlogMarkdown, Code],
  collections: [Media, Posts, Categories, Users],
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
  graphQL: {
    disablePlaygroundInProduction: false,
  },
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
