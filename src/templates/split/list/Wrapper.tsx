import { Container, Flex } from '@chakra-ui/react';
import React from 'react';

export function SplitListWrapper({ children }: React.PropsWithChildren) {
  return (
    <Flex minH={'calc(100vh - 72px)'}>
      <Container maxW='container.xl'>{children}</Container>
    </Flex>
  );
}
