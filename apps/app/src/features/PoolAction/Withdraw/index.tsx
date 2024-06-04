import { Text } from "@splitfi/ui";

import PoolActionWithdrawForm, {
  PoolActionWithdrawFormProps,
} from "@/features/PoolAction/Withdraw/Form";

type PoolActionWithdrawProps = PoolActionWithdrawFormProps;

export default async function PoolActionWithdraw(
  props: PoolActionWithdrawProps,
) {
  return (
    <PoolActionWithdrawForm {...props}>
      <Text>
        Withdraw funds from your Payment Pool. You may either withdraw for your
        own or distribute to all other recipients.
      </Text>
    </PoolActionWithdrawForm>
  );
}
