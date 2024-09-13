import { defineRecipe } from "@chakra-ui/react";

export default defineRecipe({
  variants: {
    visual: {
      dense: {
        color: "fg.muted",
        _hover: {
          color: "color.1",
        },
        _active: {
          color: "fg.subtle",
        },
      },
    },
  },
  base: {
    fontWeight: "medium",
    textDecoration: "none",
    textDecorationLine: "none",
    fontFamily: "{fonts.heading}",
    _hover: {
      color: "fg.subtle",
      textDecoration: "none",
      textDecorationLine: "none",
    },
    _active: {
      color: "fg.muted",
    },
  },
});
