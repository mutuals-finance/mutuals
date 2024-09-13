import React from "react";
import { AllocationTableCellProps } from "@/features/PoolAdd/types";
import Input from "@/components/Form/Input";
import { HStack, IconButton, Checkbox } from "@mutuals/ui";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";
import InputSelect from "@/components/Form/InputSelect";

type AddressCellProps = AllocationTableCellProps;

export function GroupCell({ getValue, row }: AddressCellProps) {
  const itemId = "any";
  return (
    <HStack pl={`${row.depth * 4}`}>
      <IconButton
        size={"xs"}
        icon={row.getIsExpanded() ? <IoChevronDown /> : <IoChevronForward />}
        aria-label={"Toggle Expanded Row"}
        isDisabled={!row.getCanExpand()}
        onClick={row.getToggleExpandedHandler()}
        variant={"ghost"}
      />

      <Checkbox
        {...{
          checked: row.getIsSelected(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
      <InputSelect
        options={["Timed", "Prioritized"]}
        id={`${itemId}.allocationType`}
        size={"sm"}
      />
    </HStack>
  );
}
