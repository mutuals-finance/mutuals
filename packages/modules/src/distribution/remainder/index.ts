import { RemainderDistributionInput } from "./input";
import { Module } from "../../types";
import {
  defaultValue as recipientDefaultValue,
  RecipientInputData,
} from "../../components/recipient-input";

export type RemainderDistributionData = RecipientInputData;

export const defaultValue: RemainderDistributionData = recipientDefaultValue;

export const module: Module = {
  id: "remainder",
  name: "Remainder Distribution",
  moduleType: "Distribution",
  render: RemainderDistributionInput,
};
