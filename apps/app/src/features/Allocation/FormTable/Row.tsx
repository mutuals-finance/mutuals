import {
  IconButton,
  Stack,
  Group,
  createListCollection,
  MenuRoot,
  MenuTrigger,
  InputGroup,
  Input,
  Select,
  NumberInput,
} from "@mutuals/ui";
import {
  RECIPIENT_TYPE_CONFIG,
  CALCULATION_TYPE_CONFIG,
  recipientTypeName,
  calculationTypeName,
  Allocation,
  CalculationType,
  RecipientType,
} from "@mutuals/sdk-react";
import {
  IoAddCircleOutline,
  IoEllipsisVerticalSharp,
  IoTrashBinOutline,
} from "react-icons/io5";
import { useAllocation } from "@/features/Allocation/useAllocation";
import AllocationMenu from "@/features/Allocation/Menu";
import { useWatch } from "react-hook-form";
import { PoolAddData } from "@/features/PoolAdd/types";
import {
  useAllocationData,
  UseAllocationGroup,
} from "@/features/Allocation/useAllocationGroup";
import React, { ReactNode } from "react";
import TreeTableRow, { TreeTableRowProps } from "@/components/TreeTable/Row";

const SELECT_ITEMS = {
  recipient: Object.values(RECIPIENT_TYPE_CONFIG).map(({ key, name }) => ({
    value: key,
    children: name,
  })),
  calculation: Object.values(CALCULATION_TYPE_CONFIG).map(({ key, name }) => ({
    value: key,
    children: name,
  })),
};

export type AllocationFormTableRowProps = TreeTableRowProps<Allocation> & {
  footer?: ReactNode | ((methods: UseAllocationGroup) => ReactNode);
};

export default function AllocationFormTableRow({
  footer,
  id,
  depth = 0,
  value,
  ...props
}: AllocationFormTableRowProps) {
  const { render: _render, children: _children, ...innerProps } = props;

  const groupId = `${id}${depth >= 0 ? ".children" : ""}`;
  const methods = useAllocationData({
    id: `${groupId}`,
  });

  const { fields, remove, insert } = methods;

  const [calculationType, recipientType] = useWatch<PoolAddData>({
    // @ts-expect-error: type definition string
    name: [`${id}.calculationType.0`, `${id}.recipientType.0`],
  }) as [CalculationType, RecipientType];

  const { isFixed, isRecipient, isGroup } = useAllocation(
    value,
    calculationType,
    recipientType,
  );

  return (
    <>
      <TreeTableRow
        {...innerProps}
        depth={depth}
        value={value}
        values={isGroup ? fields : []}
        id={groupId}
        render={(p) => <AllocationFormTableRow {...p} />}
      >
        {({ index }) => (
          <Stack direction={"row"}>
            <MenuRoot>
              <MenuTrigger asChild>
                <IconButton
                  aria-label={"Add allocation"}
                  size={"sm"}
                  variant={"outline"}
                >
                  <IoAddCircleOutline />
                </IconButton>
              </MenuTrigger>
              <AllocationMenu
                onInsert={(c) => insert({ ...c, index: index })}
              />
            </MenuRoot>

            {[
              {
                collection: createListCollection({
                  items: SELECT_ITEMS.calculation,
                }),
                children: calculationTypeName,
                id: `${id}.calculationType`,
                flexBasis: "32",
              },
              {
                collection: createListCollection({
                  items: SELECT_ITEMS.recipient,
                }),
                children: recipientTypeName,
                id: `${id}.recipientType`,
                flexBasis: "44",
              },
            ].map(({ children: selectChildren, ...selectProps }, i) => (
              <Select
                key={selectProps.id + "-" + i}
                size={"sm"}
                flexShrink={"0"}
                {...selectProps}
              >
                {selectChildren}
              </Select>
            ))}

            {isRecipient && (
              <Input
                placeholder={"0x0000...0000"}
                id={`${id}.recipientAddress`}
                size={"sm"}
                flex={"1"}
              />
            )}

            <InputGroup
              ml={"auto"}
              flexBasis={"32"}
              flexShrink={"0"}
              startElement={isFixed ? "#" : "%"}
            >
              <NumberInput
                id={`${id}.value`}
                allowMouseWheel={true}
                step={!isFixed ? 0.1 : 1}
                max={!isFixed ? 100 : 9999}
                min={0}
                size={"sm"}
                inputProps={{
                  ps: "2.2em",
                }}
              />
            </InputGroup>

            <Group flexShrink={"0"}>
              <IconButton size={"sm"} variant={"outline"}>
                <IoEllipsisVerticalSharp />
              </IconButton>

              <IconButton
                size={"sm"}
                variant={"outline"}
                colorPalette={"red"}
                onClick={() => remove(index)}
              >
                <IoTrashBinOutline />
              </IconButton>
            </Group>
          </Stack>
        )}
      </TreeTableRow>

      {!footer ? null : typeof footer == "function" ? footer(methods) : footer}
    </>
  );
}
