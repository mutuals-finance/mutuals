import { Box } from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import CTA from "@/features/Layout/CTA";
import Header from "@/features/Layout/Header";
import Footer from "@/features/Layout/Footer";
import Main from "@/features/Layout/Main";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box position={"relative"}>
      <Header />
      <Main>
        {children}
        <CTA />
      </Main>
      <Footer />
    </Box>
  );
}
