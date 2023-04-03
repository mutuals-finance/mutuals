import { useQuery } from '@apollo/client';
import React from 'react';
import { useAccount } from 'wagmi';

import { SPLITS_BY_PAYEE } from '@/lib/graphql/queries';

import { SplitFragmentCard } from '@/components/Split/Card';

export function SplitListing() {
  const { address, isConnected } = useAccount();

  const { data } = useQuery(SPLITS_BY_PAYEE, {
    variables: { payee: address },
    skip: !isConnected,
  });

  return (
    <section>
      <div className='container'>
        <ul className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4'>
          {data?.splits.map((fragment, index) => {
            return (
              <li key={index}>
                <SplitFragmentCard fragment={fragment} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
