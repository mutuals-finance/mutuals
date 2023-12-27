import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { drawerAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(drawerAnatomy.keys);

const variants = {};

export default defineMultiStyleConfig({
  variants,
});
