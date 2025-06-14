import React from "react";
import { getViewerWallets } from "@mutuals/graphql-client-nextjs/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RequireWallet from "./RequireWallet";

export default async function AuthRequire({
  children,
}: React.PropsWithChildren) {
  const query = await getViewerWallets();
  const redirectUrl = `/auth/login`;

  const isLoggedIn =
    query.data?.viewer &&
    "__typename" in query.data.viewer &&
    query.data.viewer.__typename === "Viewer";

  if (!isLoggedIn) {
    const pathname = (children as any).props?.childProp?.segment;
    if (pathname) {
      await cookies().then((c) => c.set("redirectURL", pathname));
    }

    redirect(`${redirectUrl}`);
  }

  return (
    <RequireWallet query={query} redirectArgs={[redirectUrl]}>
      {children}
    </RequireWallet>
  );
}
