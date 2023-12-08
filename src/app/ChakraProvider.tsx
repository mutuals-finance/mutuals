'use client';

import { PropsWithChildren } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as ReactChakraProvider } from '@chakra-ui/react';

import theme from '@/theme';

export default function ChakraProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ReactChakraProvider theme={theme}>{children}</ReactChakraProvider>
    </CacheProvider>
  );
}
