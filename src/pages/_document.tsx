import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import theme from '@/theme';
import { ColorModeScript } from '@chakra-ui/react';

export default class SplitFi extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
