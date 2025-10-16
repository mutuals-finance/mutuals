"use client";

import { useFormContext, useWatch } from "react-hook-form";
import {
  ClaimCreateNode,
  ClaimCreateTree,
  PoolCreateInput,
  stateIds,
  strategyIds,
} from "@mutuals/sdk-react";
import { TreeView } from "@mutuals/ui";

export const createClaim = (): ClaimCreateNode => ({
  id: `${Date.now()}`,
  value: 0,
  stateId: stateIds.Offchain,
  strategyId: strategyIds.DefaultAllocation,
  children: [],
  data: "",
});

export type UseClaimTreeProps = {
  id?: "addClaims";
};

export type UseClaimTreeResult = {
  data: ClaimCreateTree;
  remove: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  addBefore: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  addAfter: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  addNested: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
};

export default function useClaimTree({
  id = "addClaims",
}: UseClaimTreeProps): UseClaimTreeResult {
  const { setValue, control } = useFormContext<PoolCreateInput>();

  const data: ClaimCreateTree = useWatch<PoolCreateInput>({
    control,
    name: id,
  });

  const remove = (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
    setValue(id, data.remove([props.indexPath]));
  };

  const addBefore = (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
    const { indexPath } = props;
    const newNode = createClaim();
    const newClaims = data.insertBefore(indexPath, [newNode]);
    if (newClaims) {
      setValue(id, newClaims);
    }
  };

  const addAfter = (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
    const { indexPath } = props;
    const newNode = createClaim();
    const newClaims = data.insertAfter(indexPath, [newNode]);
    if (newClaims) {
      setValue(id, newClaims);
    }
  };

  const addNested = (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
    const { node, indexPath } = props;
    const newNode = createClaim();
    const children = [newNode, ...(node.children ?? [])];
    setValue(id, data.replace(indexPath, { ...node, children }));
  };

  return { data, remove, addBefore, addAfter, addNested };
}
