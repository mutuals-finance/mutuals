import { tableAnatomy, tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
  th: {
    fontWeight: "500",
    textTransform: "uppercase",
    color: "color.3",
  },
});

export default defineMultiStyleConfig({
  baseStyle,
});
