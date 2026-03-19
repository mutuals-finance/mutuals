import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { redirectsPlugin } from "@payloadcms/plugin-redirects";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig, type Config } from "payload";
import { BlogContent, BlogMarkdown, Code } from "./blocks";
import { Categories, Media, Posts, Users } from "./collections";
import { revalidateRedirects } from "./hooks/revalidate-redirects";
import { deepMerge } from "./utils";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const baseConfig: Config = {
  admin: {
    user: Users.slug,
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
            `${process.env.BLOB_BASE_URL}/${filename}`,
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
};

export const configurePayload = (overrides?: Partial<Config>) => {
  return buildConfig(deepMerge(baseConfig, overrides ?? {}));
};
