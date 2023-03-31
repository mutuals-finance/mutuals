import { Balance } from '@ankr.com/ankr.js/dist/types';
import Image from 'next/image';
import React, { HTMLProps } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IoHelp } from 'react-icons/io5';

import { formatBalance, formatCurrency } from '@/lib/utils';

import { ButtonPrimary } from '@/components/Button';
import InputCheckbox from '@/components/Form/InputCheckbox';
import Statistic from '@/components/Statistic';

import { SplitTemplateTabProps } from '#/split';

type WithdrawTabProps = {
  assets?: Balance[];
};

type AssetCardHorizontalProps = Balance & HTMLProps<HTMLDivElement>;

function AssetCardHorizontal({
  thumbnail,
  tokenName,
  balance,
  balanceUsd,
  tokenSymbol,
  className,
  ...props
}: AssetCardHorizontalProps) {
  return (
    <div
      className={`rounded-default flex w-full items-center justify-between space-x-3 overflow-hidden p-3 ${className}`}
      {...props}
    >
      <div className={'flex flex-1 items-center space-x-3'}>
        <div className={'flex h-6 w-6 items-center bg-transparent'}>
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

        <div className={'flex flex-col'}>
          <h3 className={'block truncate whitespace-nowrap font-semibold'}>
            {tokenName !== '' ? tokenName : 'Unknown Token'}
          </h3>
          <span
            className={'label block truncate whitespace-nowrap leading-none'}
          >
            {tokenSymbol !== '' ? tokenSymbol : 'UNKNOWN'}
          </span>
        </div>
      </div>

      <div className={'flex flex-shrink-0 flex-col overflow-hidden text-right'}>
        <span className={'truncate font-semibold'}>
          {formatBalance(balance)}{' '}
          {tokenSymbol !== '' ? tokenSymbol : 'UNKNOWN'}
        </span>
        <span className={'label block truncate leading-none'}>
          {formatCurrency(balanceUsd)}
        </span>
      </div>
    </div>
  );
}

export function WithdrawTab({
  balance: { assets } = { totalBalanceUsd: '0.00', assets: [] },
}: SplitTemplateTabProps) {
  const { control, handleSubmit, setValue, watch } = useForm<{
    assets?: (Balance | null)[];
  }>({
    defaultValues: { assets },
    values: {
      assets,
    },
  });

  const withdrawBalance = (watch('assets') || []).reduce(
    (total, asset) => total + Number(asset?.balanceUsd || '0'),
    0
  );

  return (
    <section>
      <div className={'container'}>
        <div className={'space-y-6'}>
          <h2 className={'title-3'}>Withdraw</h2>
          <p>
            Please select the tokens you want to withdraw and confirm your
            selection.
          </p>
        </div>

        <form>
          <div className={'flex w-full flex-col'}>
            <ul className={'divide-default flex flex-col divide-y'}>
              {assets?.map((asset, index) => (
                <li
                  key={asset.tokenSymbol}
                  className={'flex items-center space-x-3'}
                >
                  <Controller
                    name={`assets.${index}`}
                    control={control}
                    render={({ field: { value } }) => (
                      <>
                        <InputCheckbox
                          onChange={() =>
                            setValue(`assets.${index}`, !value ? asset : null)
                          }
                          checked={!!value}
                        />
                        <AssetCardHorizontal
                          {...asset}
                          className={
                            !value ? 'bg-transparent' : 'bg-transparent'
                          }
                        />
                      </>
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
        </form>

        <div className='flex flex-col space-y-6 p-6'>
          <Statistic title={'Withdraw Balance'}>
            {formatCurrency(withdrawBalance)}
          </Statistic>

          <ButtonPrimary
            onClick={handleSubmit((data) => console.log('submit', data))}
          >
            Withdraw
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
