import { defineStyle, defineStyleConfig } from "@splitfi/ui";

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
