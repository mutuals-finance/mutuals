import React, { Fragment } from "react";
import {
  StackProps,
  Heading,
  IconButton,
  MenuContent,
  MenuItem,
  MenuRoot,
  Stack,
  MenuTrigger,
  MenuTriggerItem,
  Separator,
  Group,
} from "@mutuals/ui";
import {
  UseAllocationData,
  useAllocationData,
  UseAllocationDataArgs,
} from "@/features/PoolAdd/Allocations/useAllocationData";
import { useAllocationUtils } from "@mutuals/sdk-react";
import Input from "@/components/Form/Input";
import {
  IoAdd,
  IoEllipsisHorizontal,
  IoEllipsisVerticalSharp,
  IoTrashBinOutline,
  IoTrashSharp,
} from "react-icons/io5";
import PoolAddAllocationMenu from "@/features/PoolAdd/Allocations/Menu";
import NumberInput from "@/components/Form/NumberInput";

interface PoolAddAllocationsItemProps extends StackProps {
  depth?: number;
  allocationDataArgs: UseAllocationDataArgs;
  contentRowAfter?:
    | React.ReactNode
    | ((method: UseAllocationData) => React.ReactNode);
}

export default function PoolAddAllocationsItem({
  depth = 0,
  allocationDataArgs,
  children,
  contentRowAfter,
  ...props
}: PoolAddAllocationsItemProps) {
  const methods = useAllocationData(allocationDataArgs);
  const { isGroup, isPercentage, isFixed } = useAllocationUtils();

  return (
    <Stack direction={"row"} w="full" {...props}>
      {children}

      <Stack flex={"1 0 auto"}>
        {methods.fields.map((item, index) => (
          <Fragment key={item.id}>
            <Stack direction={"row"}>
              {!isGroup(item.node) ? (
                <Input
                  placeholder={"0x0000...0000"}
                  id={`${allocationDataArgs.id}.${index}.node.recipient`}
                  size={"sm"}
                  w={"full"}
                />
              ) : (
                <Stack w={"full"} justifyContent={"center"}>
                  <Heading variant={"subtag"} size={"xs"}>
                    Group {index}
                  </Heading>
                </Stack>
              )}

              <NumberInput
                id={`${allocationDataArgs.id}.${index}.node.value`}
                wrapperHidden={true}
                inputProps={{
                  allowMouseWheel: true,
                  step: isFixed(item.node) ? 1 : 0.01,
                  formatOptions: isFixed(item.node) ? {} : { style: "percent" },
                  min: 0,
                }}
                size={"sm"}
                w={"32"}
                flex={"0 0 auto"}
              />

              <Group attached={true}>
                <MenuRoot>
                  <MenuTrigger asChild>
                    <IconButton
                      variant={"ghost"}
                      size={"sm"}
                      aria-label="Row Action"
                    >
                      <IoAdd />
                    </IconButton>
                  </MenuTrigger>
                  <MenuContent>
                    <PoolAddAllocationMenu index={index} methods={methods} />
                  </MenuContent>
                </MenuRoot>

                <MenuRoot>
                  <MenuTrigger asChild>
                    <IconButton
                      variant={"ghost"}
                      size={"sm"}
                      aria-label="Row Action"
                    >
                      <IoEllipsisVerticalSharp />
                    </IconButton>
                  </MenuTrigger>
                  <MenuContent>
                    <MenuRoot
                      positioning={{ placement: "right-start", gutter: 2 }}
                    >
                      <MenuTriggerItem>Change Type</MenuTriggerItem>
                      <MenuContent>
                        {!isGroup(item.node) ? (
                          <>
                            <MenuItem value={"default-group"}>
                              Default Group
                            </MenuItem>
                            <MenuItem value={"timed-group"}>
                              Timed Group
                            </MenuItem>
                            <MenuItem value={"prioritized-group"}>
                              Prioritized Group
                            </MenuItem>
                          </>
                        ) : (
                          <MenuItem value={"recipient"}>Default Item</MenuItem>
                        )}
                      </MenuContent>
                    </MenuRoot>
                    <MenuRoot
                      positioning={{ placement: "right-start", gutter: 2 }}
                    >
                      <MenuTriggerItem>Change Calculation</MenuTriggerItem>
                      <MenuContent>
                        <MenuItem
                          value={"percentage"}
                          disabled={isPercentage(item.node)}
                        >
                          Percentage
                        </MenuItem>
                        <MenuItem value={"fixed"} disabled={isFixed(item.node)}>
                          Fixed
                        </MenuItem>
                      </MenuContent>
                    </MenuRoot>
                  </MenuContent>
                </MenuRoot>

                <IconButton
                  size={"sm"}
                  variant={"ghost"}
                  colorPalette={"red"}
                  value={"remove"}
                  onClick={() => methods.remove(index)}
                >
                  <IoTrashBinOutline />
                </IconButton>
              </Group>
            </Stack>

            {isGroup(item.node) && (
              <PoolAddAllocationsItem
                allocationDataArgs={{
                  id: `${allocationDataArgs.id}.${index}.children`,
                }}
                depth={depth + 1}
              >
                <Separator
                  flex={"0 0 auto"}
                  mx={"4"}
                  variant="dashed"
                  orientation="vertical"
                />
              </PoolAddAllocationsItem>
            )}
          </Fragment>
        ))}

        {!!contentRowAfter &&
          (typeof contentRowAfter == "function"
            ? contentRowAfter(methods)
            : contentRowAfter)}
      </Stack>
    </Stack>
  );
}
