import { Balance } from '@ankr.com/ankr.js/dist/types';
import {
  Box,
  BoxProps,
  Stack,
  StackProps,
  Tag,
  TagLabel,
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
    <Stack alignItems={'flex-start'} gap={'1'}>
      <Text fontSize={fontSize} noOfLines={noOfLines} {...props}>
        {tokenName}
      </Text>
    </Stack>
  );
}
