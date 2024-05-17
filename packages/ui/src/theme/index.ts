import { extendTheme } from "@chakra-ui/react";

import components from "./components";
import semanticTokens from "./foundations/tokens";
import colors from "./foundations/colors";
import config from "./foundations/config";
import styles from "./foundations/styles";
import typography from "./foundations/typography";

const { fonts, fontSizes } = typography;

export default extendTheme({
  styles,
  fonts,
  fontSizes,
  colors,
  config,
  semanticTokens,
  components,
});
