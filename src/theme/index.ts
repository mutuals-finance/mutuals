import { extendTheme } from '@chakra-ui/react';

import components from './components';
import { fonts, fontSizes } from './foundations/typography';

const styles = {
  global: () => ({
    body: {},
  }),
};

export default extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  styles,
  fontSizes,
  fonts,
  components,
});
