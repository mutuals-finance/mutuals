import {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react";

import recipes from "./recipes";
import slotRecipes from "./slot-recipes";
import tokens from "./foundations/tokens";
import semanticTokens from "./foundations/semantic-tokens";
// import colors from "./foundations/colors";
// import styles from "./foundations/styles";
import textStyles from "./foundations/text-styles";
import layerStyles from "./foundations/layer-styles";

const customConfig = defineConfig({
  theme: {
    // styles,
    //colors,
    // @ts-expect-error: css typing error not valid
    cursor: {
      button: { value: "pointer" },
    },
    textStyles,
    layerStyles,
    tokens,
    semanticTokens,
    recipes,
    slotRecipes,
  },
});

const systemConfig = mergeConfigs(defaultConfig, customConfig);

export default createSystem(systemConfig);
