import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = {
  fontWeight: '500',
  lineHeight: '1.2',
};
const first = defineStyle({
  fontSize: '6xl',
});

const second = defineStyle({
  fontSize: '3xl',
  fontWeight: '700',
  color: 'color.2',
});

export const Heading = defineStyleConfig({
  baseStyle,
  defaultProps: {},
  variants: {
    'h.1': first,
    'h.2': second,
  },
});
