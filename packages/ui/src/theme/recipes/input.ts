import { defineRecipe } from "@chakra-ui/react";

export default defineRecipe({
  defaultVariants: {
    // @ts-expect-error: pandas is currently not typesafe
    variant: "filled",
  },
});
