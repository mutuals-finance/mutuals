import {
  type RecipientInputData,
  defaultValue as recipientDefaultValue,
} from "../../components/recipient-input";
import type { Module } from "../../types";
import { RemainderDistributionInput } from "./input";

export type RemainderDistributionData = RecipientInputData;

export const defaultValue: RemainderDistributionData = recipientDefaultValue;

export const module: Module = {
  id: "remainder",
  name: "Remainder Distribution",
  moduleType: "Distribution",
  render: RemainderDistributionInput,
};
