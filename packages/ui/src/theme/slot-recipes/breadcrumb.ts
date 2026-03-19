import { defineSlotRecipe } from "@chakra-ui/react";
import { breadcrumbAnatomy } from "@chakra-ui/react/anatomy";

export default defineSlotRecipe({
  slots: breadcrumbAnatomy.keys(),
  base: {
    link: {
      _focus: {
        outline: "none",
      },
    },
  },
});
