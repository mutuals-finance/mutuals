import { Blockchain } from '@ankr.com/ankr.js/dist/types';
import { useAccountBalance } from 'ankr-react';
import { useRouter } from 'next/router';
import React from 'react';

import {
  Activity,
  Analytics,
  Balance,
  Details,
  Shares,
} from '@/templates/split/details';

export function OverviewTab() {
  /*
  const { pathname, query, ...router } = useRouter();
  const { split } = data;
  const transactions = [];

  const { data: balance } = useAccountBalance({
    walletAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    blockchain: ['eth' as Blockchain],
    onlyWhitelisted: true,
  });
*/

  return (
    <section>
      <div className={'container'}>
        <div className={'container grid gap-3 lg:grid-cols-6 lg:gap-6'}>
          {/*
          <Balance {...balance} />
          <Shares shares={split.shares} />
          <Activity transactions={transactions} />
          <Details {...split} />
          <Analytics />
*/}
        </div>
      </div>
    </section>
  );
}
