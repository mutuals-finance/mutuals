import { Balance } from '@ankr.com/ankr.js/dist/types';
import {
  HStack,
  Stack,
  Tag,
  TagLabel,
  Text,
  TextProps,
} from '@chakra-ui/react';
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
    <Stack direction={'row'} align={'center'}>
      <Text as={'span'} {...props}>
        {formatCurrencyAmount(getValue())}
      </Text>{' '}
      <Tag size='sm' rounded={'md'} colorScheme={'primary'}>
        <TagLabel fontSize={'2xs'}>{tokenSymbol}</TagLabel>
      </Tag>
    </Stack>
  );
}
