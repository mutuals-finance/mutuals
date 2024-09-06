import { HStack } from "@mutuals/ui";
import React from "react";
import { useFormContext } from "react-hook-form";

import { formatRoundNumber } from "@/utils";

import Input from "@/components/Form/Input";
import InputFieldArray from "@/components/Form/InputFieldArray";
import InputNumber from "@/components/Form/InputNumber";
import PoolAddPercentageFooter from "@/features/PoolAdd/Payees/Footer";
import { AllocationPercentage, AllocationType } from "@mutuals/sdk-react";

interface PoolAddPercentageProps {
  id: string;
}

export const defaultRecipient: AllocationPercentage = {
  id: 0n,
  share: 0n,
  allocationType: AllocationType.Percentage,
  version: "1",
  recipient: "0x",
};

export default function PoolAddPercentage({ id }: PoolAddPercentageProps) {
  const maxShares = 100.0;

  const { watch, setValue } = useFormContext();

  const payees = watch(id) as AllocationPercentage[];

  const totalShares = payees.reduce(
    (total, p) => (total * 100 + Number(p.share) * 100) / 100,
    0,
  );
  const totalPayees = payees.length;

  function _setValues(total: number, children: number[]) {
    const value = formatRoundNumber(total / children.length, {
      round: Math.floor,
    });
    const diff = formatRoundNumber(total % (value * children.length));
    let steps = diff * 100;
    children.forEach((index) => {
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
        .filter((p: AllocationPercentage) => Number(p.share) <= 0)
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
    <InputFieldArray<AllocationPercentage>
      id={id}
      defaultItem={defaultRecipient}
      hideAdd={true}
      validation={{ minLength: 2 }}
      contentAfter={({ append }) => (
        <PoolAddPercentageFooter
          totalShares={totalShares}
          maxShares={maxShares}
          totalPayees={totalPayees}
          onAppendRecipient={() => append(defaultRecipient)}
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
