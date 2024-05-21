import { PropsWithChildren } from "react";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import PoolPageShell from "@/app/(dashboard)/pool/[id]/PoolPageShell";

export default async function PoolContentLayout({
  children,
  params,
}: PropsWithChildren<{
  params: { id: string };
}>) {
  const props = await getPoolDetailsFromRouteParams(params);

  return <PoolPageShell {...props}>{children}</PoolPageShell>;
}
