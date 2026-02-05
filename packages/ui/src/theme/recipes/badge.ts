import { defineRecipe } from "@chakra-ui/react";

export default defineRecipe({
  base: {
    letterSpacing: "wider",
    textTransform: "uppercase",
    rounded: "full",
    fontWeight: "normal",
  },
  variants: {
    variant: {
      gradient: {
        color: "colorPalette.contrast",
        bgImage:
          "linear-gradient(to bottom right, {colors.colorPalette.muted}, {colors.colorPalette.emphasized}, {colors.colorPalette.muted}, {colors.colorPalette.muted}, {colors.colorPalette.muted})",
      },
    },
  },
});
