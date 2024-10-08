import React from "react";
import { AllocationTableCellProps } from "@/features/PoolAdd/types";
import { Box, Checkbox, HStack, Separator } from "@mutuals/ui";

type CheckboxCellProps = AllocationTableCellProps;

export function CheckboxCell({ row }: CheckboxCellProps) {
  return (
    <HStack>
      {row.depth > 0 && (
        <Box w={row.depth * 4} h={"8"} position={"relative"}>
          <Separator
            position="absolute"
            top="-3"
            h={"calc(100% + var(--chakra-spacing-3) * 2)"}
            left="50%"
            transform="translateX(-50%)"
            orientation="vertical"
            variant="dashed"
          />
        </Box>
      )}

      <Checkbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    </HStack>
  );
}
