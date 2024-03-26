import React, { PropsWithChildren } from 'react';
import Providers from '@/app/RootProviders';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
