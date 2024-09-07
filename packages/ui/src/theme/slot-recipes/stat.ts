import { statAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

/*
const baseStyle = {
  number: {
    fontWeight: "400",
  },
  label: {
    color: "alpha.2",
    fontWeight: "400",
  },
};

const defaultProps = {};

const variants = {};
*/

export default defineSlotRecipe({
  slots: statAnatomy.keys(),
});