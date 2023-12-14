import React, { PropsWithChildren } from 'react';
import Layout from '@/layouts/root/';
import ServerProviders from '@/app/ServerProviders';
import ClientProviders from '@/app/ClientProviders';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>
        <ServerProviders>
          <ClientProviders>
            <Layout>{children}</Layout>
          </ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}
