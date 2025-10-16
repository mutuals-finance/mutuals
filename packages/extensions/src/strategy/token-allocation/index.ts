import { TokenAllocationInput } from "./input";
import {
  defaultValue as valueInputDefaultValue,
  ValueInputData,
} from "../../components/value-input";
import {
  defaultValue as tokenAddressInputDefaultValue,
  TokenAddressData,
} from "../../components/token-address-input";
import { Extension } from "../../types";

export type TokenAllocationData = TokenAddressData & ValueInputData;

export const defaultValue: TokenAllocationData = {
  ...tokenAddressInputDefaultValue,
  ...valueInputDefaultValue,
};

export const extension: Extension = {
  id: "token_allocation",
  name: "Token Allocation",
  render: TokenAllocationInput,
};
