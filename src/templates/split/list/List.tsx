import { useQuery } from '@apollo/client';
import Image from 'next/image';
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
    <section
      className={'bg-default relative p-3 !pt-32 lg:col-span-2 lg:px-12'}
    >
      <div>
        <h1 className={'title-2 mb-6'}>My Splits</h1>
      </div>

      <div className={'border-default rounded-default border p-3'}>
        <ul className='divide-default flex flex-col divide-y'>
          {data?.splits.map((fragment, index) => {
            return (
              <li key={index} className={'py-3'}>
                <SplitFragmentCard fragment={fragment} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
