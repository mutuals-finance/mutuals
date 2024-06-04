import WithdrawFormInner, {
  type PoolActionWithdrawFormContentProps,
} from "@/features/PoolAction/Withdraw/Form/WithdrawFormInner";
import Form from "@/components/Form";
import { WithdrawData } from "@/features/PoolAction/types";

export type PoolActionWithdrawFormProps = PoolActionWithdrawFormContentProps;

export default function PoolActionWithdrawForm(
  props: PoolActionWithdrawFormProps,
) {
  const assets = props.balance?.assets ?? [];

  return (
    <Form<WithdrawData>
      values={{ assets, distribute: false }}
      flex={"1"}
      overflow={"hidden"}
      spacing={"0"}
    >
      <WithdrawFormInner {...props} />
    </Form>
  );
}
