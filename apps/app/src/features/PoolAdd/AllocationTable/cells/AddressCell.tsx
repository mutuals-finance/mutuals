import React from "react";
import { AllocationTableCellProps } from "@/features/PoolAdd/types";
import Input from "@/components/Form/Input";
import { HStack, IconButton, Checkbox } from "@mutuals/ui";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

type AddressCellProps = AllocationTableCellProps;

export function AddressCell({ getValue, row }: AddressCellProps) {
  const itemId = "any";
  return (
    <HStack pl={`${row.depth * 4}`}>
      {row.getCanExpand() && (
        <IconButton
          size={"xs"}
          icon={row.getIsExpanded() ? <IoChevronDown /> : <IoChevronForward />}
          aria-label={"Toggle Expanded Row"}
          isDisabled={!row.getCanExpand()}
          onClick={row.getToggleExpandedHandler()}
          variant={"ghost"}
        />
      )}

      <Checkbox
        ml={row.getCanExpand() ? "0" : "8"}
        {...{
          checked: row.getIsSelected(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />

      <Input placeholder={"0x0000...0000"} id={`${itemId}.id`} size={"sm"} />
    </HStack>
  );
}
