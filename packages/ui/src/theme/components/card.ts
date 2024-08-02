import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: { rounded: "md" },
});

const variants = {
  filled: definePartsStyle({
    container: {
      bg: "bg.3",
    },
  }),
  outline: definePartsStyle({
    container: {
      bg: "bg.1",
      borderColor: "border.1",
      borderWidth: "2px",
    },
  }),
  transparent: definePartsStyle({
    container: {
      bg: "transparent",
    },
  }),
};

const defaultProps = {};

export default defineMultiStyleConfig({
  baseStyle,
  defaultProps,
  variants,
});
