import { useQuery } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useAccount } from 'wagmi';

import { SPLITS_BY_PAYEE } from '@/lib/graphql/queries';

import { SplitFragmentCard } from '@/components/Split/Card';

export function SplitListList() {
  const { address, isConnected } = useAccount();

  const { data } = useQuery(SPLITS_BY_PAYEE, {
    variables: { payee: address },
    skip: !isConnected,
  });

  return (
    <SimpleGrid columns={2} spacing={6}>
      {data?.splits.map((fragment, index) => {
        return <SplitFragmentCard fragment={fragment} key={index} />;
      })}
    </SimpleGrid>
  );
}
