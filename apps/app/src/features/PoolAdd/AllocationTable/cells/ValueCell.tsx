import React, { useEffect } from "react";

import { AllocationTableCellProps } from "@/features/PoolAdd/types";
import NumberInput from "@/components/Form/NumberInput";
import { useAllocationUtils } from "@mutuals/sdk-react";
import { getNodeIdFromCellContext } from "@/features/PoolAdd/AllocationTable/utils";

type ValueCellProps = AllocationTableCellProps<number>;

export function ValueCell({ id: rootId, ...context }: ValueCellProps) {
  const id = getNodeIdFromCellContext(context, rootId);

  const { isFixed } = useAllocationUtils();
  const isFixedAllocation = isFixed(context.row.original.node);

  return (
    <NumberInput
      id={id}
      wrapperHidden={true}
      inputProps={{
        step: isFixedAllocation ? 1 : 0.01,
        formatOptions: isFixedAllocation
          ? { style: "decimal", unitDisplay: "long" }
          : { style: "percent" },
      }}
      size={"sm"}
      w="full"
    />
  );
}
