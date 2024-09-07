import { defineRecipe } from "@chakra-ui/react";

export default defineRecipe({
  variants: {
    visual: {
      dense: {
        color: "alpha.2",
        _hover: {
          color: "color.1",
        },
        _active: {
          color: "alpha.1",
        },
      },
    },
  },
  base: {
    fontWeight: "600",
    color: "color.1",
    textDecoration: "none",
    fontFamily: "var(--chakra-fonts-heading)",
    _hover: {
      color: "alpha.2",
      textDecoration: "none",
    },
    _active: {
      color: "alpha.1",
    },
  },
});
