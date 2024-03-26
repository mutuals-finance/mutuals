import { Balance } from '@ankr.com/ankr.js/dist/types';
import {
  Box,
  BoxProps,
  Stack,
  StackProps,
  Text,
  TextProps,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import Date from '@/components/Date';

export interface TokenLabelProps
  extends TextProps,
    Partial<Pick<Balance, 'tokenName' | 'tokenSymbol'>> {}

export default function TokenLabel({
  tokenName = 'Unknown',
  tokenSymbol = '??',
  fontSize = 'sm',
  noOfLines = 2,
  ...props
}: TokenLabelProps) {
  return (
    <Text fontSize={fontSize} noOfLines={noOfLines} {...props}>
      {tokenName}
      <br />
      <Text variant={'label-mono'} as={'span'}>
        {tokenSymbol}
      </Text>
    </Text>
  );
}
