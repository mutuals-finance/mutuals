import {
  defineStyle,
  defineStyleConfig,
  StyleFunctionProps,
} from '@chakra-ui/react';
import defaultTheme from '@chakra-ui/theme';

const xl = defineStyle({
  fontSize: 'xl',
  px: '6',
  h: '16',
});

const variants = {
  navParent: defineStyle({
    fontWeight: '500',
    textAlign: 'left',
    justifyContent: 'flex-start',
  }),
};

export default defineStyleConfig({
  sizes: { xl },
  variants,
  baseStyle: {
    borderRadius: 'lg',
  },
});
