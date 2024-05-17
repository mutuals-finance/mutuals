import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { breadcrumbAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);

const baseStyle = {
  link: {},
};
const variants = {};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
});
