'use client';

import { PropsWithChildren } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { Provider as AnkrProvider } from 'ankr-react';
import theme from '@/theme';
import ApolloProvider from './ApolloProvider';
import { WagmiConfig } from 'wagmi';
import { useWagmi } from '@/lib/wagmi';
import { ChakraProvider } from '@chakra-ui/react';

export default function Providers({ children }: PropsWithChildren) {
  const wagmiConfig = useWagmi();

  // const cookieStore = cookies();
  // const delay = Number(cookieStore.get('apollo-x-custom-delay')?.value ?? 1000);

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ApolloProvider delay={1000}>
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
