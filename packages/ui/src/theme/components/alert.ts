import { alertAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    borderRadius: "lg",
  },
});

const defaultProps = {
  variant: "left-accent",
};

export default defineMultiStyleConfig({
  baseStyle,
  defaultProps,
});
