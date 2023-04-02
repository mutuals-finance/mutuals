import React from 'react';
import { IoCopyOutline, IoWarning } from 'react-icons/io5';

import Chip from '@/components/Chip';
import QRCode from '@/components/QRCode';

import { useSplit } from '@/context/SplitContext';

export function DepositTab() {
  const { split } = useSplit();
  const { address } = split;

  return (
    <section>
      <div className={'container'}>
        <article className={'w-full max-w-2xl space-y-6'}>
          <h2 className={'title-3'}>Deposit tokens</h2>
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

          <p>Use the address below to receive funds on the Ethereum network:</p>

          <div
            className={
              'border-default bg-default-2 rounded-default inline-flex flex-col items-center space-y-6 border p-6 text-center'
            }
          >
            <QRCode text={address} />

            <span
              className={
                'block whitespace-nowrap text-xs font-medium slashed-zero'
              }
            >
              <Chip
                color={'link-2'}
                size={'sm'}
                className={'slashed-zero'}
                iconAfter={<IoCopyOutline />}
              >
                {address}
              </Chip>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
