import WithdrawFormContent, {
  WithdrawFormContentProps,
} from "@/features/PoolAction/Withdraw/Form/Content";
import { WithdrawData } from "@/features/PoolAction/types";
import { Form } from "@mutuals/ui";
export type WithdrawFormProps = WithdrawFormContentProps;

export default function PoolActionWithdrawForm(props: WithdrawFormProps) {
  const assets = props.balance!.assets.reduce(
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
      <WithdrawFormContent {...props} />
    </Form>
  );
}
