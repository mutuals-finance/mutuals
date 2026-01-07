import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TokenAddressInput } from "../../components/token-address-input";
import { createJsonTransform, NumberInput, } from "@mutuals/ui";
import { defaultValue } from "./index";
export function TokenGatingInput(props) {
    const { id } = props;
    return (_jsxs(_Fragment, { children: [_jsx(TokenAddressInput, Object.assign({}, props)), _jsx(NumberInput, { id: `${id}.data.value`, name: `${id}.data`, allowMouseWheel: true, step: 1, min: 0, defaultValue: "0", flexBasis: "28", flexShrink: "0", transform: createJsonTransform("value", defaultValue, (data) => { var _a; return (_a = data.value) === null || _a === void 0 ? void 0 : _a.toString(); }, ({ valueAsNumber }) => valueAsNumber) })] }));
}
