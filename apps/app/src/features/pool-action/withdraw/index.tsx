import {
  type GetPoolWithTokensOptions,
  getPoolWithTokens,
} from "@mutuals/graphql-client-nextjs/server";
import { Box, Text } from "@mutuals/ui";
import type { AssetItem } from "@/features/asset/types";
import WithdrawForm from "@/features/pool-action/withdraw/form";

export interface PoolActionWithdrawPageProps {
  queryOptions: GetPoolWithTokensOptions;
}

export default async function PoolActionWithdrawPage({
  queryOptions,
}: PoolActionWithdrawPageProps) {
  const { data: pool, error } = await getPoolWithTokens(queryOptions);

  if (error || !pool) {
    return null;
  }

  const assets: AssetItem[] = pool.balance.tokens.edges.map(
    (edge) => edge.node
  );

  return (
    <>
      <Box mt={"6"} px={"4"}>
        <Text color={"fg.muted"} textStyle={"sm"}>
          Withdraw funds from your Payment Pool. You may either withdraw for
          your own or distribute to all other recipients.
        </Text>
      </Box>

      <WithdrawForm balance={assets} />
    </>
  );
}
