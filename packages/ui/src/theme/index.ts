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
// import styles from "./foundations/styles";
import textStyles from "./foundations/text-styles";
import layerStyles from "./foundations/layer-styles";
import colors from "./foundations/colors";

const customConfig = defineConfig({
  theme: {
    // styles,
    textStyles,
    layerStyles,
    tokens: { colors, ...tokens },
    semanticTokens,
    recipes,
    slotRecipes,
  },
});

const systemConfig = mergeConfigs(defaultConfig, customConfig);

export default createSystem(systemConfig);
