import { Allocation, CalculationType, RecipientType } from "@mutuals/sdk";
import { getAllocationDefaults } from "@mutuals/sdk/utils";

import { Dispatch, useCallback, useMemo, useState } from "react";
import { useAllocationUtils } from "./allocation-utils";

export type UseAllocationDefaults = {
  defaults: Record<CalculationType, Record<RecipientType, Allocation>>;
  setCached: Dispatch<Allocation>;
  cached: Allocation | null;
};

export const useAllocationDefaults = (): UseAllocationDefaults => {
  const [_cached, _setCached] = useState<Allocation | null>();

  const { isItem } = useAllocationUtils();

  const defaults = useMemo(() => getAllocationDefaults(_cached), [_cached]);

  const setCached = useCallback(
    (allocation: Allocation) => {
      if (
        isItem(allocation) &&
        (!_cached ||
          allocation.calculationType?.[0] != _cached.calculationType?.[0] ||
          allocation.recipientType?.[0] != _cached.recipientType?.[0])
      ) {
        _setCached(allocation);
      }
    },
    [isItem, _setCached, _cached],
  );

  return { defaults, setCached, cached: _cached };
};
