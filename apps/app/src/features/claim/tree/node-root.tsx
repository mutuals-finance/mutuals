"use client";

import { Box, Menu, Portal, TreeView, useTreeViewContext } from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import { BsArrowBarDown, BsArrowBarUp, BsArrowsCollapse } from "react-icons/bs";
import { IoTrashBinSharp } from "react-icons/io5";
import type { ClaimTreeNodeProps } from "@/features/claim/types";

export type ClaimTreeNodeRootProps = ClaimTreeNodeProps & PropsWithChildren;

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

  const nodeProps = {
    w: "full",
    bg: "bg",
    pr: "0",
  };

  return (
    <Menu.Root positioning={{ hideWhenDetached: true }}>
      {nodeState.isBranch ? (
        <TreeView.BranchControl role="none" {...nodeProps}>
          {children}
        </TreeView.BranchControl>
      ) : (
        <TreeView.Item {...nodeProps}>{children}</TreeView.Item>
      )}
      <Portal>
        <Menu.Positioner>
          <Menu.Content maxW={"full"} minW={"48"}>
            <Menu.Item
              onClick={(e) => {
                e.stopPropagation();
                onAddBefore?.(props);
              }}
              value="add-before"
            >
              <BsArrowBarUp />
              <Box flex="1">Add before</Box>
            </Menu.Item>
            <Menu.Item
              onClick={(e) => {
                e.stopPropagation();
                onAddAfter?.(props);
              }}
              value="add-after"
            >
              <BsArrowBarDown />
              <Box flex="1">Add after</Box>
            </Menu.Item>
            <Menu.Item
              onClick={(e) => {
                e.stopPropagation();
                onAddNested?.(props);
                tree.expand([node?.label ?? ""]);
              }}
              value="add-nested"
            >
              <BsArrowsCollapse />
              <Box flex="1">Add nested</Box>
            </Menu.Item>

            <Menu.Item
              _hover={{ bg: "bg.error", color: "fg.error" }}
              color="fg.error"
              onClick={(e) => {
                e.stopPropagation();
                onRemove?.(props);
              }}
              value="delete"
            >
              <IoTrashBinSharp />
              <Box flex="1">Delete recipient</Box>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
