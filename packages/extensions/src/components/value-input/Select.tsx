"use client";

import { transform } from "./transform";
import {
  createListCollection,
  Select,
  SelectCollectionItemProps,
  Stack,
} from "@mutuals/ui";
import React from "react";
import { ExtensionRenderProps } from "../../types";

export type AllocationType = "fixed" | "percentage";

const allocationTypes = {
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
    items: Object.values(allocationTypes).map(({ id, icon }) => ({
      value: id,
      children: <>{icon}</>,
    })),
  });

type ValueInputSelectProps = ExtensionRenderProps;

export default function ValueInputSelect({ id }: ValueInputSelectProps) {
  return (
    <Select<string>
      pointerEvents={"auto"}
      id={`${id}.data.allocationType`}
      name={`${id}.data`}
      defaultValue={["percentage"]}
      positioning={{ sameWidth: false }}
      size={"md"}
      variant={"subtle"}
      collection={allocationTypeCollection}
      transform={transform.allocationType}
    >
      {({ trigger, item }) => {
        const selected =
          allocationTypes[item?.value as keyof typeof allocationTypes];
        return !trigger ? (
          <Stack>
            {selected?.icon} {selected?.name}
          </Stack>
        ) : (
          <Stack w={"7"}>{selected?.icon}</Stack>
        );
      }}
    </Select>
  );
}
