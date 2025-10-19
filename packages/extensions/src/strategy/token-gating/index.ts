import {
  defaultValue as tokenAddressInputDefaultValue,
  TokenAddressData,
} from "../../components/token-address-input";
import { TokenGatingInput } from "./input";
import { Extension } from "../../types";

export type TokenGatingData = { value: number } & TokenAddressData;

export const defaultValue = {
  ...tokenAddressInputDefaultValue,
  value: 0,
};

export const extension: Extension = {
  id: "token_gating",
  name: "Token Gating",
  render: TokenGatingInput,
};
