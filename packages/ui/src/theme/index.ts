import {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react";

import recipes from "./recipes";
import slotRecipes from "./slot-recipes";
import semanticTokens from "./foundations/semantic-tokens";
// import colors from "./foundations/colors";
// import styles from "./foundations/styles";
import textStyles from "./foundations/text-styles";

const customConfig = defineConfig({
  theme: {
    // styles,
    //colors,
    textStyles,
    semanticTokens,
    recipes,
    slotRecipes,
  },
});

const systemConfig = mergeConfigs(defaultConfig, customConfig);

export default createSystem(systemConfig);
