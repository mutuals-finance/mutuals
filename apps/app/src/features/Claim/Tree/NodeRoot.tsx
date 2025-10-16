"use client";

import { TreeView, useTreeViewContext, Portal, Menu, Box } from "@mutuals/ui";
import React, { PropsWithChildren } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { BsArrowBarDown, BsArrowBarUp, BsArrowsCollapse } from "react-icons/bs";
import { ClaimCreateNode } from "@mutuals/sdk-react";

export type ClaimTreeNodeRootProps =
  TreeView.NodeRenderProps<ClaimCreateNode> & {
    onAddNested?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
    onAddAfter?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
    onAddBefore?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
    onRemove?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  } & PropsWithChildren;

export default function ClaimTreeNodeRoot({
  onAddNested,
  onAddAfter,
  onAddBefore,
  onRemove,
  children,
  ...props
}: ClaimTreeNodeRootProps) {
  const tree = useTreeViewContext();
  const { node, nodeState } = props;

  return (
    <>
      <Menu.Root positioning={{ hideWhenDetached: true }}>
        {nodeState.isBranch ? (
          <TreeView.BranchControl role="none" w={"full"} bg={"bg"} pr={"0"}>
            {children}
          </TreeView.BranchControl>
        ) : (
          <TreeView.Item w={"full"} bg={"bg"} pr={"0"}>
            {children}
          </TreeView.Item>
        )}
        <Portal>
          <Menu.Positioner>
            <Menu.Content minW={"48"} maxW={"full"}>
              <Menu.Item
                value="add-before"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddBefore?.(props);
                }}
              >
                <BsArrowBarUp />
                <Box flex="1">Add before</Box>
              </Menu.Item>
              <Menu.Item
                value="add-after"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddAfter?.(props);
                }}
              >
                <BsArrowBarDown />
                <Box flex="1">Add after</Box>
              </Menu.Item>
              <Menu.Item
                value="add-nested"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddNested?.(props);
                  tree.expand([node.id]);
                }}
              >
                <BsArrowsCollapse />
                <Box flex="1">Add nested</Box>
              </Menu.Item>

              <Menu.Item
                value="delete"
                color="fg.error"
                _hover={{ bg: "bg.error", color: "fg.error" }}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove?.(props);
                }}
              >
                <IoTrashBinSharp />
                <Box flex="1">Delete recipient</Box>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
}
