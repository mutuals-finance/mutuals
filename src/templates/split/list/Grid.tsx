import { useQuery } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useAccount } from 'wagmi';

import { SPLITS_BY_PAYEE } from '@/lib/graphql/queries';
import { useMetadata } from '@/lib/split/hooks';

import { SplitFragmentCard } from '@/components/Split/Card';

export function SplitListGrid() {
  const { address, isConnected } = useAccount();

  const { data, loading } = useQuery(SPLITS_BY_PAYEE, {
    variables: { payee: address },
    skip: !isConnected,
  });

  return (
    <SimpleGrid columns={3} spacing={6}>
      {loading ? (
        <>Loading</>
      ) : (
        data?.splits.map((fragment, index) => {
          return <SplitFragmentCard fragment={fragment} key={index} />;
        })
      )}
    </SimpleGrid>
  );
}
