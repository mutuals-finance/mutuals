import { Text } from "@splitfi/ui";
import { getPoolDetailsFromRouteParams } from "@/lib/split";

import WithdrawForm from "@/app/(dashboard)/pool/[id]/(overview)/withdraw/WithdrawForm";
import { getAccountBalance } from "@/lib/ankr";

interface PoolHandleWithdrawProps {
  params: {
    id: string;
  };
}

export default async function PoolHandleWithdraw({
  params,
}: PoolHandleWithdrawProps) {
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
  const queries = await Promise.all([
    getPoolDetailsFromRouteParams(params),
    getAccountBalance({ walletAddress: address, blockchain: "eth" }),
  ]);

  const props = {
    pool: queries[0],
    balance: queries[1],
  };

  return (
    <WithdrawForm {...props}>
      <Text>
        Withdraw funds from your Payment Pool. You may either withdraw for your
        own or distribute to all other recipients.
      </Text>
    </WithdrawForm>
  );
}
