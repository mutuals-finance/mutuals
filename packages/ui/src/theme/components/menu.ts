import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { menuAnatomy } from "@chakra-ui/anatomy";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  menuAnatomy.keys,
);

const baseStyle = {
  list: {
    bg: "bg.1",
    border: "border.1",
  },
  item: {
    bg: "bg.1",
    _hover: {
      bg: "bg.2",
    },
    _focus: {
      bg: "bg.2",
    },
  },
  divider: {
    borderColor: "border.1",
  },
};
const variants = {};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
});
