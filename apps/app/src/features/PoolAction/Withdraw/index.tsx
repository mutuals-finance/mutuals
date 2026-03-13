import { Text, Box } from "@mutuals/ui";
import WithdrawForm from "@/features/PoolAction/Withdraw/Form";
import {
  getPoolWithTokens,
  GetPoolWithTokensOptions,
} from "@mutuals/graphql-client-nextjs/server";
import { AssetItem } from "@/features/Asset/types";

export type PoolActionWithdrawPageProps = {
  queryOptions: GetPoolWithTokensOptions;
};

export default async function PoolActionWithdrawPage({
  queryOptions,
}: PoolActionWithdrawPageProps) {
  const { data, error } = await getPoolWithTokens(queryOptions);

  if (error || !data?.pool || "message" in data.pool) {
    return null;
  }

  const balance: AssetItem[] =
    data.pool.balance?.tokens?.edges?.map((edge) => edge.node) ?? [];

  return (
    <>
      <Box px={"4"} mt={"6"}>
        <Text textStyle={"sm"} color={"fg.muted"}>
          Withdraw funds from your Payment Pool. You may either withdraw for
          your own or distribute to all other recipients.
        </Text>
      </Box>

      <WithdrawForm balance={balance} />
    </>
  );
}
