import { menuAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

/*
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
  separator: {
    borderColor: "border.1",
  },
};
const variants = {};
*/

export default defineSlotRecipe({
  slots: menuAnatomy.keys(),
});
