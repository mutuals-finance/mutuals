import React from 'react';
import {
  IoCalendarOutline,
  IoGlobeOutline,
  IoHammerOutline,
} from 'react-icons/io5';

import { formatUSDPrice, shortenAddress } from '@/lib/utils';

import Box from '@/components/Box';
import Date from '@/components/Date';
import Statistic from '@/components/Statistic';

import { useSplit } from '@/context/SplitContext';

export function AboutTab() {
  const { split } = useSplit();

  const items: Record<string, string> = {
    Name: split.metaData.name || '',
    Description: split.metaData.description || '',
    'Metadata Uri': split.metaDataUri || '',
  };

  return (
    <section>
      <div className={'container'}>
        <h2 className={'title-3 mb-6'}>About</h2>
        <div>
          <div className={'grid grid-cols-4 gap-3 lg:gap-6'}>
            <Box className={'lg:col-span-1'}>
              <div className={'flex flex-1 flex-col'}>
                <IoCalendarOutline
                  className={'text-lighter mb-auto block self-end text-4xl'}
                />

                <Statistic title={'Created At'}>
                  <Date timestamp={split.timestamp} />
                </Statistic>
              </div>
            </Box>
            <Box className={'flex-col justify-end lg:col-span-1'}>
              <div className={'flex flex-1 flex-col'}>
                <IoGlobeOutline
                  className={'text-lighter mb-auto block self-end text-4xl'}
                />
                <Statistic title={'Chain'}>Ethereum</Statistic>
              </div>
            </Box>
            <Box className={'flex-col justify-end lg:col-span-1'}>
              <div className={'flex flex-1 flex-col '}>
                <IoHammerOutline
                  className={'text-lighter mb-auto block self-end text-4xl'}
                />
                <Statistic title={'Creator'} className={'slashed-zero'}>
                  {shortenAddress(split.address)}
                </Statistic>
              </div>
            </Box>

            <div className={'mt-6 lg:col-span-4'}>
              <table className={'w-full table-auto overflow-auto'}>
                <tbody className={'divide-default divide-y'}>
                  {Object.keys(items).map((name) => (
                    <tr
                      className={'divide-default table-row divide-x'}
                      key={name}
                    >
                      <td className={'text-light table-cell p-6'}>{name}</td>
                      <td className={'table-cell p-6'}>{items[name]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
