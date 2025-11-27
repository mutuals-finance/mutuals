import { Box } from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import CTA from "@/features/Layout/CTA";
import Header from "@/features/Layout/Header";
import Footer from "@/features/Layout/Footer";
import Main from "@/features/Layout/Main";
import { LayoutProvider } from "@/features/Layout/Provider";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <LayoutProvider>
      <Box position={"relative"}>
        <Header />
        <Main>
          {children}
          <CTA />
        </Main>
        <Footer />
      </Box>
    </LayoutProvider>
  );
}
