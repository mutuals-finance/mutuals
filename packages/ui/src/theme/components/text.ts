import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  fontWeight: "400",
};

const variants = {
  "slashed-zero": {
    fontFamily: "monospace",
    fontVariantNumeric: "slashed-zero",
  },
  "label-mono": {
    fontFamily: "monospace",
    color: "color.3",
  },
  label: {
    color: "color.3",
  },
  tag: defineStyle({
    color: "color.primary",
    textTransform: "uppercase",
    fontSize: "xs",
    fontWeight: "500",
    _dark: {
      color: "color.primary",
    },
  }),
};

export default defineStyleConfig({
  baseStyle,
  variants,
});
