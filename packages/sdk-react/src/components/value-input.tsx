"use client";

import React, { ReactNode } from "react";
import {
  createListCollection,
  InputGroup,
  NumberInput,
  Select,
  SelectCollectionItemProps,
  createJsonTransform,
  SelectValueChangeDetails,
  NumberInputValueChangeDetails,
  Stack,
} from "@mutuals/ui";
import { ExtensionRenderInputProps } from "../types";
import { allocationIds, AllocationType } from "@mutuals/sdk";

export type ValueInputData = {
  allocationType: "fixed" | "percentage";
  value: number;
};

export const defaultValue: ValueInputData = {
  allocationType: "percentage",
  value: 0,
};

export type ValueInputProps = ExtensionRenderInputProps;

const AllocationTypeIcons: Record<string, { name: string; icon: ReactNode }> = {
  [allocationIds.Percentage]: { name: "Percentage Allocation", icon: "%" },
  [allocationIds.Fixed]: { name: "Fixed Allocation", icon: "#" },
};

const allocationTypeCollection =
  createListCollection<SelectCollectionItemProps>({
    items: Object.values(AllocationType).map(({ key, name }) => ({
      value: key,
      children: <>{AllocationTypeIcons[key]?.icon}</>,
    })),
  });

export function ValueInput({ id: _id }: ValueInputProps) {
  const id = _id as `addClaims.rootNode`;
  /*
  const data = useWatch<PoolCreateInput>({
    name: `${id}.data`,
  });
  console.log("id", { id: `${id}.data`, data });

  const decoded: ValueInputData = JSON.parse(data);
*/
  const percentage = true; // decoded.allocationType === "percentage";

  return (
    <>
      <InputGroup
        flexBasis={"28"}
        flexShrink={"0"}
        startElementProps={{ paddingInlineStart: "0" }}
        startElement={
          <Select<string>
            pointerEvents={"auto"}
            id={`${id}.data.allocationType`}
            name={`${id}.data`}
            defaultValue={[allocationIds.Percentage]}
            positioning={{ sameWidth: false }}
            size={"md"}
            variant={"subtle"}
            collection={allocationTypeCollection}
            transform={createJsonTransform<
              SelectValueChangeDetails<SelectCollectionItemProps>,
              ValueInputData
            >(
              "allocationType",
              defaultValue,
              (value) =>
                value.allocationType ? [value.allocationType] : undefined,
              (e) =>
                e.value
                  ? (e.value[0] as ValueInputData["allocationType"])
                  : undefined,
            )}
          >
            {({ trigger, item }) => (
              <>
                {!trigger ? (
                  <Stack>
                    {AllocationTypeIcons[item?.value]?.icon}{" "}
                    {AllocationTypeIcons[item?.value]?.name}
                  </Stack>
                ) : (
                  <Stack w={"7"}>
                    {AllocationTypeIcons[item?.value]?.icon}
                  </Stack>
                )}
              </>
            )}
          </Select>
        }
      >
        <NumberInput
          id={`${id}.data.value`}
          name={`${id}.data`}
          defaultValue={"0"}
          allowMouseWheel={true}
          step={percentage ? 0.1 : 1}
          max={percentage ? 100 : 99999}
          min={0}
          inputProps={{
            ps: "12",
          }}
          transform={createJsonTransform<
            NumberInputValueChangeDetails,
            ValueInputData
          >(
            "value",
            defaultValue,
            (data) => data.value?.toString(),
            (e) => (e.value ? e.valueAsNumber : undefined),
          )}
        />
      </InputGroup>
    </>
  );
}
