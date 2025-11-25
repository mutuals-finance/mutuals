import { defineRecipe } from "@chakra-ui/react";

const variants = {
  blur: {
    true: {
      css: {
        backdropFilter: "blur(12px)",
        "--mix-background":
          "color-mix(in srgb, var(--bg-currentcolor) 80%, transparent)",
      },
      bg: "var(--mix-background, var(--bg-currentcolor))",
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
  base: { fontWeight: "500" },
});
