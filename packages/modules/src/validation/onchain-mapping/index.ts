import type { JsonObject } from "@mutuals/ui";
import type { Module } from "../../types";

export type OnChainMappingValidationData = JsonObject;

export const defaultValue: OnChainMappingValidationData = {};

export const module: Module = {
  id: "onchain_mapping_validation",
  name: "On Chain Mapping Validation",
  moduleType: "Validation",
  render: null,
};
