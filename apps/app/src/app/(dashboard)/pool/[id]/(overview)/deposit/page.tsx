import PoolActionDeposit from "@/features/PoolAction/Deposit";
import { Metadata } from "next";

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
