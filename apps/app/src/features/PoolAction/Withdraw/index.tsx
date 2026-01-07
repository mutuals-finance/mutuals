import { Text } from "@mutuals/ui";

import WithdrawForm, {
  WithdrawFormProps,
} from "@/features/PoolAction/Withdraw/Form";

type PoolActionWithdrawProps = WithdrawFormProps;

export default async function PoolActionWithdrawPage(
  props: PoolActionWithdrawProps,
) {
  return (
    <WithdrawForm {...props}>
      <Text textStyle={"sm"} color={"fg.muted"}>
        Withdraw funds from your Payment Pool. You may either withdraw for your
        own or distribute to all other recipients.
      </Text>
    </WithdrawForm>
  );
}
