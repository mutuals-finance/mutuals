"use client";

import { transform } from "./transform";
import {
  Box,
  Center,
  createListCollection,
  Select,
  SelectCollectionItemProps,
  Stack,
} from "@mutuals/ui";
import React from "react";
import { ModuleRenderProps } from "../../types";

export type AllocationType = "fixed" | "percentage";

export type AllocationConfig = {
  id: AllocationType;
  name: string;
  icon: string;
};

const allocationType: Record<AllocationType, AllocationConfig> = {
  percentage: {
    id: "percentage",
    name: "Percentage",
    icon: "%",
  },
  fixed: {
    id: "fixed",
    name: "Fixed",
    icon: "#",
  },
};

const allocationTypeCollection =
  createListCollection<SelectCollectionItemProps>({
    items: Object.values(allocationType).map(({ id, icon }) => ({
      value: id,
      children: <>{icon}</>,
      group: "Allocation Type",
    })),
  });

type ValueInputSelectProps = ModuleRenderProps;

export default function ValueInputSelect({ id }: ValueInputSelectProps) {
  return (
    <Select<string>
      pointerEvents={"auto"}
      id={`${id}.data.allocationType`}
      name={`${id}.data`}
      defaultValue={["percentage"]}
      positioning={{ sameWidth: false }}
      variant={"subtle"}
      collection={allocationTypeCollection}
      transform={transform.allocationType}
      triggerProps={{
        indicatorProps: {
          _icon: { w: "3", h: "3" },
        },
        triggerProps: { bg: "transparent" },
      }}
      css={{ "--select-trigger-padding-x": "0" }}
      contentProps={{ minW: "44" }}
    >
      {({ trigger, item }) => {
        const selected = allocationType[item?.value as AllocationType];

        if (!trigger) {
          return (
            <Stack gap={"2"} w={"full"} direction={"row"}>
              <Center color="fg.muted" w={"3"}>
                {selected?.icon}
              </Center>
              <Box>{selected?.name}</Box>
            </Stack>
          );
        }

        return (
          <Center w={"7"} pe={"2"}>
            {selected?.icon}
          </Center>
        );
      }}
    </Select>
  );
}
