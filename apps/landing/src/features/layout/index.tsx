import { Box } from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import CTA from "@/features/layout/cta";
import Footer from "@/features/layout/footer";
import Header from "@/features/layout/header";
import Main from "@/features/layout/main";
import { LayoutProvider } from "@/features/layout/provider";

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
