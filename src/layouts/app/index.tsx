import React from "react";

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppBody from "./AppBody";
import AppSidebar from "./AppSidebar";

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
      <div className={"flex min-h-screen w-full"}>
        <AppSidebar />

        <div className={"flex flex-col overflow-hidden w-full"}>
          <AppHeader />
          <AppBody>{children}</AppBody>
          <AppFooter />
        </div>
      </div>
  );
}
