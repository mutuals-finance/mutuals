import { DirectDistributionInput } from "./input";
import {
  defaultValue as valueDefaultValue,
  ValueInputData,
} from "../../components/value-input";
import { Module } from "../../types";
import {
  defaultValue as recipientDefaultValue,
  RecipientInputData,
} from "../../components/recipient-input";

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
