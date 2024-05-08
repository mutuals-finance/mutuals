import { defineStyleConfig, useColorModeValue } from '@chakra-ui/react';

const baseStyle = { fontWeight: '400' };

export default defineStyleConfig({
  baseStyle,
  variants: {
    'slashed-zero': {
      fontFamily: 'monospace',
      fontVariantNumeric: 'slashed-zero',
    },
    'label-mono': {
      fontFamily: 'monospace',
      color: 'color.3',
    },
    label: {
      color: 'color.3',
    },
  },
});
