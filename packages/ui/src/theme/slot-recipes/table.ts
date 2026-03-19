import { defineSlotRecipe } from "@chakra-ui/react";
import { tableAnatomy } from "@chakra-ui/react/anatomy";

/*
const baseStyle = definePartsStyle({
  th: {
    fontWeight: "500",
    textTransform: "uppercase",
    color: "color.3",
  },
});
*/

export default defineSlotRecipe({
  slots: tableAnatomy.keys(),
});
