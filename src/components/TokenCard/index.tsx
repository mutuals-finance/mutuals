import { getAccountBalance } from 'ankr-react/dist/api';
import Image from 'next/image';
import React from 'react';
import { IoHelp } from 'react-icons/io5';

import {
  formatBalance,
  formatCurrency,
  formatCurrencyAmount,
  formatPrice,
} from '@/lib/utils';

type TokenCardProps = Awaited<
  ReturnType<typeof getAccountBalance>
>['assets'][0];

export default function TokenCard({
  balance,
  balanceUsd,
  tokenName,
  tokenSymbol,
  thumbnail,
}: TokenCardProps) {
  return (
    <div
      className={
        'rounded-default bg-default-2 flex flex-shrink-0 items-center space-x-3 p-3'
      }
    >
      <div
        className={
          'bg-default rounded-default border-default flex h-8 w-8 flex-shrink-0 items-center border p-1'
        }
      >
        {thumbnail !== '' ? (
          <Image
            src={thumbnail}
            alt={tokenName}
            width={48}
            height={48}
            className={'w-full flex-1 self-stretch object-contain'}
          />
        ) : (
          <span
            className={'flex w-full items-center justify-center self-stretch'}
          >
            <IoHelp className={'block'} />
          </span>
        )}
      </div>
      <div className={'flex flex-col whitespace-nowrap'}>
        <h3 className={'text-sm font-medium leading-relaxed'}>
          {tokenSymbol !== '' ? tokenSymbol : 'UNKNOWN'}
        </h3>

        <div className={'flex items-center space-x-3 '}>
          <span
            className={
              'label text-default font-medium slashed-zero leading-none'
            }
          >
            {formatCurrencyAmount(balance)}
          </span>
          <span className={'label slashed-zero leading-none'}>
            {formatPrice(balanceUsd)}
          </span>
        </div>
      </div>
    </div>
  );
}
