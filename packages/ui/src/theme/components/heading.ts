import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  fontWeight: "600",
  lineHeight: "1",
};

const variants = {
  "h.1": defineStyle({
    fontSize: "5xl",
  }),
  "h.2": defineStyle({
    fontSize: "3xl",
    color: "color.2",
  }),
};

export default defineStyleConfig({
  baseStyle,
  variants,
});
