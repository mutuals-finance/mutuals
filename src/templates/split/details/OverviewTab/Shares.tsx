import dynamic from 'next/dynamic';
import React from 'react';

import { FragmentType, useFragment } from '@/lib/graphql/__generated__';
import { ShareFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import { shareFragment } from '@/lib/graphql/fragments';
import { shortenAddress } from '@/lib/utils';

import Box from '@/components/Box';
import UserAvatar from '@/components/UserAvatar';

const PieChart = dynamic(() => import('@/components/PieChart'), { ssr: false });
type ShareFragment = FragmentType<typeof shareFragment>;

interface ShareItemProps {
  share: ShareFragmentFragment;
}
function ShareItem({ share }: ShareItemProps) {
  return (
    <li className={`border-default block border-b p-1`}>
      <div
        className={`flex items-center justify-between space-x-3 p-2 ${
          false ? 'bg-default-2 rounded-default' : ''
        }`}
      >
        <div className={'flex items-center space-x-3'}>
          <UserAvatar address={share.payee} className={`h-6 w-6`} />

          <h4 className={'font-medium slashed-zero'}>
            {shortenAddress(share.payee)}
          </h4>
        </div>

        <span className={'block text-right leading-none'}>{share.value} %</span>
      </div>
    </li>
  );
}

export function Shares(props: { shares: ShareFragment[] }) {
  const shares = props.shares.map((share) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFragment(shareFragment, share);
  });

  return (
    <Box
      className={'lg:col-span-3'}
      innerClassName={'flex-row'}
      title={'Shares'}
    >
      <div className={'grid flex-1 grid-cols-5 items-center gap-3 lg:gap-6'}>
        <div className={'col-span-2 aspect-square'}>
          <PieChart data={shares} />
        </div>

        <div className={'relative col-span-3 flex-1 self-stretch'}>
          <ul
            className={
              'divide-default absolute left-0 top-0 flex h-full w-full flex-col divide-y overflow-y-auto'
            }
          >
            {shares.map((share, index) => (
              <ShareItem key={index} share={share} />
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );
}
