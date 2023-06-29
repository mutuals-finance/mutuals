import { formAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(formAnatomy.keys);

const baseStyle = definePartsStyle((props) => ({
  container: {
    group: {},
    label: {
      fontSize: 'xs',
      color: props.colorMode === 'dark' ? 'gray.400' : 'gray.600',
      fontWeight: 'normal',
    },
  },
}));

export default defineMultiStyleConfig({
  baseStyle,
});
