import { getPoolDetailsFromRouteParams } from "@/lib/split";

import PoolActionWithdraw from "@/features/PoolAction/Withdraw";
import { Metadata } from "next";
import { getTokenBalances } from "@/lib/moralis";

export const metadata: Metadata = {
  title: "Withdraw",
};

export default async function PoolHandleWithdraw({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
  const queries = await Promise.all([
    getPoolDetailsFromRouteParams(await params),
    getTokenBalances(address, 1),
  ]);

  const props = {
    pool: queries[0],
    balance: queries[1],
  };

  return <PoolActionWithdraw {...props} />;
}
