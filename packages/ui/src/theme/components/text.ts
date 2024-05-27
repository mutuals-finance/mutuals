import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  fontWeight: "400",
};

const variants = {
  "slashed-zero": {
    fontFamily: "monospace",
    fontVariantNumeric: "slashed-zero",
  },
  label: {
    color: "color.3",
  },
  tag: defineStyle({
    fontFamily: "monospace",
    color: "color.3",
    textTransform: "uppercase",
    fontWeight: "500",
    letterSpacing: "0.05rem",
  }),
};

export default defineStyleConfig({
  baseStyle,
  variants,
});
