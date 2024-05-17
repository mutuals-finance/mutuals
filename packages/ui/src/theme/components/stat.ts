import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { statAnatomy } from "@chakra-ui/anatomy";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  statAnatomy.keys,
);

const baseStyle = {
  number: {
    fontWeight: "400",
  },
  label: {
    fontWeight: "400",
  },
};
const variants = {};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
});
