import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import WalletCard from './WalletCard';

export default function WalletList() {
  return (
    <Box as={'section'} my={'12'}>
      <Container maxW='container.lg'>
        <Heading as={'h2'} size={'lg'} fontWeight='700' mb={'6'}>
          Wallets
        </Heading>

        <SimpleGrid
          templateColumns={'repeat(auto-fill, minmax(16rem, 1fr))'}
          spacing={6}
        >
          <WalletCard />
          <WalletCard />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
