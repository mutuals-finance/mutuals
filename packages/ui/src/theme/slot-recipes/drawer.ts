import { defineSlotRecipe } from "@chakra-ui/react";
import { drawerAnatomy } from "@chakra-ui/react/anatomy";

export default defineSlotRecipe({
  slots: drawerAnatomy.keys(),
  base: { title: { fontWeight: "medium" } },
});
