import React from 'react';
import { useFormContext } from 'react-hook-form';
import { IoPersonAdd, IoWallet, IoWalletOutline } from 'react-icons/io5';

import { ButtonOutline } from '@/components/Button';
import Input from '@/components/Form/Input';
import InputFieldArray from '@/components/Form/InputFieldArray';
import InputNumber from '@/components/Form/InputNumber';
import Statistic from '@/components/Statistic';

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
  value: 0.0,
};

export default function PayeeList({ id }: PayeeListProps) {
  const maxShares = 100.0;

  const { watch, setValue } = useFormContext();

  const payees = watch(id) as Payee[];

  const totalShares = payees.reduce(
    (total, p) => (total * 100 + Number(p.value) * 100) / 100,
    0.0
  );
  const totalPayees = payees.length;

  function round(x: number, alg = Math.round, decimal = 2) {
    const pow = Math.pow(10, decimal);
    return alg((x + Number.EPSILON) * pow) / pow;
  }

  function _setValues(total: number, indices: number[]) {
    const value = round(total / indices.length, Math.floor);
    const diff = round(total % (value * indices.length));
    let steps = diff * 100;
    indices.forEach((index) =>
      setValue(
        `${id}.${index}.value`,
        round(steps > 0 ? steps-- && value + 0.01 : value)
      )
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
                fullWidth
                size={'sm'}
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
                id={`${itemId}.value`}
                label={'% Share'}
                validation={{
                  min: 0.0,
                  max: maxShares,
                }}
                step={0.01}
                addDisabled={totalShares >= maxShares}
                removeDisabled={totalShares <= 0.0}
                allowNegative={false}
                decimalScale={2}
                defaultValue={0.0}
                fixedDecimalScale={true}
              />
            </div>
          </>
        )}
      </InputFieldArray>
    </div>
  );
}
