"use client";

import { defineConfig } from "@mutuals/ui";
import {
  mergeConfigs,
  defaultConfig,
  createSystem,
  customConfig,
} from "@mutuals/ui/theme";

const config = defineConfig({
  globalCss: {
    ":root": {
      "--header-height": { base: "64px", md: "104px" },
      "--content-height": "calc(100dvh - var(--header-height))",
    },
  },
});

const docsSystemConfig = mergeConfigs(defaultConfig, customConfig, config);
export default createSystem(docsSystemConfig);
