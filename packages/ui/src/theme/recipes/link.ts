import { defineRecipe } from "@chakra-ui/react";

export default defineRecipe({
  variants: {
    visual: {
      solid: {
        textStyle: "link",
        _hover: {
          color: "fg.muted",
        },
        _active: {
          color: "fg.subtle",
        },
      },
      subtle: {
        textStyle: "link",
        color: "fg.subtle",
        _hover: {
          color: "fg",
        },
        _active: {
          color: "fg.muted",
        },
      },
      plain: {},
    },
  },
  defaultVariants: {
    visual: "solid",
  },
});
