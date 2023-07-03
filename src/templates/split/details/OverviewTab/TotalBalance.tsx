import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat';
import React from 'react';

import { formatUSDPrice } from '@/lib/utils';

import ContentCard from '@/components/ContentCard';

import { useSplit } from '@/context/SplitContext';

export function TotalBalance() {
  const { balance } = useSplit();

  return (
    <ContentCard>
      <Stat>
        <StatLabel>Total Balance</StatLabel>
        <StatNumber fontSize={'4xl'}>
          {formatUSDPrice(balance?.totalBalanceUsd || '0')}
        </StatNumber>
        <StatHelpText textAlign={'right'}>
          {!!balance?.assets && balance.assets.length > 0 ? (
            <>
              {balance.assets
                .sort(({ balanceRawInteger }) => Number(balanceRawInteger))
                .slice(0, 2)
                .map(({ tokenName }, i) => (
                  <span key={i}>
                    <span>{tokenName}</span>
                    {i < 1 ? ', ' : ' '}
                  </span>
                ))}{' '}
              and {(balance?.assets?.length || 0) - 2} more
            </>
          ) : (
            'No assets'
          )}
        </StatHelpText>
      </Stat>
    </ContentCard>
  );
}
