import { Balance } from '@ankr.com/ankr.js/dist/types';
import { HStack } from '@chakra-ui/react';
import { CellContext } from '@tanstack/react-table';
import React from 'react';

import TokenImage from '@/components/Token/Image';
import TokenLabel from '@/components/Token/Label';

type AssetCellProps = CellContext<Balance, string | undefined>;

export default function AssetCell({ row }: AssetCellProps) {
  const { thumbnail, tokenName, tokenSymbol } = row.original;
  return (
    <HStack alignItems={'center'} spacing={'3'}>
      <TokenImage src={thumbnail} alt={tokenName} flexShrink={'0'} />
      <TokenLabel tokenName={tokenName} tokenSymbol={tokenSymbol} />
    </HStack>
  );
}
