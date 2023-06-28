import { extendTheme } from '@chakra-ui/react';

import components from './components';
import { fontSizes } from './foundations/typography';

const styles = {
  global: () => ({
    body: {},
  }),
};

export default extendTheme({
  config: {},
  styles,
  fontSizes,
  components,
});
