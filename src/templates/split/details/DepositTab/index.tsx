import React from 'react';
import {
  IoEllipsisHorizontal,
  IoGlobeOutline,
  IoWarning,
  IoWarningOutline,
} from 'react-icons/io5';

import Alert from '@/components/Alert';
import { ButtonOutline } from '@/components/Button';
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

          <Alert severity={'warning'}>
            <ul>
              <li>
                Only ETH and ERC-20 tokens can be deposited. Do not send NFTs to
                a Split.
              </li>
              <li>
                Please make sure to operate on the Ethereum chain. Other
                networks are not supported for this address.
              </li>
            </ul>
          </Alert>
          <p>Use the address below to receive funds to your split</p>

          <div
            className={
              'rounded-default border-default inline-flex flex-col items-center border px-6'
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
