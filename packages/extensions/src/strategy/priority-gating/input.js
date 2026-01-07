import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { createJsonTransform, NumberInput, } from "@mutuals/ui";
import { defaultValue } from "./index";
export function PriorityGatingInput({ id }) {
    return (_jsx(_Fragment, { children: _jsx(NumberInput, { id: `${id}.data.priority`, name: `${id}.data`, defaultValue: "0", allowMouseWheel: true, step: 1, min: 0, flexBasis: "28", flexShrink: "0", transform: createJsonTransform("priority", defaultValue, (data) => data.priority.toString(), ({ valueAsNumber }) => valueAsNumber) }) }));
}
