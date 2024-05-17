import { extendTheme } from "@chakra-ui/react";

import colors from "@/theme/foundations/colors";

import components from "./components";
import styles from "./foundations/styles";
import semanticTokens from "./foundations/tokens";
import { fonts, fontSizes } from "./foundations/typography";

export default extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  colors,
  styles,
  semanticTokens,
  fontSizes,
  fonts,
  components,
});
