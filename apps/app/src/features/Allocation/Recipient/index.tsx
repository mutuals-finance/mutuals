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
import AllocationGroup from "@/features/Allocation/Group";
import { useAllocation } from "@/features/Allocation/useAllocation";
import AllocationMenu, {
  AllocationMenuMethodProps,
} from "@/features/Allocation/Menu";
import { useWatch } from "react-hook-form";
import { PoolAddData } from "@/features/PoolAdd/types";
import { AllocationItemBaseProps } from "@/features/Allocation/types";

interface AllocationRecipientProps
  extends AllocationItemBaseProps,
    AllocationMenuMethodProps,
    Allocation {
  id?: string;
  onRemove?: () => void;
}

export default function AllocationRecipient({
  depth = 0,
  id: _id,
  onRemove,
  onInsert,
  ...allocation
}: AllocationRecipientProps) {
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
          <AllocationMenu onInsert={onInsert} />
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
            onClick={() => onRemove?.()}
          >
            <IoTrashBinOutline />
          </IconButton>
        </Group>
      </Stack>

      {isGroup && allocation?.children && allocation?.children.length > 0 && (
        <AllocationGroup
          allocationDataArgs={{
            id: `${id}.children`,
          }}
          depth={depth + 1}
        />
      )}
    </>
  );
}
