import { defineStyleConfig, useColorModeValue } from '@chakra-ui/react';

export default defineStyleConfig({
  variants: {
    'slashed-zero': {
      fontVariantNumeric: 'slashed-zero',
    },
    'label-mono': {
      fontFamily: 'monospace',
      fontWeight: '500',
      color: 'alpha.1',
    },
    label: {
      color: 'alpha.1',
      fontWeight: '500',
    },
  },
});
