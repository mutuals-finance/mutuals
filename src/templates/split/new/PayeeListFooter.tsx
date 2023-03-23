import React from 'react';
import { AiOutlinePercentage } from 'react-icons/ai';

import clsxm from '@/lib/utils/clsxm';

import { ButtonOutline } from '@/components/Button';
import Statistic from '@/components/Statistic';

interface PayeeListFooterProps {
  totalShares: number;
  totalPayees: number;
  maxShares: number;
  onAppendRecipient(): void;
  onSetValuesRemaining(): void;
  onSetValuesEvenly(): void;
}

export default function PayeeListFooter({
  totalShares,
  maxShares,
  onAppendRecipient,
  onSetValuesRemaining,
  onSetValuesEvenly,
}: PayeeListFooterProps) {
  return (
    <>
      <div>
        <ButtonOutline
          fullWidth
          type='button'
          size={'sm'}
          onClick={() => onAppendRecipient()}
        >
          Add Recipient
        </ButtonOutline>
      </div>

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

        <div className={'grid w-full grid-cols-2 gap-3 md:grid-cols-4'}>
          <Statistic title={'Allocated'}>
            {totalShares.toFixed(2)} / {maxShares.toFixed(2)}{' '}
            <AiOutlinePercentage className={'inline'} />
          </Statistic>

          <ul className={'flex justify-end space-x-3 md:col-span-3'}>
            <li>
              <ButtonOutline
                rounded={'small'}
                type='button'
                size={'xs'}
                onClick={() => onSetValuesRemaining()}
              >
                Split Remaining
              </ButtonOutline>
            </li>
            <li>
              <ButtonOutline
                rounded={'small'}
                size={'xs'}
                type='button'
                onClick={() => onSetValuesEvenly()}
              >
                Split Evenly
              </ButtonOutline>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
