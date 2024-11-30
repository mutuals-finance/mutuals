import {
  IconButton,
  Stack,
  Group,
  createListCollection,
  MenuRoot,
  MenuTrigger,
  InputGroup,
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
import Input from "@/components/Form/Input";
import NumberInput from "@/components/Form/NumberInput";
import Select from "@/components/Form/Select";
import PoolAddAllocationsGroup, {
  PoolAddAllocationsGroupSharedItemProps,
} from "@/features/PoolAdd/Allocations/Group";
import { useAllocation } from "@/features/PoolAdd/Allocations/useAllocation";
import PoolAddAllocationMenu, {
  PoolAddAllocationMenuMethodProps,
} from "@/features/PoolAdd/Allocations/Menu";
import { useWatch } from "react-hook-form";
import { useEffect } from "react";
import { PoolAddData } from "@/features/PoolAdd/types";

interface PoolAddAllocationsItemProps
  extends PoolAddAllocationsGroupSharedItemProps,
    PoolAddAllocationMenuMethodProps,
    Allocation {
  id?: string;
  onRemove?: () => void;
}

export default function PoolAddAllocationsItem({
  depth = 0,
  id: _id,
  onRemove,
  onInsert,
  ...allocation
}: PoolAddAllocationsItemProps) {
  const id = _id as `allocations.${number}`;
  const [calculationType, recipientType] = useWatch<PoolAddData>({
    name: [`${id}.calculationType.0`, `${id}.recipientType.0`],
  }) as [CalculationType, RecipientType];

  const { isFixed, isRecipient, isGroup } = useAllocation(
    allocation,
    calculationType,
    recipientType,
  );

  const selectItems = {
    recipient: Object.values(RECIPIENT_TYPE_CONFIG).map(({ key, name }) => ({
      value: key,
      children: name,
    })),
    calculation: Object.values(CALCULATION_TYPE_CONFIG).map(
      ({ key, name }) => ({ value: key, children: name }),
    ),
  };

  return (
    <>
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
          <PoolAddAllocationMenu onInsert={onInsert} />
        </MenuRoot>

        {[
          {
            collection: createListCollection({
              items: selectItems.calculation,
            }),
            children: calculationTypeName,
            id: `${id}.calculationType`,
            flexBasis: "32",
          },
          {
            collection: createListCollection({
              items: selectItems.recipient,
            }),
            children: recipientTypeName,
            id: `${id}.recipientType`,
            flexBasis: "44",
          },
        ].map(({ children: selectChildren, ...selectProps }, i) => (
          <Select<any>
            key={selectProps.id + "-" + i}
            hideWrapper={true}
            size={"sm"}
            flexShrink={"0"}
            {...selectProps}
          >
            {selectChildren}
          </Select>
        ))}

        {isRecipient && (
          <Input
            hideWrapper={true}
            placeholder={"0x0000...0000"}
            id={`${id}.recipient`}
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
            hideWrapper={true}
            inputProps={{
              allowMouseWheel: true,
              step: !isFixed ? 0.1 : 1,
              min: 0,
              max: !isFixed ? 100 : 9999,
              inputInputProps: { ps: "2.2em" },
            }}
            size={"sm"}
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
            onClick={() => onRemove?.()}
          >
            <IoTrashBinOutline />
          </IconButton>
        </Group>
      </Stack>

      {isGroup && allocation?.children && allocation?.children.length > 0 && (
        <PoolAddAllocationsGroup
          allocationDataArgs={{
            id: `${id}.children`,
          }}
          depth={depth + 1}
        />
      )}
    </>
  );
}
