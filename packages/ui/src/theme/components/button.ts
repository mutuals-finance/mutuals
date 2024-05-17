import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

const sizes = {
  xl: defineStyle({
    fontSize: "xl",
    px: "6",
    h: "16",
  }),
};

const variants = {
  blackWhite: defineStyle({
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
  }),
};

const baseStyle = {
  fontWeight: "400",
  rounded: "lg",
};

export default defineStyleConfig({
  sizes,
  variants,
  baseStyle,
});
