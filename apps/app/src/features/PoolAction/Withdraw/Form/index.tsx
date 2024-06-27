import WithdrawFormContent, {
  WithdrawFormContentProps,
} from "@/features/PoolAction/Withdraw/Form/Content";
import Form from "@/components/Form";
import { WithdrawData } from "@/features/PoolAction/types";

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
      spacing={"0"}
    >
      <WithdrawFormContent {...props} />
    </Form>
  );
}
