'use client';

import { PropsWithChildren } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as AnkrProvider } from 'ankr-react';

export default function ClientProviders({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <AnkrProvider
          apiKey={
            'cef60793f2f7367ec790a80c1d9070fca55c8c7b8ec1f353279bb53cccb8289d'
          }
        >
          {children}
        </AnkrProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
