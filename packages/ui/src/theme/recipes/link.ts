import { defineRecipe } from "@chakra-ui/react";

export default defineRecipe({
  base: {
    fontWeight: "medium",
    _focus: {
      outline: "none",
    },
  },
  variants: {
    variant: {
      underline: {
        _current: {
          textDecoration: "none",
          _hover: {
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            textDecorationColor: "currentColor/20",
          },
        },
      },

      plain: {
        _current: {
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          textDecorationColor: "currentColor/20",
        },
      },

      solid: {
        fontWeight: "medium",
        color: "colorPalette.fg/100",
        _hover: {
          color: "colorPalette.fg/70",
        },
        _current: {
          color: "colorPalette.fg/70",
          _hover: {
            color: "colorPalette.fg/100",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});
