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
  value: number;
}

interface PayeeListProps {
  id: string;
}

export const defaultPayee: Payee = {
  id: '',
  value: 0,
};

export default function PayeeList({ id }: PayeeListProps) {
  const maxShares = 10000;

  const { watch, setValue } = useFormContext();

  const payees = watch(id) as Payee[];

  const totalShares = payees.reduce((total, p) => total + Number(p.value), 0);
  const totalPayees = payees.length;

  function _setValues(total: number, indices: number[]) {
    const value = Math.floor(total / indices.length);
    let diff = total - value * indices.length;
    indices.forEach((index) =>
      setValue(`${id}.${index}.value`, diff > 0 ? diff-- && value + 1 : value)
    );
  }

  function onSetValuesRemaining() {
    _setValues(
      maxShares - totalShares,
      payees
        .map((p, index) => ({ index, ...p }))
        .filter((p: Payee) => Number(p.value) <= 0)
        .map((p) => p.index)
    );
  }

  function onSetValuesEvenly() {
    _setValues(
      maxShares,
      payees.map((_, index) => index)
    );
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
                  max: maxShares,
                }}
                addDisabled={totalShares >= maxShares}
                removeDisabled={totalShares <= 0}
                id={`${itemId}.value`}
              />
            </div>
          </>
        )}
      </InputFieldArray>
    </div>
  );
}
