import { statAnatomy, tableAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

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
