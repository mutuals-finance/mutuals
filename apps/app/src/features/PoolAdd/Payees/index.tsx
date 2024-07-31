import { HStack } from "@mutuals/ui";
import React from "react";
import { useFormContext } from "react-hook-form";

import { formatRoundNumber } from "@/utils";

import Input from "@/components/Form/Input";
import InputFieldArray from "@/components/Form/InputFieldArray";
import InputNumber from "@/components/Form/InputNumber";
import PoolAddPayeesFooter from "@/features/PoolAdd/Payees/Footer";
import { PoolAddPayee } from "@/features/PoolAdd/types";

interface PoolAddPayeesProps {
  id: string;
}

export const defaultPayee: PoolAddPayee = {
  id: "",
  value: "0.0",
};

export default function PoolAddPayees({ id }: PoolAddPayeesProps) {
  const maxShares = 100.0;

  const { watch, setValue } = useFormContext();

  const payees = watch(id) as PoolAddPayee[];

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
        .filter((p: PoolAddPayee) => Number(p.value) <= 0)
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
    <InputFieldArray<PoolAddPayee>
      id={id}
      defaultItem={defaultPayee}
      hideAdd={true}
      validation={{ minLength: 2 }}
      contentAfter={({ append }) => (
        <PoolAddPayeesFooter
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
            flex={"1"}
            label={"Wallet Address or ENS Name"}
            placeholder={"0x0000...0000"}
            id={`${itemId}.id`}
          />

          <HStack maxW="48">
            <InputNumber
              id={`${itemId}.value`}
              label={"% Share"}
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
