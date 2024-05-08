import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { drawerAnatomy, menuAnatomy, statAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(statAnatomy.keys);

const baseStyle = {
  number: {
    fontWeight: '400',
  },
  label: {
    fontWeight: '400',
  },
};
const variants = {};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
});
