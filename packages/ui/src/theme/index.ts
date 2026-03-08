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

import keyframes from "./foundations/keyframes";
import textStyles from "./foundations/text-styles";
import layerStyles from "./foundations/layer-styles";
import colors from "./foundations/colors";
import animationStyles from "./foundations/animation-styles";

export { createSystem, defaultConfig, defineConfig, mergeConfigs };

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
