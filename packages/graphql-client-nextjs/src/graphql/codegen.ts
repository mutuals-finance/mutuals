import type { CodegenConfig } from "@graphql-codegen/cli";
import sdkConfig from "../config";

const defaultConfig = {
  preset: "client",
  plugins: [],
  config: {
    // This avoid all generated schemas being wrapped in Maybe https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#maybevalue-string-default-value-t--null
    maybeValue: "T",
    useTypeImports: true,
    skipTypename: true,
    strictScalars: false,
    enumsAsConst: true,
    numericEnums: true,
  },
  presetConfig: {
    fragmentMasking: false,
  },
} as unknown as CodegenConfig["generates"];

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/graphql/data/__generated__/": {
      ...defaultConfig,
      schema: `${sdkConfig.urls.data}`,
      documents: [
        "./src/graphql/data/**/*.{ts,tsx}",
        "!./src/graphql/data/__generated__/**/*",
      ],
    },
  },
};

export default config;
