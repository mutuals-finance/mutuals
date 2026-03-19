import {
  type RecipientInputData,
  defaultValue as recipientDefaultValue,
} from "../../components/recipient-input";
import {
  type ValueInputData,
  defaultValue as valueDefaultValue,
} from "../../components/value-input";
import type { Module } from "../../types";
import { DirectDistributionInput } from "./input";

export type DirectDistributionData = ValueInputData & RecipientInputData;

export const defaultValue: DirectDistributionData = {
  ...valueDefaultValue,
  ...recipientDefaultValue,
};

export const module: Module = {
  id: "direct_distribution",
  name: "Direct Distribution",
  moduleType: "Distribution",
  render: DirectDistributionInput,
};
