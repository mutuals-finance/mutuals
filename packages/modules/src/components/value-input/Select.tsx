"use client";

import {
  Box,
  Center,
  createListCollection,
  Select,
  type SelectCollectionItemProps,
  Stack,
} from "@mutuals/ui";
import type { ModuleRenderProps } from "../../types";
import { transform } from "./transform";

export type AllocationType = "fixed" | "percentage";

export interface AllocationConfig {
  icon: string;
  id: AllocationType;
  name: string;
}

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
      collection={allocationTypeCollection}
      contentProps={{ minW: "44" }}
      css={{ "--select-trigger-padding-x": "0" }}
      defaultValue={["percentage"]}
      id={`${id}.data.allocationType`}
      name={`${id}.data`}
      pointerEvents={"auto"}
      positioning={{ sameWidth: false }}
      transform={transform.allocationType}
      triggerProps={{
        indicatorProps: {
          _icon: { w: "3", h: "3" },
        },
        triggerProps: { bg: "transparent" },
      }}
      variant={"subtle"}
    >
      {({ trigger, item }) => {
        const selected = allocationType[item?.value as AllocationType];

        if (!trigger) {
          return (
            <Stack direction={"row"} gap={"2"} w={"full"}>
              <Center color="fg.muted" w={"3"}>
                {selected?.icon}
              </Center>
              <Box>{selected?.name}</Box>
            </Stack>
          );
        }

        return (
          <Center pe={"2"} w={"7"}>
            {selected?.icon}
          </Center>
        );
      }}
    </Select>
  );
}
