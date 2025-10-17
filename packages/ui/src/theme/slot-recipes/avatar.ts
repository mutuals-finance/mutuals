import { avatarAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

export default defineSlotRecipe({
  slots: avatarAnatomy.keys(),
  variants: {
    size: {
      "2xs": {
        root: { width: "6", height: "6", fontSize: "2xs" },
      },
    },
  },
});
