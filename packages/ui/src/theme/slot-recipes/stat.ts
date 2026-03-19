import { defineSlotRecipe } from "@chakra-ui/react";
import { statAnatomy } from "@chakra-ui/react/anatomy";

/*
const baseStyle = {
  number: {
    fontWeight: "400",
  },
  label: {
    color: "fg.muted",
    fontWeight: "400",
  },
};

const defaultProps = {};

const variants = {};
*/

export default defineSlotRecipe({
  slots: statAnatomy.keys(),
  base: {
    valueText: {
      fontWeight: "normal",
    },
  },
});
