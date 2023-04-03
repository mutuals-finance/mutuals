import { ApolloProvider } from '@apollo/client';
import { Provider as AnkrProvider } from 'ankr-react';
import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { WagmiConfig } from 'wagmi';

import '@/styles/font.css';
import '@/styles/global.css';

import { useApollo } from '@/lib/graphql/client';
import { useWagmi } from '@/lib/wagmi';

import { LayoutKeys, Layouts } from '@/layouts';
import DefaultLayout from '@/layouts/root';

type AppPropsWithLayout = AppProps & {
  Component: NextComponentType<NextPageContext, unknown, unknown> & {
    Layout: LayoutKeys;
  };
};

export default function App({
  Component,
  pageProps,
  ...props
}: AppPropsWithLayout) {
  const NestedLayout = Layouts[Component.Layout ?? 'Default'];
  const apolloClient = useApollo(pageProps);
  const wagmiClient = useWagmi();

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute='class'>
          <AnkrProvider>
            <WagmiConfig client={wagmiClient}>
              <DefaultLayout>
                <NestedLayout {...pageProps}>
                  <Component {...pageProps} />
                </NestedLayout>
              </DefaultLayout>
            </WagmiConfig>
          </AnkrProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
