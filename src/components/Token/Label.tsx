import { Balance } from '@ankr.com/ankr.js/dist/types';
import { Box, BoxProps, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import Date from '@/components/Date';

interface TokenLabelProps
  extends BoxProps,
    Partial<Pick<Balance, 'tokenName' | 'tokenSymbol'>> {}

export default function TokenLabel({
  tokenName = 'Unknown Token',
  tokenSymbol = 'NONE',
  ...props
}: TokenLabelProps) {
  return (
    <Box fontSize={'sm'} {...props}>
      <Text lineHeight={'1.4'}>{tokenName}</Text>
      <Text color={useColorModeValue('gray.300', 'gray.400')}>
        {tokenSymbol}
      </Text>
    </Box>
  );
}
