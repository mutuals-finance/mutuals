import { ApolloProvider } from '@apollo/client';
import { Provider as AnkrProvider } from 'ankr-react';
import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { WagmiConfig } from 'wagmi';

import '@/styles/font.css';
import '@/styles/global.css';

import { useWagmi } from '@/lib/wagmi';

import { useApollo } from '@/graphql/client';
import { LayoutKeys, Layouts } from '@/layouts';

type AppPropsWithLayout = AppProps & {
  Component: NextComponentType<NextPageContext, unknown, unknown> & {
    Layout: LayoutKeys;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Layouts[Component.Layout ?? 'Default'];
  const apolloClient = useApollo(pageProps);
  const wagmiClient = useWagmi();

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute='class'>
          <AnkrProvider>
            <WagmiConfig client={wagmiClient}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </WagmiConfig>
          </AnkrProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
