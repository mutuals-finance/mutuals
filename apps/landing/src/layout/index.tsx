"use client";

import { Box } from "@chakra-ui/react";
import type { PropsWithChildren, ReactNode } from "react";

import CTA from "@/layout/CTA";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

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
