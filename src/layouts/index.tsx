import DefaultLayout from "@/layouts/default";
import AppLayout from "@/layouts/app";
import React from "react";

export const Layouts = {
  Default: DefaultLayout,
  App: AppLayout,
  None: ({ children }: React.PropsWithChildren) => <>{children}</>,
};

export type LayoutKeys = keyof typeof Layouts;
