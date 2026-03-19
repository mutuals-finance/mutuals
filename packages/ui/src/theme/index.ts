import {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react";

export {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react";

import animationStyles from "./foundations/animation-styles";
import colors from "./foundations/colors";
import keyframes from "./foundations/keyframes";
import layerStyles from "./foundations/layer-styles";
import semanticTokens from "./foundations/semantic-tokens";
import textStyles from "./foundations/text-styles";
import tokens from "./foundations/tokens";
import recipes from "./recipes";
import slotRecipes from "./slot-recipes";

export const customConfig = defineConfig({
  theme: {
    keyframes,
    textStyles,
    layerStyles,
    tokens: { colors, ...tokens },
    semanticTokens,
    recipes,
    slotRecipes,
    animationStyles,
  },
});

export const systemConfig = mergeConfigs(defaultConfig, customConfig);

export default createSystem(systemConfig);
