import {
  type RecipientInputData,
  defaultValue as recipientDefaultValue,
} from "../../components/recipient-input";
import {
  type ValueInputData,
  defaultValue as valueDefaultValue,
} from "../../components/value-input";
import type { Module } from "../../types";
import { VestingDistributionInput } from "./input";

export type VestingDistributionData = RecipientInputData &
  ValueInputData & {
    period: number;
  };

export const defaultValue: VestingDistributionData = {
  ...recipientDefaultValue,
  ...valueDefaultValue,
  period: 0,
};

export const module: Module = {
  id: "vesting_distribution",
  name: "Vesting Distribution",
  moduleType: "Distribution",
  render: VestingDistributionInput,
};
