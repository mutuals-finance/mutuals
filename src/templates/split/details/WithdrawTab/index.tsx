import React from 'react';

import { WithdrawForm } from '@/templates/split/details/WithdrawTab/WithdrawForm';

export function WithdrawTab() {
  return (
    <section>
      <div className={'container'}>
        <div className={'w-full max-w-2xl space-y-6'}>
          <h2 className={'title-1'}>Withdraw</h2>
          <p>
            Withdraw funds from your split. You may either withdraw for your own
            or distribute to all other recipients.
          </p>
          <WithdrawForm />
        </div>
      </div>
    </section>
  );
}
