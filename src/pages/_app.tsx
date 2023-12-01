import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';

import AppProviders from '@/components/AppProviders';

import { LayoutKeys, Layouts } from '@/layouts';
import DefaultLayout from '@/layouts/root';

type AppPropsWithLayout = AppProps & {
  Component: NextComponentType<NextPageContext, unknown, unknown> & {
    Layout: LayoutKeys;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const NestedLayout = Layouts[Component.Layout ?? 'Default'];

  return (
    <AppProviders {...pageProps}>
      <DefaultLayout>
        <NestedLayout {...pageProps}>
          <Component {...pageProps} />
        </NestedLayout>
      </DefaultLayout>
    </AppProviders>
  );
}
