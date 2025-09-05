"use client";

import { TreeView } from "@mutuals/ui";
import React from "react";
import { AllocationAddData, AllocationNode } from "@/features/Allocation/types";
import AllocationFormTreeNode from "@/features/Allocation/FormTree/Node";
import { useFormContext, useWatch } from "react-hook-form";
import type { PoolAddData } from "@/features/PoolAdd/types";

const createNewNode = (): AllocationNode => ({
  id: `${Date.now()}`,
  value: 0,
  stateId: "",
  strategyId: "",
  children: [],
});

export interface AllocationFormTreeProps
  extends Omit<TreeView.RootProps, "collection"> {
  id?: "claims";
}

export default function AllocationFormTree({
  id = "claims",
  ...props
}: AllocationFormTreeProps) {
  const { setValue, control } = useFormContext<PoolAddData>();

  const claims: AllocationAddData = useWatch<PoolAddData>({
    control,
    name: id,
  });

  const onRemove = (props: TreeView.NodeProviderProps<AllocationNode>) => {
    setValue(id, claims.remove([props.indexPath]));
  };

  const onAddBefore = (props: TreeView.NodeProviderProps<AllocationNode>) => {
    const { indexPath } = props;
    const newNode = createNewNode();
    const newClaims = claims.insertBefore(indexPath, [newNode]);
    if (newClaims) {
      setValue(id, newClaims);
    }
  };

  const onAddAfter = (props: TreeView.NodeProviderProps<AllocationNode>) => {
    const { indexPath } = props;
    const newNode = createNewNode();
    const newClaims = claims.insertAfter(indexPath, [newNode]);
    if (newClaims) {
      setValue(id, newClaims);
    }
  };

  const onAddNested = (props: TreeView.NodeProviderProps<AllocationNode>) => {
    const { node, indexPath } = props;
    const newNode = createNewNode();
    const children = [newNode, ...(node.children ?? [])];
    setValue(id, claims.replace(indexPath, { ...node, children }));
  };

  return (
    <TreeView.Root
      collection={claims}
      animateContent={true}
      selectionMode="multiple"
      {...props}
    >
      <TreeView.Label>Allocation</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Node
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
