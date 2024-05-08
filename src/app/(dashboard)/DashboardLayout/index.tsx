import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Sidebar>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Sidebar>
  );
}
