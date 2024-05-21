import type { CodegenConfig } from "@graphql-codegen/cli";
import sdkConfig from "../config";

const schema = sdkConfig.urls.thegraph;

const config: CodegenConfig = {
  overwrite: true,
  schema,
  documents: [
    "./src/graphql/**/*.{ts,tsx}",
    "!./src/graphql/__generated__/**/*",
  ],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/graphql/__generated__/": {
      preset: "client",
      plugins: [],
      config: {
        // This avoid all generated schemas being wrapped in Maybe https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#maybevalue-string-default-value-t--null
        maybeValue: "T",
        useTypeImports: true,
        skipTypename: true,
        strictScalars: true,
        scalars: {
          BigDecimal: "BigInt",
          BigInt: "BigInt",
          Bytes: "string",
          Int8: "BigInt",
          Timestamp: "number",
        },
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
