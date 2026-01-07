import { defaultValue as tokenAddressInputDefaultValue, } from "../../components/token-address-input";
import { TokenGatingInput } from "./input";
export const defaultValue = Object.assign(Object.assign({}, tokenAddressInputDefaultValue), { value: 0 });
export const extension = {
    id: "token_gating",
    name: "Token Gating",
    render: TokenGatingInput,
};
