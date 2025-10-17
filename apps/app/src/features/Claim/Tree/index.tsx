"use client";

import { Bleed, ScrollArea, TreeView } from "@mutuals/ui";
import { ClaimCreateNode } from "@mutuals/sdk-react";
import ClaimTreeNodeRoot from "@/features/Claim/Tree/NodeRoot";
import useClaimTree, { UseClaimTreeProps } from "@/features/Claim/useClaimTree";
import ClaimTreeNodeContent from "@/features/Claim/Tree/NodeContent";

export type ClaimTreeProps = Omit<TreeView.RootProps, "collection"> &
  UseClaimTreeProps;

export default function ClaimTree({ id, ...props }: ClaimTreeProps) {
  const { data, remove, addNested, addBefore, addAfter } = useClaimTree({ id });

  return (
    <TreeView.Root collection={data} expandOnClick={false} {...props}>
      <TreeView.Label>Allocation</TreeView.Label>
      <Bleed inline={"6"} blockEnd={"3"}>
        <ScrollArea.Root size="xs">
          <ScrollArea.Viewport>
            <ScrollArea.Content px="4" pb={"3"}>
              <TreeView.Tree>
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
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal" />
          <ScrollArea.Corner />
        </ScrollArea.Root>
      </Bleed>
    </TreeView.Root>
  );
}
