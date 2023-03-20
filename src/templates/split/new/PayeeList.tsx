import { replace } from 'lodash';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AiOutlinePercentage } from 'react-icons/ai';

import Input from '@/components/Form/Input';
import InputFieldArray from '@/components/Form/InputFieldArray';

import PayeeListFooter from '@/templates/split/new/PayeeListFooter';

export interface Payee {
  id: string;
  value: number | null;
}

interface PayeeListProps {
  id: string;
}

export const defaultPayee: Payee = {
  id: '',
  value: null,
};

export default function PayeeList({ id }: PayeeListProps) {
  const maxShares = 100.0;

  const { watch, setValue } = useFormContext();

  const payees = watch(id) as Payee[];

  const totalShares = payees.reduce((total, p) => total + Number(p.value), 0);
  const totalPayees = payees.length;

  function onSetValuesRemaining() {
    const shouldSet = (p: Payee) => Number(p.value) <= 0.0;
    const count = payees.reduce(
      (total, p) => total + (shouldSet(p) ? 1 : 0),
      0.0
    );
    const value = (maxShares - totalShares) / count;
    payees.forEach(
      (p, i) => shouldSet(p) && setValue(`${id}.${i}.value`, value)
    );
  }

  function onSetValuesEvenly() {
    const count = payees.length;
    const value = maxShares / count;
    payees.forEach((p, i) => setValue(`${id}.${i}.value`, value));
  }

  return (
    <div className={'flex flex-col space-y-6'}>
      <InputFieldArray<Payee>
        id={id}
        defaultItem={defaultPayee}
        validation={{ minLength: 2 }}
      >
        {(itemId) => (
          <>
            <div className={'flex-1'}>
              <Input
                label={'Wallet Address or ENS Name'}
                placeholder={'0x000...000'}
                id={`${itemId}.id`}
              />
            </div>

            <div className={'w-28'}>
              <Input
                type={'number'}
                label={'Share'}
                min={0}
                max={maxShares}
                step='0.01'
                placeholder={'0.00'}
                iconAfter={<AiOutlinePercentage />}
                id={`${itemId}.value`}
              />
            </div>
          </>
        )}
      </InputFieldArray>

      <PayeeListFooter
        {...{
          totalShares,
          maxShares,
          totalPayees,
          onSetValuesRemaining,
          onSetValuesEvenly,
        }}
      />
    </div>
  );
}
