import React from 'react';
import { AiOutlinePercentage } from 'react-icons/ai';
import { IoEllipsisHorizontal } from 'react-icons/io5';

import clsxm from '@/lib/utils/clsxm';

import { ButtonOutline } from '@/components/Button';
import Statistic from '@/components/Statistic';

interface PayeeListFooterProps {
  totalShares: number;
  totalPayees: number;
  maxShares: number;
  onSetValuesRemaining(): void;
  onSetValuesEvenly(): void;
}

export default function PayeeListFooter({
  totalShares,
  totalPayees,
  maxShares,
  onSetValuesRemaining,
  onSetValuesEvenly,
}: PayeeListFooterProps) {
  return (
    <div
      className={
        'border-default bg-default rounded-default flex flex-col space-y-3 border p-6'
      }
    >
      <div
        className={
          'relative block h-1 w-full overflow-hidden rounded bg-carlo/10'
        }
      >
        <span
          className={clsxm(
            'absolute top-0 left-0 h-full bg-carlo transition-all',
            totalShares == maxShares && 'bg-green-500',
            totalShares > maxShares && 'bg-error'
          )}
          style={{ width: totalShares + '%' }}
        />
      </div>

      <div className={'grid w-full grid-cols-2 gap-3 md:grid-cols-5'}>
        <Statistic title={'Allocated'} suffix={<AiOutlinePercentage />}>
          <span className={'inline-block min-w-[1.75rem]'}>{totalShares}</span>
          <span className={'mx-0.5 inline-block'}>/</span>
          <span className={'inline-block min-w-[1.75rem]'}>{maxShares}</span>
        </Statistic>

        <Statistic title={'Total Payees'}>{totalPayees}</Statistic>

        <ul className={'flex justify-end space-x-3 md:col-span-3'}>
          <li>
            <ButtonOutline
              rounded={'small'}
              size={'xs'}
              onClick={(e) => {
                e.preventDefault();
                onSetValuesRemaining();
              }}
            >
              Split Remaining
            </ButtonOutline>
          </li>
          <li>
            <ButtonOutline
              rounded={'small'}
              size={'xs'}
              onClick={(e) => {
                e.preventDefault();
                onSetValuesEvenly();
              }}
            >
              Split Evenly
            </ButtonOutline>
          </li>
          <li>
            <ButtonOutline
              icon={<IoEllipsisHorizontal />}
              rounded={'small'}
              size={'xs'}
              onClick={(e) => e.preventDefault()}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
