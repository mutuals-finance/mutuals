import { CellContext } from "@tanstack/react-table";
import React from "react";

import {
  AllocationNode,
  AllocationTableCellProps,
} from "@/features/PoolAdd/types";
import InputNumber from "@/components/Form/InputNumber";
import { HStack } from "@mutuals/ui";

type ShareOrAmountCellProps = AllocationTableCellProps;

export function ShareOrAmountCell({}: ShareOrAmountCellProps) {
  const itemId = "any";
  return (
    <HStack maxW="40">
      <InputNumber
        id={`${itemId}.value`}
        validation={{
          min: 0.0,
          max: 100.0,
        }}
        size={"sm"}
        step={0.01}
        /*
      addDisabled={totalShares >= maxShares}
      removeDisabled={totalShares <= 0.0}
*/
        precision={2}
        defaultValue={0.0}
      />
    </HStack>
  );
}
