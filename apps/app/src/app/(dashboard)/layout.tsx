import React, { PropsWithChildren } from "react";
import Layout from "@/app/(dashboard)/DashboardLayout";
import { getViewer } from "@splitfi/sdk/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const { data } = await getViewer();

  const isLoggedIn =
    !!data?.viewer &&
    "__typename" in data.viewer &&
    data.viewer.__typename === "Viewer";

  if (!isLoggedIn) {
    const pathname = (children as any).props?.childProp?.segment;
    if (pathname) {
      cookies().set("redirectURL", pathname);
    }

    redirect(`/auth/login`);
  }

  return <Layout>{children}</Layout>;
}
