import { defineRecipe } from "@chakra-ui/react";

export default defineRecipe({
  variants: {
    visual: {
      solid: {
        textStyle: "link",
        _hover: {
          color: "fg.subtle",
        },
        _active: {
          color: "fg.muted",
        },
      },
      subtle: {
        textStyle: "link",
        color: "fg.muted",
        _hover: {
          color: "fg",
        },
        _active: {
          color: "fg.subtle",
        },
      },
      plain: {},
    },
  },
  defaultVariants: {
    visual: "solid",
  },
});
