import { Form } from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import type { AssetItem } from "@/features/asset/types";
import type { WithdrawData } from "@/features/pool-action/types";
import WithdrawFormContent from "@/features/pool-action/withdraw/form/content";

export type WithdrawFormProps = PropsWithChildren<{ balance?: AssetItem[] }>;

export default function PoolActionWithdrawForm({
  children,
  balance = [],
}: WithdrawFormProps) {
  const initialAssets = Object.fromEntries(
    balance.map((_, index) => [index, true])
  );

  return (
    <Form<WithdrawData>
      flex={"1"}
      gap={"0"}
      overflow={"hidden"}
      values={{
        assets: initialAssets,
        distribute: false,
      }}
    >
      <WithdrawFormContent balance={balance}>{children}</WithdrawFormContent>
    </Form>
  );
}
