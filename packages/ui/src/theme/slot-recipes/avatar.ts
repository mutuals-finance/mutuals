import { avatarAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

export default defineSlotRecipe({
  slots: avatarAnatomy.keys(),
  variants: {
    size: {
      "2xs": {
        root: { width: "4", height: "4" },
        fallback: {
          fontSize: "0.4rem",
        },
      },
    },
  },
});
