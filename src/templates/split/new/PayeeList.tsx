import React from 'react';
import { useFormContext } from 'react-hook-form';
import { IoAdd } from 'react-icons/io5';

import { ButtonOutline } from '@/components/Button';
import Input from '@/components/Form/Input';
import InputFieldArray from '@/components/Form/InputFieldArray';
import InputNumber from '@/components/Form/InputNumber';

import PayeeListFooter from '@/templates/split/new/PayeeListFooter';

export interface Payee {
  id: string;
  value: string;
}

interface PayeeListProps {
  id: string;
}

export const defaultPayee: Payee = {
  id: '',
  value: '',
};

export default function PayeeList({ id }: PayeeListProps) {
  const maxShares = 100.0;

  const { watch, setValue } = useFormContext();

  const payees = watch(id) as Payee[];

  const totalShares = payees.reduce((total, p) => total + Number(p.value), 0);
  const totalPayees = payees.length;

  function onSetValuesRemaining() {
    const shouldSet = (p: Payee) => Number(p.value) <= 0.0;
    const y = payees.reduce((total, p) => total + (shouldSet(p) ? 1 : 0), 0.0);
    const x = maxShares - totalShares;
    const value = Math.ceil((x / y) * 100) / 100;
    const remainder = Math.ceil((x % value) * 100) / 100;
    const first = payees.find(shouldSet) || 0;
    payees.forEach((p, i) => {
      if (shouldSet(p)) {
        const factor = i <= first && remainder > 0 ? 1 : 0;
        setValue(`${id}.${i}.value`, factor * remainder + value);
      }
    });
  }

  function onSetValuesEvenly() {
    const value = Math.ceil((maxShares / payees.length) * 100) / 100;
    const remainder = Math.ceil((maxShares % value) * 100) / 100;
    payees.forEach((_, i) => {
      const factor = i <= 0 && remainder > 0 ? 1 : 0;
      setValue(`${id}.${i}.value`, factor * remainder + value);
    });
  }

  return (
    <div className={'flex flex-col space-y-6'}>
      <InputFieldArray<Payee>
        id={id}
        defaultItem={defaultPayee}
        hideAdd={true}
        validation={{ minLength: 2 }}
        contentAfter={({ append }) => (
          <>
            <div>
              <ButtonOutline
                icon={<IoAdd />}
                onClick={(e) => {
                  e.preventDefault();
                  append(defaultPayee);
                }}
              >
                Add Recipient
              </ButtonOutline>
            </div>

            <PayeeListFooter
              {...{
                totalShares,
                maxShares,
                totalPayees,
                onSetValuesRemaining,
                onSetValuesEvenly,
              }}
            />
          </>
        )}
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

            <div className={'w-32'}>
              <InputNumber
                label={'% Share'}
                validation={{
                  min: 0,
                  max: 100,
                }}
                addDisabled={totalShares >= maxShares}
                removeDisabled={totalShares <= 0}
                max={maxShares}
                placeholder={'0.00'}
                step={0.01}
                id={`${itemId}.value`}
              />
            </div>
          </>
        )}
      </InputFieldArray>
    </div>
  );
}
