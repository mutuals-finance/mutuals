import React from "react";
import { getViewerWallets } from "@mutuals/sdk/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RequireWallet from "./RequireWallet";

export default async function AuthRequire({
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

  return <RequireWallet query={query}>{children}</RequireWallet>;
}
