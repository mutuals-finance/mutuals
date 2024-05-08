import { Balance } from '@ankr.com/ankr.js/dist/types';
import { HStack, Text, TextProps } from '@chakra-ui/react';
import { CellContext } from '@tanstack/react-table';
import React from 'react';

import TokenImage from '@/components/Token/Image';
import TokenLabel from '@/components/Token/Label';
import { formatCurrencyAmount } from '@/lib/utils';
import { AssetCellProps } from '@/components/AssetTable/types';

type AssetBalanceCellProps = AssetCellProps & TextProps;

export default function AssetBalanceCell({
  row,
  getValue,
  ...props
}: AssetBalanceCellProps) {
  const { tokenSymbol } = row.original;
  return (
    <>
      <Text as={'span'} {...props}>
        {formatCurrencyAmount(getValue())}
      </Text>{' '}
      <Text variant={'label'} as={'span'} {...props}>
        {tokenSymbol}
      </Text>
    </>
  );
}
