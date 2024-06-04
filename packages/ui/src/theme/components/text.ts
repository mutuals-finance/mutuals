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
    color: "alpha.2",
    fontWeight: "500",
  },
  tag: defineStyle({
    fontFamily: "monospace",
    color: "alpha.3",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: "0.05em",
  }),
};

export default defineStyleConfig({
  baseStyle,
  variants,
});
