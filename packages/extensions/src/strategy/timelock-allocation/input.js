import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ValueInput } from "../../components/value-input";
import { createJsonTransform, InputGroup, NumberInput, } from "@mutuals/ui";
import { defaultValue } from "./index";
export function TimelockAllocationInput(props) {
    const { id } = props;
    return (_jsxs(_Fragment, { children: [_jsx(InputGroup, { flexBasis: "32", flexShrink: "0", startElement: "day(s)", children: _jsx(NumberInput, { inputProps: {
                        ps: "4.2em",
                    }, id: `${id}.data.period`, name: `${id}.data`, allowMouseWheel: true, step: 1, min: 0, defaultValue: "0", transform: createJsonTransform("period", defaultValue, (data) => data.period.toString(), (e) => (e.value ? e.valueAsNumber : undefined)) }) }), _jsx(ValueInput, Object.assign({}, props))] }));
}
