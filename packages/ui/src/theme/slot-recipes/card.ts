import { cardAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

/*
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
*/

export default defineSlotRecipe({
  slots: cardAnatomy.keys(),
  variants: {},
});
