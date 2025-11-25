import { defineRecipe } from "@chakra-ui/react";

const variants = {
  blurred: {
    true: {
      bg: "colorPalette.600/75",
      css: {
        backdropFilter: "blur(12px)",
      },
      //background: "var(--mix-background, var(--colors-red-300))",
      //       "--mix-background":
      //         "color-mix(in srgb, var(--colors-red-300) 40%, transparent)",
    },
  },
  enlarge: {
    true: {
      willChange: "transform",
      transition: "scale 0.1s ease-in",
      _active: {
        scale: "0.95",
      },
    },
  },
};

export default defineRecipe({
  variants,
  defaultVariants: { enlarge: true },
  base: { fontWeight: "400" },
});
