import { getPoolDetailsFromRouteParams } from "@/lib/split";
import PoolActionDeposit from "@/features/PoolAction/Deposit";

interface PoolHandleDepositProps {
  params: {
    id: string;
  };
}

export default async function PoolHandleDeposit({
  params,
}: PoolHandleDepositProps) {
  const pool = await getPoolDetailsFromRouteParams(params);

  return <PoolActionDeposit pool={pool} />;
}
