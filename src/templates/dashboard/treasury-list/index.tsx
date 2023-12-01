import { useQuery } from '@apollo/client';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useAccount } from 'wagmi';

import { SPLITS_BY_PAYEE } from '@/lib/graphql/queries';

import { SplitFragmentCard } from '@/components/Split/Card';

import { TreasurySearchAndCreate } from '@/templates/dashboard/treasury-list/SearchAndCreate';

export default function TreasuryList() {
  const { address, isConnected } = useAccount();

  const { data, loading } = useQuery(SPLITS_BY_PAYEE, {
    variables: { payee: address },
    skip: !isConnected,
  });

  return (
    <Box as={'section'} my={'12'}>
      <Container maxW='container.lg'>
        <Heading as={'h2'} size={'lg'} fontWeight={'700'} mb={'6'}>
          Treasuries
        </Heading>
        <TreasurySearchAndCreate />
        <SimpleGrid
          templateColumns={'repeat(auto-fill, minmax(20rem, 1fr))'}
          spacing={6}
        >
          {data?.splits.map((fragment, index) => {
            return <SplitFragmentCard fragment={fragment} key={index} />;
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
