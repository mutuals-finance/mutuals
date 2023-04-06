import { Balance } from '@ankr.com/ankr.js/dist/types';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { formatCurrency, formatCurrencyAmount } from '@/lib/utils';
import clsxm from '@/lib/utils/clsxm';

import { ButtonPrimary } from '@/components/Button';
import Form from '@/components/Form';
import FormGroup from '@/components/Form/FormGroup';
import InputListbox from '@/components/Form/InputListbox';
import InputSwitch from '@/components/Form/InputSwitch';

import { useSplit } from '@/context/SplitContext';

import AssetCardHorizontal from './AssetCardHorizontal';
import WithdrawListboxDisplay from './WithdrawListboxDisplay';

interface WithdrawData {
  assets?: Balance[];
  distribute: boolean;
}

function WithdrawFormInner() {
  const { watch } = useFormContext<WithdrawData>();
  const assets = watch('assets');
  const distribute = watch('distribute');

  const { balance, accountShare } = useSplit();

  const total = assets?.reduce(
    (total, asset) => ({
      balance: total.balance + Number(asset?.balanceUsd),
      assetCount: total.assetCount + Number(asset.balance),
    }),
    { balance: 0, assetCount: 0 }
  ) || { balance: 0, assetCount: 0 };

  const userWithdrawal = Number(accountShare?.value) * total?.balance;

  const totalWithdrawal = distribute ? total?.balance : userWithdrawal;

  const summary: Record<string, string> = {
    'Total Withdrawal': formatCurrency(totalWithdrawal),
    'Your Withdrawal': formatCurrency(userWithdrawal),
    'Withdrawal Fee': formatCurrency(0),
  };

  return (
    <>
      <FormGroup>
        <InputListbox<Balance>
          label='Assets'
          id='assets'
          options={balance?.assets}
          multiple={true}
          by={'contractAddress'}
          displayFn={WithdrawListboxDisplay}
        >
          {({ item, selected, active }) => (
            <button
              type={'button'}
              className={clsxm('flex w-full items-center text-left transition')}
            >
              <AssetCardHorizontal
                {...item}
                selected={selected}
                active={active}
              />
            </button>
          )}
        </InputListbox>
      </FormGroup>

      <FormGroup
        title={'Distribute'}
        description={
          'Specify whether you want to distribute assets to all the recipients of this split.'
        }
      >
        <InputSwitch id={'distribute'} label={'Enable Distribution'} />
      </FormGroup>

      <div className='border-default rounded-default border p-6'>
        <table className={'w-full table-fixed'}>
          <tbody>
            {Object.keys(summary).map((name) => (
              <tr key={name}>
                <td className={'table-cell'}>{name}</td>
                <td className={'table-cell'}>{summary[name]}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td className={'border-default table-cell border-b pt-1.5'} />
              <td className={'border-default table-cell border-b pt-1.5'} />
            </tr>

            <tr className={'font-medium'}>
              <td className={'table-cell pt-1.5'}>You Receive</td>
              <td className={'table-cell pt-1.5'}>
                {formatCurrencyAmount(total.assetCount.toString())} tokens (
                {formatCurrency(userWithdrawal)})
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <ButtonPrimary onClick={(data) => console.log('submit', data)}>
        Withdraw
      </ButtonPrimary>
    </>
  );
}

export function WithdrawForm() {
  const { balance } = useSplit();
  const assets = balance?.assets || [];

  return (
    <Form<WithdrawData> defaultValues={{ assets }} className={'space-y-6'}>
      {() => <WithdrawFormInner />}
    </Form>
  );
}
