import React from 'react';

import { WithdrawForm } from '@/templates/split/details/WithdrawTab/WithdrawForm';

export function WithdrawTab() {
  return (
    <section>
      <div className={'container'}>
        <div className={'w-full max-w-2xl space-y-6'}>
          <h2 className={'title-3'}>Withdraw</h2>
          <p>
            Please select the tokens you want to withdraw and confirm your
            selection.
          </p>
          <WithdrawForm />
        </div>
      </div>
    </section>
  );
}
