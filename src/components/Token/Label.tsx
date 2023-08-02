import { Balance } from '@ankr.com/ankr.js/dist/types';
import { Box, BoxProps, Text } from '@chakra-ui/react';
import React from 'react';

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
      <Text display={'block'} as={'span'}>
        {tokenName}
      </Text>
      <Text display={'block'} as={'span'}>
        {tokenSymbol}
      </Text>
    </Box>
  );
}
