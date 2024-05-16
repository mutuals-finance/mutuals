import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

const blackWhite = defineStyle({
  background: "black",
  color: "white",
  _hover: {
    background: "gray.700",
  },
  _active: {
    background: "gray.600",
  },
  _dark: {
    background: "white",
    color: "black",
    _hover: {
      background: "gray.200",
    },
    _active: {
      background: "gray.300",
    },
  },
});

export const Button = defineStyleConfig({
  baseStyle: { rounded: "lg", fontWeight: "400" },
  variants: { blackWhite },
});
