import { defineSlotRecipe } from "@chakra-ui/react";
import { numberInputAnatomy } from "@chakra-ui/react/anatomy";

export default defineSlotRecipe({
  slots: numberInputAnatomy.keys(),
  defaultVariants: {
    // @ts-expect-error: pandas is currently not typesafe
    root: {
      visual: "filled",
    },
    incrementTrigger: {
      visual: "subtle",
    },
    decrementTrigger: {
      visual: "subtle",
    },
  },
});
