import { Balance } from '@ankr.com/ankr.js/dist/types';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useToggle } from 'react-use';

import { formatCurrency, formatCurrencyAmount } from '@/lib/utils';
import clsxm from '@/lib/utils/clsxm';
import useWithdrawSplit from '@/hooks/useWithdrawSplit';

import { ButtonPrimary } from '@/components/Button';
import Form from '@/components/Form';
import FormGroup from '@/components/Form/FormGroup';
import InputListbox from '@/components/Form/InputListbox';
import InputSwitch from '@/components/Form/InputSwitch';

import { useSplit } from '@/context/SplitContext';
import WithdrawModal from '@/templates/split/details/WithdrawTab/WithdrawModal';

import AssetCardHorizontal from './AssetCardHorizontal';
import WithdrawListboxDisplay from './WithdrawListboxDisplay';

interface WithdrawData {
  assets?: Balance[];
  distribute: boolean;
}

function WithdrawFormInner() {
  const {
    watch,
    formState: { isValid },
  } = useFormContext<WithdrawData>();
  const assets = watch('assets');
  const distribute = watch('distribute');

  const { balance, accountShare, split } = useSplit();

  const total = assets?.reduce(
    (total, asset) => ({
      balance: total.balance + Number(asset?.balanceUsd || '0.00'),
      assetCount: total.assetCount + Number(asset.balance || '0.00'),
    }),
    { balance: 0, assetCount: 0 }
  ) || { balance: 0, assetCount: 0 };

  const userWithdrawal = Number(accountShare?.value || '0.00') * total?.balance;

  const totalWithdrawal = distribute ? total?.balance : userWithdrawal;

  const summary: Record<string, string> = {
    'Total Withdrawal': formatCurrency(totalWithdrawal),
    'Your Withdrawal': formatCurrency(userWithdrawal),
    'Withdrawal Fee': formatCurrency(0),
  };

  const { ...tx } = useWithdrawSplit(split.address, assets);
  const [isModalOpen, setIsModalOpen] = useToggle(false);

  return (
    <>
      <FormGroup
        title={'Select Assets'}
        description={'Specify the tokens you want to withdraw.'}
      >
        <InputListbox<Balance>
          label='Assets'
          id='assets'
          validation={{
            validate: (v) => v.length > 0 || 'Please select at least one Asset',
            required: {
              value: true,
              message: 'Please select at least one Asset',
            },
          }}
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

      <div className='pt-6'>
        <table className={'w-full table-fixed '}>
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
              <td className={'border-default border-b pt-2'} />
              <td className={'border-default border-b pt-2'} />
            </tr>
            <tr className={'font-semibold'}>
              <td className={'table-cell pt-2'}>You Receive</td>
              <td className={'table-cell pt-2'}>
                {formatCurrency(userWithdrawal)} (
                {formatCurrencyAmount(total.assetCount.toString())} tokens)
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <FormGroup>
        <ButtonPrimary
          disabled={!isValid || tx.isError || tx.isLoading}
          type={'button'}
          onClick={() => {
            tx.write?.();
            setIsModalOpen(true);
          }}
        >
          Withdraw
        </ButtonPrimary>
      </FormGroup>

      <WithdrawModal
        {...tx}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export function WithdrawForm() {
  const { balance } = useSplit();

  const assets = balance?.assets || [];

  return (
    <Form<WithdrawData>
      values={{ assets, distribute: false }}
      className={'rounded-default border-default space-y-6 border p-6'}
    >
      <WithdrawFormInner />
    </Form>
  );
}
