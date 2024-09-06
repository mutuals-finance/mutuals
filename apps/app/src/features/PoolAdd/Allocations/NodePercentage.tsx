import { HStack } from "@mutuals/ui";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";

import { formatRoundNumber } from "@/utils";

import Input from "@/components/Form/Input";
import InputFieldArray from "@/components/Form/InputFieldArray";
import InputNumber from "@/components/Form/InputNumber";
import PoolAddAllocationNodePercentageFooter from "@/features/PoolAdd/Payees/Footer";
import { AllocationNode, PoolAddData } from "@/features/PoolAdd/types";
import { defaultAllocation } from "@/features/PoolAdd/Allocations/index";

interface PoolAddAllocationNodePercentageProps {
  id: string;
}

export default function PoolAddAllocationNodePercentage({
  id,
}: PoolAddAllocationNodePercentageProps) {
  const maxShares = 100.0;

  const { control, setValue } = useFormContext<PoolAddData>();

  const payees = useWatch({ name: "allocations", control });

  const totalShares = payees.reduce(
    (total, p) =>
      (total * 100 +
        Number(!!p.node && "shares" in p.node && p.node.shares) * 100) /
      100,
    0.0,
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
        `allocations.${index}.node.shares` as any,
        formatRoundNumber(steps > 0 ? steps-- && value + 0.01 : value),
      );
    });
  }

  function onSetValuesRemaining() {
    _setValues(
      maxShares - totalShares,
      payees
        .map((p, index) => ({ index, ...p }))
        .filter(
          (p: AllocationNode) =>
            Number(!!p.node && "shares" in p.node && p.node.shares) <= 0,
        )
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
    <InputFieldArray<AllocationNode>
      id={id}
      defaultItem={defaultAllocation}
      hideAdd={true}
      validation={{ minLength: 2 }}
      contentAfter={({ append }) => (
        <PoolAddAllocationNodePercentageFooter
          totalShares={totalShares}
          maxShares={maxShares}
          totalPayees={totalPayees}
          onAppendRecipient={() => append(defaultAllocation)}
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
            size={"sm"}
          />

          <HStack maxW="48">
            <InputNumber
              id={`${itemId}.value`}
              label={"% Share"}
              validation={{
                min: 0.0,
                max: maxShares,
              }}
              size={"sm"}
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
