import { extendTheme } from '@chakra-ui/react';

import { semanticTokens } from '~/styles/theme/foundations/tokens';

import { components } from './components';
import { colors } from './foundations/colors';
import { config } from './foundations/config';
import { styles } from './foundations/styles';
import { fonts, fontSizes } from './foundations/typography';

const customTheme = extendTheme({
  styles,
  fonts,
  fontSizes,
  colors,
  config,
  semanticTokens,
  components,
});

export default customTheme;
