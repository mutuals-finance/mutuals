import { drawerAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

/*
const baseStyle = {
  dialog: {
    bg: "bg.1",
  },
};
const variants = {};
*/

export default defineSlotRecipe({
  slots: drawerAnatomy.keys(),
});
