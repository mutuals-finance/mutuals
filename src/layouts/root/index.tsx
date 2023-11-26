import React from 'react';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <Sidebar>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Sidebar>
  );
}
