import { defineRecipe, defineStyle } from "@chakra-ui/react";

export default defineRecipe({
  variants: {
    size: {
      "2xl": defineStyle({
        maxW: "96rem",
      }),
    },
    visual: {
      shell: {
        my: "12",
        maxW: "container.xl",
      },
    },
  },
  base: {
    px: { base: "6", lg: "12" },
  },
});
