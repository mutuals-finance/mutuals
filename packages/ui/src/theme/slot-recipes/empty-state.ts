import { defineSlotRecipe } from "@chakra-ui/react";
import { emptyStateAnatomy } from "@chakra-ui/react/anatomy";

export default defineSlotRecipe({
  slots: emptyStateAnatomy.keys(),
  base: {
    title: {
      fontWeight: "medium",
    },
    description: {
      fontWeight: "normal",
    },
  },
});
