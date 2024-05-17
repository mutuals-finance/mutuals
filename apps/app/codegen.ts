import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.thegraph.com/subgraphs/name/fapiper/splitfi-test-2",
  documents: [
    "./src/lib/graphql/**/*.ts",
    "!./src/lib/graphql/__generated__/**/*",
  ],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/lib/graphql/__generated__/": {
      preset: "client",
      plugins: [],
      config: {
        // This avoid all generated schemas being wrapped in Maybe https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#maybevalue-string-default-value-t--null
        maybeValue: "T",
      },
    },
  },
};

export default config;
