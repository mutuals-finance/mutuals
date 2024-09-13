import { defineRecipe } from "@chakra-ui/react";

export default defineRecipe({
  variants: {
    variant: {
      muted: {
        color: "fg.muted",
        fontWeight: "medium",
      },
      subtag: {
        color: "fg.muted",
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
