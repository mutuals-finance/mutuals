import {
  type RecipientInputData,
  defaultValue as recipientDefaultValue,
} from "../../components/recipient-input";
import {
  type TokenAddressInputData,
  defaultValue as tokenAddressInputDefaultValue,
} from "../../components/token-address-input";
import {
  type ValueInputData,
  defaultValue as valueInputDefaultValue,
} from "../../components/value-input";
import type { Module } from "../../types";
import { TokenLimitDistributionInput } from "./input";

export type TokenLimitDistributionData = RecipientInputData &
  TokenAddressInputData &
  ValueInputData;

export const defaultValue: TokenLimitDistributionData = {
  ...recipientDefaultValue,
  ...tokenAddressInputDefaultValue,
  ...valueInputDefaultValue,
};

export const module: Module = {
  id: "token_limit_distribution",
  name: "Token Limit Distribution",
  moduleType: "Distribution",
  render: TokenLimitDistributionInput,
};
