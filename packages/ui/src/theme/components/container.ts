import { defineStyle } from "@chakra-ui/react";

const sizes = {
  "2xl": defineStyle({
    maxW: "96rem",
  }),
};

const Container = {
  sizes,
  baseStyle: {
    px: { base: "3", lg: "12" },
  },
  variants: {
    shell: {
      my: "12",
      maxW: "container.xl",
    },
  },
};

export default Container;
