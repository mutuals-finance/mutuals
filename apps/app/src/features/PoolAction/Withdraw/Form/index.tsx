import WithdrawFormContent from "@/features/PoolAction/Withdraw/Form/Content";
import { WithdrawData } from "@/features/PoolAction/types";
import { Form } from "@mutuals/ui";
import { AssetItem } from "@/features/Asset/types";
import { PropsWithChildren } from "react";

export type WithdrawFormProps = PropsWithChildren<{ balance?: AssetItem[] }>;

export default async function PoolActionWithdrawForm({
  children,
  balance = [],
}: WithdrawFormProps) {
  const initialAssets = Object.fromEntries(
    balance.map((_, index) => [index, true]),
  );

  return (
    <Form<WithdrawData>
      values={{
        assets: initialAssets,
        distribute: false,
      }}
      flex={"1"}
      overflow={"hidden"}
      gap={"0"}
    >
      <WithdrawFormContent balance={balance}>{children}</WithdrawFormContent>
    </Form>
  );
}
