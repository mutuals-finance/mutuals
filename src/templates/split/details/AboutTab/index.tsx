import React from 'react';
import {
  IoCalendarOutline,
  IoGlobeOutline,
  IoHammer,
  IoHammerOutline,
  IoPerson,
  IoPersonOutline,
} from 'react-icons/io5';

import { shortenAddress } from '@/lib/utils';

import Box from '@/components/Box';
import Date from '@/components/Date';
import { LinkChainExplorer } from '@/components/Link';
import Statistic from '@/components/Statistic';

import { useSplit } from '@/context/SplitContext';

export function AboutTab() {
  const { split } = useSplit();

  const items: Record<string, React.ReactNode | string> = {
    Chain: 'Ethereum',
    'Metadata Uri': split.metaDataUri,
  };

  return (
    <section>
      <div className={'container'}>
        <h2 className={'title-1 mb-6'}>About</h2>
        <div className={'mt-6 grid gap-6 lg:grid-cols-5 lg:grid-rows-2'}>
          <div className={'lg:col-span-3 lg:row-span-2'}>
            <div className={'w-full max-w-2xl'}>
              <p>{split.metaData.description}</p>
            </div>
          </div>

          <Box>
            <div className={'space-y-6'}>
              <IoCalendarOutline className={'text-xl'} />

              <Statistic title={'Created At'}>
                <Date timestamp={split.timestamp} />
              </Statistic>
            </div>
          </Box>

          <Box>
            <div className={'space-y-6'}>
              <IoGlobeOutline className={'text-xl'} />
              <Statistic title={'Chain'}>Ethereum</Statistic>
            </div>
          </Box>

          <Box>
            <div className={'space-y-6'}>
              <IoPersonOutline className={'text-xl'} />
              <Statistic title={'Creator'}>
                <LinkChainExplorer
                  color={'secondary'}
                  className={'slashed-zero'}
                  address={split.address}
                />
              </Statistic>
            </div>
          </Box>
        </div>
      </div>
    </section>
  );
}
