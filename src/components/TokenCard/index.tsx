import Image from 'next/image';
import React from 'react';
import { getAccountBalance } from 'ankr-react/dist/api';
import { formatBalance, formatCurrency } from '@/lib/utils';
import { IoHelp } from 'react-icons/io5';

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
        'rounded-default bg-default-2 flex flex-shrink-0 items-center space-x-3 overflow-hidden p-3'
      }
    >
      <div className={'flex h-6 w-6 flex-shrink-0 items-center bg-transparent'}>
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
            className={
              'bg-default-2 flex w-full items-center justify-center self-stretch rounded-full'
            }
          >
            <IoHelp className={'block'} />
          </span>
        )}
      </div>
      <div className={'flex flex-col whitespace-nowrap'}>
        <h3 className={'text-sm font-bold leading-relaxed'}>
          {tokenSymbol !== '' ? tokenSymbol : 'UNKNOWN'}
        </h3>

        <div className={'flex items-center space-x-3 '}>
          <span className={'label text-default font-semibold leading-none'}>
            {formatBalance(balance)}
          </span>
          <span className={'label leading-none'}>
            {formatCurrency(balanceUsd)}
          </span>
        </div>
      </div>
    </div>
  );
}
