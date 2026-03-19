"use client";

import type { ClaimCreateNode } from "@mutuals/sdk-react";
import { Bleed, ScrollArea, TreeView } from "@mutuals/ui";
import ClaimTreeNodeContent from "@/features/claim/tree/node-content";
import ClaimTreeNodeRoot from "@/features/claim/tree/node-root";
import useClaimTree, {
  type UseClaimTreeProps,
} from "@/features/claim/use-claim-tree";

export type ClaimTreeProps = Omit<TreeView.RootProps, "collection"> &
  UseClaimTreeProps;

export default function ClaimTree({ id, ...props }: ClaimTreeProps) {
  const { data, remove, addNested, addBefore, addAfter } = useClaimTree({ id });

  return (
    <TreeView.Root collection={data} expandOnClick={false} {...props}>
      <TreeView.Label>Allocation</TreeView.Label>
      <Bleed blockEnd={"3"} display={"flex"} flex={"1"} inline={"6"}>
        <ScrollArea.Root flex={"1"} h={"unset"} size="xs">
          <ScrollArea.Viewport>
            <ScrollArea.Content pb={"3"} px="4">
              <TreeView.Tree>
                <TreeView.Node<ClaimCreateNode>
                  indentGuide={<TreeView.BranchIndentGuide />}
                  render={(nodeProps) => (
                    <ClaimTreeNodeRoot
                      onAddAfter={addAfter}
                      onAddBefore={addBefore}
                      onAddNested={addNested}
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
