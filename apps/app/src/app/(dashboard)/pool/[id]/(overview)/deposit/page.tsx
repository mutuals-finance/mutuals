import type { Metadata } from "next";
import PoolActionDeposit from "@/features/pool-action/deposit";

export const metadata: Metadata = {
  title: "Deposit",
};

export default async function PoolHandleDeposit({
  params: _,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  //const pool = await getPoolDetailsFromRouteParams(await params);

  return <PoolActionDeposit />;
}
