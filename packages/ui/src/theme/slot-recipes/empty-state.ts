import { emptyStateAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

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
