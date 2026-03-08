import WithdrawFormContent from "@/features/PoolAction/Withdraw/Form/Content";
import { WithdrawData } from "@/features/PoolAction/types";
import { Form } from "@mutuals/ui";
import { getTokenBalances } from "@/lib/moralis";
import { GetPoolOptions } from "@mutuals/graphql-client-nextjs/server";

export type WithdrawFormProps = { queryOptions?: GetPoolOptions };

export default async function PoolActionWithdrawForm({
  queryOptions: _,
}: WithdrawFormProps) {
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
  const balance = await getTokenBalances(address, 1);

  const assets = balance.reduce(
    (all, current, index) => ({
      [index]: true,
      ...all,
    }),
    {},
  );

  return (
    <Form<WithdrawData>
      values={{ assets, distribute: false }}
      flex={"1"}
      overflow={"hidden"}
      gap={"0"}
    >
      <WithdrawFormContent balance={balance} />
    </Form>
  );
}
