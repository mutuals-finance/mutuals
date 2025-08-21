import { drawerAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

export default defineSlotRecipe({
  slots: drawerAnatomy.keys(),
  base: { title: { fontWeight: "medium" } },
});
