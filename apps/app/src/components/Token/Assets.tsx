import { Balance } from '@ankr.com/ankr.js/dist/types';
import { Box, BoxProps, Text } from '@chakra-ui/react';
import React from 'react';

import { formatCurrencyAmount, formatUSDPrice } from '@/lib/utils';

interface TokenAssetsProps
  extends BoxProps,
    Partial<Pick<Balance, 'balance' | 'tokenSymbol' | 'balanceUsd'>> {}

export default function TokenAssets({
  balance = '-1',
  tokenSymbol = 'NONE',
  balanceUsd = '-1',
  ...props
}: TokenAssetsProps) {
  return (
    <Box fontSize={'sm'} {...props}>
      <Box>
        <Text variant={'slashed-zero'} as={'span'}>
          {formatCurrencyAmount(balance)}
        </Text>{' '}
        {tokenSymbol}
      </Box>

      <Text variant={'slashed-zero'} as={'span'} display={'block'}>
        {formatUSDPrice(balanceUsd)}
      </Text>
    </Box>
  );
}
