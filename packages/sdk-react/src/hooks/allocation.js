import { useCallback, useMemo, useState } from "react";
import { allocation as allocationUtils, getAllocationDefaults, } from "@mutuals/sdk/utils";
export const useAllocationDefaults = () => {
    const [_cached, _setCached] = useState();
    const { isItem } = useAllocationUtils();
    const defaults = useMemo(() => getAllocationDefaults(_cached), [_cached]);
    const setCached = useCallback((allocation) => {
        var _a, _b, _c, _d;
        if (isItem(allocation) &&
            (!_cached ||
                ((_a = allocation.calculationType) === null || _a === void 0 ? void 0 : _a[0]) != ((_b = _cached.calculationType) === null || _b === void 0 ? void 0 : _b[0]) ||
                ((_c = allocation.recipientType) === null || _c === void 0 ? void 0 : _c[0]) != ((_d = _cached.recipientType) === null || _d === void 0 ? void 0 : _d[0]))) {
            _setCached(allocation);
        }
    }, [isItem, _setCached, _cached]);
    return { defaults, setCached, cached: _cached };
};
export const useAllocationUtils = () => {
    return allocationUtils;
};
