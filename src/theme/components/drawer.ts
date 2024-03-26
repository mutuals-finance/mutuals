import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { drawerAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(drawerAnatomy.keys);

const baseStyle = {
  dialog: {
    bg: 'bg.1',
  },
};
const variants = {};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
});
