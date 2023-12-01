import { ApolloProvider } from '@apollo/client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as AnkrProvider } from 'ankr-react';
import { AppProps } from 'next/app';
import React from 'react';
import { WagmiConfig } from 'wagmi';

import { useApollo } from '@/lib/graphql/client';
import { useWagmi } from '@/lib/wagmi';

import theme from '@/theme';

export default function AppProviders({
  children,
  ...pageProps
}: React.PropsWithChildren<AppProps['pageProps']>) {
  const apolloClient = useApollo(pageProps);
  const wagmiConfig = useWagmi();

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <AnkrProvider
            apiKey={
              'cef60793f2f7367ec790a80c1d9070fca55c8c7b8ec1f353279bb53cccb8289d'
            }
          >
            <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
          </AnkrProvider>
        </ApolloProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
