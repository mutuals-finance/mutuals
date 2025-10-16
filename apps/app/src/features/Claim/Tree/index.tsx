"use client";

import { TreeView } from "@mutuals/ui";
import { ClaimCreateNode } from "@mutuals/sdk-react";
import useClaimTree, { UseClaimTreeProps } from "@/features/Claim/useClaimTree";
import ClaimTreeNodeRoot from "@/features/Claim/Tree/NodeRoot";
import React from "react";
import ClaimTreeNodeContent from "@/features/Claim/Tree/NodeContent";

export type ClaimTreeProps = Omit<TreeView.RootProps, "collection"> &
  UseClaimTreeProps;

export default function ClaimTree({ id, ...props }: ClaimTreeProps) {
  const { data, remove, addNested, addBefore, addAfter } = useClaimTree({ id });

  return (
    <TreeView.Root collection={data} expandOnClick={false} {...props}>
      <TreeView.Label>Allocation</TreeView.Label>
      <TreeView.Tree overflowX={"auto"}>
        <TreeView.Node<ClaimCreateNode>
          indentGuide={<TreeView.BranchIndentGuide />}
          render={(nodeProps) => (
            <ClaimTreeNodeRoot
              onAddNested={addNested}
              onAddAfter={addAfter}
              onAddBefore={addBefore}
              onRemove={remove}
              {...nodeProps}
            >
              <ClaimTreeNodeContent />
            </ClaimTreeNodeRoot>
          )}
        />
      </TreeView.Tree>
    </TreeView.Root>
  );
}
