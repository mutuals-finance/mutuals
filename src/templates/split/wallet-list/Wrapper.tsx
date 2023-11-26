import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

export function WalletListWrapper({ children }: React.PropsWithChildren) {
  return (
    <Box as={'section'} my={'12'}>
      <Container maxW='container.lg'>
        <Heading as={'h2'} size={'lg'} fontWeight='700' mb={'6'}>
          Wallets
        </Heading>

        {children}
      </Container>
    </Box>
  );
}
