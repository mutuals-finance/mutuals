import React from 'react';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className={'flex w-full flex-col'}>
        <Header />
        <Body>{children}</Body>
      </div>
      <Footer />
    </>
  );
}
