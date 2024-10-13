import React from "react";
import { AllocationTableCellProps } from "@/features/PoolAdd/types";
import { Box, Checkbox, HStack, Separator, Heading } from "@mutuals/ui";
import Input from "@/components/Form/Input";
import { getNodeIdFromCellContext } from "@/features/PoolAdd/AllocationTable/utils";
import { useAllocationUtils } from "@mutuals/sdk-react";

type CheckboxCellProps = AllocationTableCellProps;

export function CheckboxCell({ id: rootId, ...context }: CheckboxCellProps) {
  const id = getNodeIdFromCellContext(context, rootId);
  const { row } = context;
  const { isGroup } = useAllocationUtils();

  return (
    <HStack gap={"0"} justifyContent={"flex-start"}>
      {[...Array(row.depth)].map((_, depth) => (
        <Box
          w={"8"}
          flex="0 0 auto"
          key={"row-" + depth}
          h={"8"}
          position={"relative"}
        >
          <Separator
            variant="dashed"
            position="absolute"
            top="-3"
            h={"calc(100% + var(--chakra-spacing-3) * 2)"}
            left="50%"
            transform="translateX(-50%)"
            orientation="vertical"
          />
        </Box>
      ))}

      <Checkbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
        ml={"2"}
        mr={"6"}
      />

      {!isGroup(row.original.node) ? (
        <Input
          placeholder={"0x0000...0000"}
          id={`${id}.recipient`}
          size={"sm"}
        />
      ) : (
        <Box>
          <Heading variant={"subtag"} size={"xs"}>
            Group
          </Heading>
        </Box>
      )}
    </HStack>
  );
}
