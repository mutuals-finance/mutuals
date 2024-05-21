import { PropsWithChildren } from "react";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import PoolPageShell from "@/app/(dashboard)/pool/[id]/PoolPageShell";

export default async function PoolContentLayout({
  children,
  params,
}: PropsWithChildren<{
  params: { id: string };
}>) {
  const pool = await getPoolDetailsFromRouteParams(params);

  return <PoolPageShell metaData={pool.metaData}>{children}</PoolPageShell>;
}
