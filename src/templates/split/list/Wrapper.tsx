import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { useAccount } from 'wagmi';

import { SplitListPlaceholder } from '@/templates/split/list/Placeholder';

import { SplitListHeader } from './Header';

export function SplitListWrapper({ children }: React.PropsWithChildren) {
  const { address, isConnected } = useAccount();

  return (
    <Box as={'section'} my={'12'}>
      <Container maxW='container.lg'>
        <SplitListHeader />
        {isConnected ? children : <SplitListPlaceholder />}
      </Container>
    </Box>
  );
}
