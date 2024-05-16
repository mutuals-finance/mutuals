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

export const Text = defineStyleConfig({
  baseStyle,
  defaultProps: {},
  variants: {
    tag,
  },
});
