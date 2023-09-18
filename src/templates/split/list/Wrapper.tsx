import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { useAccount } from 'wagmi';

import { SplitListPlaceholder } from '@/templates/split/list/Placeholder';

import { SplitListHeader } from './Header';

export function SplitListWrapper({ children }: React.PropsWithChildren) {
  const { address, isConnected } = useAccount();

  return (
    <Flex minH={'calc(100vh - 72px)'}>
      <Container maxW='container.xl'>
        <SplitListHeader />
        {!isConnected ? <SplitListPlaceholder /> : children}
      </Container>
    </Flex>
  );
}
