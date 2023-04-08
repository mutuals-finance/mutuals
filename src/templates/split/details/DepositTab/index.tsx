import React from 'react';
import {
  IoCopyOutline,
  IoEllipsisHorizontal,
  IoEllipsisVertical,
  IoGlobeOutline,
  IoWarning,
} from 'react-icons/io5';

import { ButtonOutline, ButtonSecondary } from '@/components/Button';
import Chip from '@/components/Chip';
import QRCode from '@/components/QRCode';
import Statistic from '@/components/Statistic';

import { useSplit } from '@/context/SplitContext';

export function DepositTab() {
  const { split } = useSplit();
  const { address } = split;

  return (
    <section>
      <div className={'container'}>
        <article className={'w-full max-w-2xl space-y-6'}>
          <h2 className={'title-1'}>Deposit</h2>
          <div
            className={
              'rounded-default bg-default relative inline-flex overflow-hidden border border-orange-400'
            }
          >
            <span className={'block w-2 bg-orange-400'} />
            <span className={'block self-center pl-3 text-2xl text-orange-400'}>
              <IoWarning />
            </span>
            <div className={'p-3 text-sm'}>
              <p>
                Only ETH and ERC-20 tokens can be deposited. Do not send NFTs to
                a Split.
              </p>
            </div>
          </div>

          <p>Use the address below to receive funds to your split</p>

          <div
            className={
              'rounded-default border-default inline-flex flex-col items-center border  px-6'
            }
          >
            <div
              className={
                'flex items-center justify-between space-x-3 self-stretch pt-6'
              }
            >
              <div className={'inline-flex items-center space-x-1 text-xs'}>
                <IoGlobeOutline className={'text-light'} />
                <span>Ethereum Chain</span>
              </div>

              <div>
                <ButtonOutline size={'sm'} icon={<IoEllipsisHorizontal />} />
              </div>
            </div>

            <div className={'py-6'}>
              <div className={'rounded-default overflow-hidden'}>
                <QRCode text={address} />
              </div>
            </div>

            <div className={'border-default self-start border-t py-6'}>
              <Statistic
                title={'Split address'}
                className={'whitespace-nowrap slashed-zero'}
              >
                {address}
              </Statistic>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
