import type { PageMapItem } from "nextra";
import type { FC, ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { MobileSidebarNav, SidebarStart } from "@/components/layout/sidebar";
import {
  Container,
  SkipNavContent,
  SkipNavLink,
  UIProvider,
} from "@mutuals/ui";
import { Header } from "@/components/layout/header";
import system from "@/theme/system";
import { ConfigProvider } from "@/context";

export const MutualsTheme: FC<{
  children: ReactNode;
  pageMap: PageMapItem[];
}> = ({ children, pageMap }) => {
  return (
    <UIProvider value={system}>
      <ConfigProvider pageMap={pageMap}>
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
      </ConfigProvider>
    </UIProvider>
  );
};
