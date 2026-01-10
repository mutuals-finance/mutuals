import { defineRecipe } from "@chakra-ui/react";

const variants = {
  size: {
    /*
    "2xs": {
      h: "7",
      minH: "7",
    },
    xs: {
      h: "9",
      minW: "9",
    },
    sm: {
      h: "10",
      minW: "10",
    },
    md: {
      h: "11",
      minW: "11",
    },
    lg: {
      h: "12",
      minW: "12",
    },
    xl: {
      h: "14", // 12
      minW: "14",
    },
    "2xl": {
      h: "16", // 16
      minW: "16",
    },
*/
  },
  blurred: {
    true: {
      backdropFilter: "blur(12px)",
    },
  },
  enlarge: {
    true: {
      willChange: "transform",
      transitionProperty: "transform",
      transitionDuration: "fast",
      _active: {
        transform: "scale(0.95)",
      },
    },
  },
  variant: { solid: {}, subtle: {}, surface: {}, ghost: {}, outline: {} },
};

export default defineRecipe({
  variants,
  compoundVariants: [
    {
      variant: "solid",
      blurred: true,
      css: {
        "--mix-background":
          "color-mix(in srgb, var(--chakra-colors-color-palette-solid) 40%, transparent)",
        bg: "var(--mix-background, var(--chakra-colors-color-palette-solid))",
        _hover: {
          "--mix-background":
            "color-mix(in srgb, var(--chakra-colors-color-palette-solid) 50%, transparent)",
          bg: "var(--mix-background, var(--chakra-colors-color-palette-solid))",
        },
      },
    },
    {
      variant: "subtle",
      blurred: true,
      css: {
        "--mix-background":
          "color-mix(in srgb, var(--chakra-colors-color-palette-subtle) 40%, transparent)",
        bg: "var(--mix-background, var(--chakra-colors-color-palette-subtle))",
        _hover: {
          "--mix-background":
            "color-mix(in srgb, var(--chakra-colors-color-palette-muted) 50%, transparent)",
          bg: "var(--mix-background, var(--chakra-colors-color-palette-muted))",
        },
      },
    },
    {
      variant: "surface",
      blurred: true,
      css: {
        "--mix-background":
          "color-mix(in srgb, var(--chakra-colors-color-palette-subtle) 40%, transparent)",
        bg: "var(--mix-background, var(--chakra-colors-color-palette-subtle))",
        _hover: {
          "--mix-background":
            "color-mix(in srgb, var(--chakra-colors-color-palette-muted) 50%, transparent)",
          bg: "var(--mix-background, var(--chakra-colors-color-palette-muted))",
        },
      },
    },
    {
      variant: "outline",
      blurred: true,
      css: {
        "--mix-background":
          "color-mix(in srgb, var(--chakra-colors-bg) 40%, transparent)",
        bg: "var(--mix-background, var(--chakra-colors-bg))",
        _hover: {
          "--mix-background":
            "color-mix(in srgb, var(--chakra-colors-color-palette-subtle) 50%, transparent)",
          bg: "var(--mix-background, var(--chakra-colors-color-palette-subtle))",
        },
      },
    },
    {
      variant: "ghost",
      blurred: true,
      css: {
        "--mix-background":
          "color-mix(in srgb, var(--chakra-colors-bg) 30%, transparent)",
        bg: "var(--mix-background, transparent)",
        _hover: {
          "--mix-background":
            "color-mix(in srgb, var(--chakra-colors-color-palette-subtle) 40%, transparent)",
          bg: "var(--mix-background, var(--chakra-colors-color-palette-subtle))",
        },
      },
    },
  ],
  defaultVariants: { enlarge: true },
  base: { fontWeight: "400", rounded: "full" },
});
