import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

const baseStyle = {
  fontWeight: "600",
  color: "color.1",
  textDecoration: "none",
  fontFamily: "var(--chakra-fonts-heading)",
  _hover: {
    color: "alpha.2",
    textDecoration: "none",
  },
  _active: {
    color: "alpha.1",
  },
};

const dense = defineStyle({
  color: "alpha.2",
  _hover: {
    color: "color.1",
  },
  _active: {
    color: "alpha.1",
  },
});

export default defineStyleConfig({
  baseStyle,
  variants: { dense },
});
