'use client';

import WithdrawFormInner, {
  type WithdrawFormInnerProps,
  type WithdrawData,
} from '@/app/pool/[id]/(overview)/withdraw/WithdrawForm/WithdrawFormInner';
import Form from '@/components/Form';

type WithdrawFormProps = WithdrawFormInnerProps;

export default function WithdrawForm(props: WithdrawFormProps) {
  const assets = props.balance?.assets ?? [];

  return (
    <Form<WithdrawData> values={{ assets, distribute: false }}>
      <WithdrawFormInner {...props} />
    </Form>
  );
}
