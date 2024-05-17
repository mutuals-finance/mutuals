import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  fontWeight: "500",
  lineHeight: "1.2",
};

const variants = {
  "h.1": defineStyle({
    fontSize: "6xl",
  }),
  "h.2": defineStyle({
    fontSize: "3xl",
    fontWeight: "700",
    color: "color.2",
  }),
};

export default defineStyleConfig({
  baseStyle,
  variants,
});