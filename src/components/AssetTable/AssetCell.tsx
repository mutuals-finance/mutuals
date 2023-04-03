import { Balance } from '@ankr.com/ankr.js/dist/types';
import { CellContext } from '@tanstack/react-table';
import Image from 'next/image';
import React from 'react';
import { IoHelp } from 'react-icons/io5';

type AssetCellProps = CellContext<Balance, string | undefined>;

export default function AssetCell({ row }: AssetCellProps) {
  const { thumbnail, tokenName, tokenSymbol } = row.original;
  return (
    <div className={'flex items-center space-x-3'}>
      <span
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
      </span>

      <div>
        <span className={'block leading-snug'}>
          {tokenName !== '' ? tokenName : 'UNKNOWN'}
        </span>
        <span className={'text-lighter block leading-snug'}>
          {tokenSymbol !== '' ? tokenSymbol : ' '}
        </span>
      </div>
    </div>
  );
}
