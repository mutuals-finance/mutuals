import React, { PropsWithChildren } from "react";
import Layout from "@/app/(dashboard)/DashboardLayout";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}
