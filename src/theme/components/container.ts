import { StyleFunctionProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Container = {
  baseStyle: {
    px: { base: '6', lg: '12' },
  },
  variants: {
    shell: {
      my: '12',
      maxW: 'container.xl',
    },
  },
};

export default Container;
