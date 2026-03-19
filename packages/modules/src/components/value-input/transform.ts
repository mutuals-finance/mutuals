"use client";

import {
  createJsonTransform,
  type JsonObject,
  type NumberInputValueChangeDetails,
  type SelectCollectionItemProps,
  type SelectValueChangeDetails,
} from "@mutuals/ui";
import type { AllocationType } from "./Select";

export interface ValueInputData extends JsonObject {
  allocationType: AllocationType;
  value: number;
}

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
  (e) => (e.value ? (e.value[0] as AllocationType) : undefined)
);

const value = createJsonTransform<
  NumberInputValueChangeDetails,
  ValueInputData
>(
  "value",
  defaultValue,
  (data) => data.value?.toString(),
  ({ valueAsNumber }) => valueAsNumber
);

export const transform = {
  allocationType,
  value,
};
