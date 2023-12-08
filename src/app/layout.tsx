import React, { PropsWithChildren } from 'react';
import Layout from '@/layouts/root/';
import Providers from '@/app/Providers';

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
