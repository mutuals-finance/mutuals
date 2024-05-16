import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  fontWeight: "400",
};

const tag = defineStyle({
  color: "color.primary",
  textTransform: "uppercase",
  fontSize: "xs",
  fontWeight: "500",
  _dark: {
    color: "color.primary",
  },
});

// prevent redeclare of global Text definition from lib dom
export const ChakraText = defineStyleConfig({
  baseStyle,
  defaultProps: {},
  variants: {
    tag,
  },
});
