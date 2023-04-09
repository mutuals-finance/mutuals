import dynamic from 'next/dynamic';
import React, { HTMLProps } from 'react';
import { useList } from 'react-use';

import { ShareFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import clsxm from '@/lib/utils/clsxm';

import Box from '@/components/Box';
import { LinkChainExplorer } from '@/components/Link';
import UserAvatar from '@/components/UserAvatar';

import { useSplit } from '@/context/SplitContext';

const PieChart = dynamic(() => import('@/components/PieChart'), {
  ssr: false,
});

type ActiveShare = ShareFragmentFragment & { isActive?: boolean };

interface ShareItemProps extends HTMLProps<HTMLDivElement> {
  share: ActiveShare;
  isActive?: boolean;
}

function ShareItem({ share, className, isActive, ...props }: ShareItemProps) {
  return (
    <div
      className={clsxm(
        `rounded-default flex items-center justify-between space-x-3 border border-transparent p-3 transition-all`,
        isActive && 'bg-default-2  border-default ',
        className
      )}
      {...props}
    >
      <div className={'flex items-center space-x-3'}>
        <UserAvatar address={share.payee} className={`h-6 w-6`} />

        <LinkChainExplorer address={share.payee} color={'secondary'} />
      </div>

      <span className={'block text-right leading-none'}>
        {share.value * 100} %
      </span>
    </div>
  );
}

export function Shares() {
  const { split } = useSplit();
  const [shares, { updateAt }] = useList<ActiveShare>(
    split.shares.map((s) => ({
      ...s,
      isActive: false,
    }))
  );

  function setActive(index: number) {
    updateAt(index, { ...(shares[index] as ActiveShare), isActive: true });
  }

  function setInactive(index: number) {
    updateAt(index, { ...(shares[index] as ActiveShare), isActive: false });
  }

  return (
    <Box
      className={'lg:col-span-3'}
      innerClassName={'flex-row'}
      title={'Shares'}
    >
      <div className={'grid flex-1 grid-cols-5 items-center gap-3 lg:gap-6'}>
        <div className={'col-span-2 aspect-square'}>
          <PieChart
            data={shares}
            onMouseOut={(_, i) => setInactive(i)}
            onMouseMove={(_, i) => setActive(i)}
          />
        </div>

        <div className={'relative col-span-3 flex-1 self-stretch'}>
          <ul
            className={
              'divide-default absolute left-0 top-0 flex h-full w-full flex-col divide-y overflow-y-auto'
            }
          >
            {shares.map((share, index) => (
              <li className={`border-default block border-b p-1`} key={index}>
                <ShareItem
                  onMouseOut={() => setInactive(index)}
                  onMouseMove={() => setActive(index)}
                  share={share}
                  isActive={share.isActive}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );
}
