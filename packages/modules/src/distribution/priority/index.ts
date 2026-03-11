import { PriorityDistributionInput } from "./input";
import { Module } from "../../types";
import {
  defaultValue as recipientDefaultValue,
  type RecipientInputData,
} from "../../components/recipient-input";

export type PriorityDistributionData = RecipientInputData & {
  priority: number;
};

export const defaultValue: PriorityDistributionData = {
  ...recipientDefaultValue,
  priority: 0,
};

export const module: Module = {
  id: "priority_distribution",
  name: "Priority Distribution",
  moduleType: "Distribution",
  render: PriorityDistributionInput,
};
