import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tab: {
    fontWeight: '500',
  },
});

const variants = {
  line: definePartsStyle({
    tab: { borderBottom: '2px solid', marginBottom: '-1px' },
    tablist: {
      borderBottom: '1px solid',
    },
  }),
};
const sizes = {
  md: definePartsStyle({
    // define the parts that will change for each size
    tab: {
      py: '3',
      px: '4',
    },
    tabpanel: {
      py: '3',
      px: '4',
    },
  }),
};
export default defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
});
