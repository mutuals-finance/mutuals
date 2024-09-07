import { alertAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

/*
const baseStyle = definePartsStyle({
  container: {
    borderRadius: "lg",
  },
});

const defaultProps = {
  variant: "left-accent",
};
*/

export default defineSlotRecipe({
  slots: alertAnatomy.keys(),
});
