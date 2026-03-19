import {
  type RecipientInputData,
  defaultValue as recipientDefaultValue,
} from "../../components/recipient-input";
import type { Module } from "../../types";
import { PriorityDistributionInput } from "./input";

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
