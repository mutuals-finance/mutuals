import {
  defineStyle,
  defineStyleConfig,
} from "@chakra-ui/react";

const xl = defineStyle({
  fontSize: "xl",
  px: "6",
  h: "16",
});

const variants = {
  navParent: defineStyle({
    textAlign: "left",
    justifyContent: "flex-start",
  }),
  blackWhite: defineStyle({
    bg: "gray.900",
    color: "white",
    _dark: {
      bg: "gray.50",
      color: "gray.900",
    },
    _hover: {
      bg: "gray.700",

      _dark: {
        bg: "gray.200",
      },
    },
    _active: {
      bg: "gray.800",

      _dark: {
        bg: "gray.100",
      },
    },
  }),
};

export default defineStyleConfig({
  sizes: { xl },
  variants,
  baseStyle: {
    fontWeight: "400",
    borderRadius: "md",
  },
});
