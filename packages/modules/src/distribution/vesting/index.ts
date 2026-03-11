import { VestingDistributionInput } from "./input";
import {
  defaultValue as valueDefaultValue,
  type ValueInputData,
} from "../../components/value-input";
import {
  defaultValue as recipientDefaultValue,
  type RecipientInputData,
} from "../../components/recipient-input";
import { Module } from "../../types";

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
