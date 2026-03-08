import { defineRecipe } from "@chakra-ui/react";

export default defineRecipe({
  variants: {
    variant: {
      muted: {
        color: "fg.subtle",
      },
      subtag: {
        color: "colorPalette.solid",
        fontFamily: "heading",
        textTransform: "uppercase",
        letterSpacing: "widest",
        lineHeight: "widest",
        fontWeight: "medium",
      },
    },
  },
  base: {
    fontWeight: "400",
  },
});
