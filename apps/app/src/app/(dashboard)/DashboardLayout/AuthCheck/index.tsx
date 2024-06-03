import React from "react";
import { getViewerWallets } from "@splitfi/sdk/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthCheckWallet from "@/app/(dashboard)/DashboardLayout/AuthCheck/Wallet";

export default async function DashboardAuthCheck({
  children,
}: React.PropsWithChildren) {
  const query = await getViewerWallets();

  const isLoggedIn =
    query.data?.viewer &&
    "__typename" in query.data.viewer &&
    query.data.viewer.__typename === "Viewer";

  if (!isLoggedIn) {
    const pathname = (children as any).props?.childProp?.segment;
    if (pathname) {
      cookies().set("redirectURL", pathname);
    }

    redirect(`/auth/login`);
  }

  return <AuthCheckWallet query={query}>{children}</AuthCheckWallet>;
}
