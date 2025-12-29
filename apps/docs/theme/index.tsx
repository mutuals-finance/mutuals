import type { PageMapItem } from "nextra";
import type { FC, ReactNode } from "react";
import { Footer } from "./footer";
import { MobileSidebarNav, SidebarStart } from "@/theme/sidebar";
import { Container, SkipNavContent, SkipNavLink } from "@mutuals/ui";
import { Header } from "@/components/layout/header";

export const MutualsTheme: FC<{
  children: ReactNode;
  pageMap: PageMapItem[];
}> = ({ children, pageMap }) => {
  return (
    <>
      <SkipNavLink>Skip to Content</SkipNavLink>
      <Header />
      <main>
        <MobileSidebarNav pageMap={pageMap} />
        <Container display="flex">
          <SidebarStart pageMap={pageMap} />
          <SkipNavContent />
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
};
