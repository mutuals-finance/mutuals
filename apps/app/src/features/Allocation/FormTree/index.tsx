"use client";

import { TreeView } from "@mutuals/ui";
import React from "react";
import AllocationFormTreeNode from "@/features/Allocation/FormTree/Node";
import { useFormContext, useWatch } from "react-hook-form";
import {
  ClaimCreateNode,
  ClaimCreateTree,
  PoolCreateInput,
  stateIds,
  strategyIds,
} from "@mutuals/sdk-react";

const createNewNode = (): ClaimCreateNode => ({
  id: `${Date.now()}`,
  value: 0,
  stateId: stateIds.Offchain,
  strategyId: strategyIds.DefaultAllocation,
  children: [],
  data: "",
});

export interface AllocationFormTreeProps
  extends Omit<TreeView.RootProps, "collection"> {
  id?: "addClaims";
}

export default function AllocationFormTree({
  id = "addClaims",
  ...props
}: AllocationFormTreeProps) {
  const { setValue, control } = useFormContext<PoolCreateInput>();

  const claims: ClaimCreateTree = useWatch<PoolCreateInput>({
    control,
    name: id,
  });

  const onRemove = (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
    setValue(id, claims.remove([props.indexPath]));
  };

  const onAddBefore = (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
    const { indexPath } = props;
    const newNode = createNewNode();
    const newClaims = claims.insertBefore(indexPath, [newNode]);
    if (newClaims) {
      setValue(id, newClaims);
    }
  };

  const onAddAfter = (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
    const { indexPath } = props;
    const newNode = createNewNode();
    const newClaims = claims.insertAfter(indexPath, [newNode]);
    if (newClaims) {
      setValue(id, newClaims);
    }
  };

  const onAddNested = (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
    const { node, indexPath } = props;
    const newNode = createNewNode();
    const children = [newNode, ...(node.children ?? [])];
    setValue(id, claims.replace(indexPath, { ...node, children }));
  };

  return (
    <TreeView.Root collection={claims} expandOnClick={false} {...props}>
      <TreeView.Label>Allocation</TreeView.Label>
      <TreeView.Tree overflowX={"auto"}>
        <TreeView.Node<ClaimCreateNode>
          indentGuide={<TreeView.BranchIndentGuide />}
          render={(nodeProps) => (
            <AllocationFormTreeNode
              onAddNested={onAddNested}
              onAddAfter={onAddAfter}
              onAddBefore={onAddBefore}
              onRemove={onRemove}
              {...nodeProps}
            />
          )}
        />
      </TreeView.Tree>
    </TreeView.Root>
  );
}
