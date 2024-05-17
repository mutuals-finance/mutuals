import { HStack } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { formatRoundNumber } from '@/lib/utils';

import Input from '@/components/Form/Input';
import InputFieldArray from '@/components/Form/InputFieldArray';
import InputNumber from '@/components/Form/InputNumber';
import PayeeListFooter from '@/app/(dashboard)/pool/new/PayeeList/PayeeListFooter';

export interface Payee {
  id: string;
  value: string;
}

interface PayeeListProps {
  id: string;
}

export const defaultPayee: Payee = {
  id: '',
  value: '0.0',
};

export default function PayeeList({ id }: PayeeListProps) {
  const maxShares = 100.0;

  const { watch, setValue } = useFormContext();

  const payees = watch(id) as Payee[];

  const totalShares = payees.reduce(
    (total, p) => (total * 100 + Number(p.value) * 100) / 100,
    0.0,
  );
  const totalPayees = payees.length;

  function _setValues(total: number, indices: number[]) {
    const value = formatRoundNumber(total / indices.length, {
      round: Math.floor,
    });
    const diff = formatRoundNumber(total % (value * indices.length));
    let steps = diff * 100;
    indices.forEach((index) => {
      setValue(
        `${id}.${index}.value`,
        formatRoundNumber(steps > 0 ? steps-- && value + 0.01 : value),
      );
    });
  }

  function onSetValuesRemaining() {
    _setValues(
      maxShares - totalShares,
      payees
        .map((p, index) => ({ index, ...p }))
        .filter((p: Payee) => Number(p.value) <= 0)
        .map((p) => p.index),
    );
  }

  function onSetValuesEvenly() {
    _setValues(
      maxShares,
      payees.map((_, index) => index),
    );
  }

  return (
    <InputFieldArray<Payee>
      id={id}
      defaultItem={defaultPayee}
      hideAdd={true}
      validation={{ minLength: 2 }}
      contentAfter={({ append }) => (
        <PayeeListFooter
          totalShares={totalShares}
          maxShares={maxShares}
          totalPayees={totalPayees}
          onAppendRecipient={() => append(defaultPayee)}
          onSetValuesRemaining={onSetValuesRemaining}
          onSetValuesEvenly={onSetValuesEvenly}
        />
      )}
    >
      {(itemId) => (
        <>
          <Input
            flex={'1'}
            label={'Wallet Address or ENS Name'}
            placeholder={'0x0000...0000'}
            id={`${itemId}.id`}
          />

          <HStack maxW='48'>
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
              precision={2}
              defaultValue={0.0}
            />
          </HStack>
        </>
      )}
    </InputFieldArray>
  );
}
