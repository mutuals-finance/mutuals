import { TokenLimitDistributionInput } from "./input";
import {
  defaultValue as valueInputDefaultValue,
  type ValueInputData,
} from "../../components/value-input";
import {
  defaultValue as tokenAddressInputDefaultValue,
  type TokenAddressInputData,
} from "../../components/token-address-input";
import { Module } from "../../types";
import {
  defaultValue as recipientDefaultValue,
  type RecipientInputData,
} from "../../components/recipient-input";

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
