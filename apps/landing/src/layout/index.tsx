import { Box } from "@mutuals/ui";
import type { PropsWithChildren } from "react";

import CTA from "@/layout/CTA";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

type LayoutProps = PropsWithChildren;

function Main({ children }: PropsWithChildren) {
  return <Box as="main">{children}</Box>;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>
        {children}
        <CTA />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
