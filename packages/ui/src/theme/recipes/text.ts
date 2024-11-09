import { defineRecipe } from "@chakra-ui/react";

export default defineRecipe({
  variants: {
    variant: {
      muted: {
        color: "fg.subtle",
        fontWeight: "medium",
      },
      subtag: {
        color: "fg.subtle",
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
