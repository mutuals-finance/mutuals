import AppLayout from "@/layouts/default";
import React from "react";

export const Layouts = {
  Default: AppLayout,
  None: ({ children }: React.PropsWithChildren) => <>{children}</>,
};

export type LayoutKeys = keyof typeof Layouts;
