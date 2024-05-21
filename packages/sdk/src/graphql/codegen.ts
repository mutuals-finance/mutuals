import type { CodegenConfig } from "@graphql-codegen/cli";
import sdkConfig from "../config";

const config: CodegenConfig = {
  overwrite: true,
  schema: sdkConfig.urls.thegraph,
  documents: ["./src/graphql/**/*.ts", "!./src/graphql/__generated__/**/*"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/graphql/__generated__/": {
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
