import { defineRecipe, defineStyle } from "@chakra-ui/react";

export default defineRecipe({
  variants: {
    visual: {
      "h.1": defineStyle({
        fontSize: "5xl",
      }),
      "h.2": defineStyle({
        fontSize: "3xl",
        color: "color.2",
      }),
    },
  },
  base: { fontWeight: "600", lineHeight: "1" },
});
