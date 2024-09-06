import { allocation as allocationUtils } from "@mutuals/sdk/utils";
import {
  AllocationGroup,
  AllocationItem,
  AllocationItemNode,
  AllocationNode,
  DEFAULT_ALLOCATION_NODE,
} from "@mutuals/sdk";
import { AllocationType } from "@mutuals/sdk";
import { CreateDefaultAllocationFn } from "@mutuals/sdk/types";
import { useCallback, useMemo, useState } from "react";

export const useAllocationUtils = () => {
  return allocationUtils;
};

export const useDefaultAllocation = () => {
  const DEFAULT_LAST_ITEM = DEFAULT_ALLOCATION_NODE[
    AllocationType.Percentage
  ] as AllocationItemNode;

  const [lastItem, setLastItem] =
    useState<AllocationItemNode>(DEFAULT_LAST_ITEM);

  const { isItem } = useAllocationUtils();

  const buildItem = (allocationType: AllocationItem["allocationType"]) => {
    return DEFAULT_ALLOCATION_NODE[allocationType] as AllocationItemNode;
  };

  const buildGroup = (
    allocationType: AllocationGroup["allocationType"],
    buildAllocationType: AllocationItem["allocationType"],
  ) => {
    return (
      DEFAULT_ALLOCATION_NODE[allocationType] as CreateDefaultAllocationFn
    )(buildAllocationType);
  };

  const items: Record<string, AllocationNode> = useMemo(
    () => ({
      Percentage: buildItem(AllocationType.Percentage),
      Fixed: buildItem(AllocationType.Fixed),
      Timed: buildGroup(
        AllocationType.PercentageTimed,
        lastItem.node.allocationType,
      ),
      Prioritized: buildGroup(
        AllocationType.PercentagePrioritized,
        lastItem.node.allocationType,
      ),
    }),
    [lastItem],
  );

  const updateLastItem = useCallback(
    (value: AllocationNode) => {
      if (
        isItem(value.node) &&
        value.node.allocationType != lastItem.node.allocationType
      ) {
        setLastItem(value as AllocationItemNode);
      }
    },
    [isItem, setLastItem, lastItem],
  );

  return { buildItem, buildGroup, items, updateLastItem, lastItem };
};
