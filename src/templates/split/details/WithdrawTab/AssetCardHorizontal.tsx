import { Balance } from '@ankr.com/ankr.js/dist/types';
import Image from 'next/image';
import React, { HTMLProps } from 'react';
import { IoCheckmark, IoClose, IoExit, IoHelp } from 'react-icons/io5';

import { formatCurrencyAmount, formatUSDPrice } from '@/lib/utils';
import clsxm from '@/lib/utils/clsxm';

type AssetCardHorizontalProps = Balance &
  HTMLProps<HTMLDivElement> & { selected?: boolean; active?: boolean };

export default function AssetCardHorizontal({
  thumbnail,
  tokenName,
  balance,
  balanceUsd,
  tokenSymbol,
  className,
  selected,
}: AssetCardHorizontalProps) {
  return (
    <div
      className={clsxm(
        `hover:bg-default-2 group flex w-full items-center justify-between space-x-3 overflow-hidden px-6 py-1.5 text-sm`,
        className
      )}
    >
      <div className={'flex flex-1 items-center space-x-3'}>
        <div
          className={
            'bg-default border-default rounded-default relative flex h-8 w-8 flex-shrink-0 items-center overflow-hidden border'
          }
        >
          {selected && (
            <button
              className={clsxm(
                'absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white/80 text-lg dark:bg-black/80'
              )}
              type={'button'}
            >
              <span className={clsxm('hidden group-hover:block')}>
                <IoClose />
              </span>
              <span className={clsxm('block group-hover:hidden')}>
                <IoCheckmark />
              </span>
            </button>
          )}

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

        <div>
          <span className={'block leading-snug'}>
            {tokenName !== '' ? tokenName : 'UNKNOWN'}
          </span>
          <span className={'text-lighter block leading-snug'}>
            {tokenSymbol !== '' ? tokenSymbol : ' '}
          </span>
        </div>
      </div>

      <div className={'flex-shrink-0 overflow-hidden text-right'}>
        <span className={'block leading-snug'}>
          {formatCurrencyAmount(balance)}{' '}
          {tokenSymbol !== '' ? tokenSymbol : 'UNKNOWN'}
        </span>
        <span className={'text-lighter block leading-snug'}>
          {formatUSDPrice(balanceUsd)}
        </span>
      </div>
    </div>
  );
}
