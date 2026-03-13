import { breadcrumbAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

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
