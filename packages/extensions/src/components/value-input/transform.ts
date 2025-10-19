"use client";

import {
  createJsonTransform,
  NumberInputValueChangeDetails,
  SelectCollectionItemProps,
  SelectValueChangeDetails,
} from "@mutuals/ui";
import { AllocationType } from "./Select";

export type ValueInputData = {
  allocationType: AllocationType;
  value: number;
};

export const defaultValue: ValueInputData = {
  allocationType: "percentage",
  value: 0,
};

const allocationType = createJsonTransform<
  SelectValueChangeDetails<SelectCollectionItemProps>,
  ValueInputData
>(
  "allocationType",
  defaultValue,
  (value) => (value.allocationType ? [value.allocationType] : undefined),
  (e) =>
    e.value ? (e.value[0] as ValueInputData["allocationType"]) : undefined,
);

const value = createJsonTransform<
  NumberInputValueChangeDetails,
  ValueInputData
>(
  "value",
  defaultValue,
  (data) => data.value?.toString(),
  ({ valueAsNumber }) => valueAsNumber,
);

export const transform = {
  allocationType,
  value,
};
