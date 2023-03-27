import React from 'react';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className={'flex min-h-screen w-full'}>
        <Sidebar />

        <div className={'flex w-full flex-col overflow-hidden'}>
          <Header />
          <Body>{children}</Body>
        </div>
      </div>
      <Footer />
    </>
  );
}
