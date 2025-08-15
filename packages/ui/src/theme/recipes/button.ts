import { defineRecipe } from "@chakra-ui/react";

/*
const variants = {
  blackWhite: {
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
  },
};
*/

export default defineRecipe({
  variants: {
    size: {
      xl: {
        extend: {
          fontSize: "xl",
          px: "6",
          h: "16",
        },
      },
    },
  },
  base: {
    fontWeight: "400",
  },
});
