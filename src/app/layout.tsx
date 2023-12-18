import React, { PropsWithChildren } from 'react';
import Layout from '@/app/RootLayout';
import Providers from '@/app/RootProviders';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
