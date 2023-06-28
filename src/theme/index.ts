import { extendTheme } from '@chakra-ui/react';

import components from './components';
import { fontSizes } from './foundations/typography';

const styles = {
  global: () => ({
    body: {
      color: 'gray.900',
      bg: 'white',
      fontSize: 'lg',
      _dark: {
        color: 'white',
        bg: 'gray.900',
      },
    },
  }),
};

export default extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles,
  fontSizes,
  components,
});
