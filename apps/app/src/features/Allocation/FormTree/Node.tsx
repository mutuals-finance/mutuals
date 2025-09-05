"use client";

import {
  IconButton,
  TreeView,
  useTreeViewNodeContext,
  InputGroup,
  useTreeViewContext,
  NumberInput,
  Input,
  Portal,
  Menu,
  Box,
} from "@mutuals/ui";
import React, { PropsWithChildren } from "react";
import AllocationFormTreeCombobox from "@/features/Allocation/FormTree/Combobox";
import {
  IoEllipsisHorizontalSharp,
  IoPeopleCircleOutline,
  IoPersonCircleOutline,
  IoTrashBinSharp,
} from "react-icons/io5";
import { BsArrowBarDown, BsArrowBarUp, BsArrowsCollapse } from "react-icons/bs";
import { AllocationNode } from "../types";

export type AllocationFormTreeNodeProps =
  TreeView.NodeRenderProps<AllocationNode> & {
    onAddNested?: (props: TreeView.NodeProviderProps<AllocationNode>) => void;
    onAddAfter?: (props: TreeView.NodeProviderProps<AllocationNode>) => void;
    onAddBefore?: (props: TreeView.NodeProviderProps<AllocationNode>) => void;
    onRemove?: (props: TreeView.NodeProviderProps<AllocationNode>) => void;
  };

export default function AllocationFormTreeNode({
  onAddNested,
  onAddAfter,
  onAddBefore,
  onRemove,
  ...props
}: AllocationFormTreeNodeProps) {
  const tree = useTreeViewContext();
  const { node, nodeState, indexPath } = props;
  /*
  const groupId = ""; //`${id}${depth >= 0 ? ".children" : ""}`;
  const methods = useAllocationData({
    id: `${groupId}`,
  });

  const { fields, remove, insert } = methods;
*/

  return (
    <>
      <Menu.Root positioning={{ hideWhenDetached: true }}>
        <Menu.ContextTrigger as={"div"}>
          {nodeState.isBranch ? (
            <TreeView.BranchControl role="" rounded={0}>
              <AllocationFormTreeNodeContent>
                <Menu.Trigger asChild>
                  <IconButton
                    size="xs"
                    variant="ghost"
                    aria-label="Toggle menu"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <IoEllipsisHorizontalSharp />
                  </IconButton>
                </Menu.Trigger>
              </AllocationFormTreeNodeContent>
            </TreeView.BranchControl>
          ) : (
            <TreeView.Item rounded={0}>
              <AllocationFormTreeNodeContent>
                <Menu.Trigger asChild>
                  <IconButton
                    size="xs"
                    variant="ghost"
                    aria-label="Toggle menu"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <IoEllipsisHorizontalSharp />
                  </IconButton>
                </Menu.Trigger>
              </AllocationFormTreeNodeContent>
            </TreeView.Item>
          )}
        </Menu.ContextTrigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content minW={"40"} maxW={"full"}>
              <Menu.Item
                value="add-before"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddBefore?.(props);
                  //tree.expand([node.id]);
                }}
              >
                <BsArrowBarUp />
                <Box flex="1">Add before</Box>
              </Menu.Item>
              <Menu.Item
                value="add-after"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(props);
                  onAddAfter?.(props);
                  //tree.expand([node.id]);
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
                <Box flex="1">Delete item</Box>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
}

function AllocationFormTreeNodeContent({ children }: PropsWithChildren) {
  const nodeState = useTreeViewNodeContext();
  const baseId = "claims.rootNode";
  const id = `${baseId}${nodeState.indexPath.map((p) => `.children.${p}`)}`;

  return (
    <>
      {nodeState.isBranch ? (
        <IoPeopleCircleOutline />
      ) : (
        <IoPersonCircleOutline />
      )}

      {/*
      <TreeView.BranchTrigger
        pointerEvents={!nodeState.isBranch ? "none" : "auto"}
      >
        <TreeView.BranchIndicator asChild>
          <IconButton
            size="2xs"
            variant="ghost"
            aria-label="Collapse node"
            opacity={nodeState.isBranch ? 1 : 0}
          >
            <IoChevronForward />
          </IconButton>
        </TreeView.BranchIndicator>
      </TreeView.BranchTrigger>

      <TreeView.NodeCheckbox aria-label="check node">
        <Checkmark
          bg={{
            base: "bg",
            _checked: "colorPalette.solid",
            _indeterminate: "colorPalette.solid",
          }}
          size="md"
          checked={nodeState.checked === true}
          indeterminate={nodeState.checked === "indeterminate"}
        />
      </TreeView.NodeCheckbox>
*/}

      <AllocationFormTreeCombobox
        size="xs"
        flexBasis={"16"}
        placeholder={"State"}
        id={`${id}.stateId`}
      />

      <AllocationFormTreeCombobox
        size="xs"
        flexBasis={"20"}
        placeholder={"Strategy"}
        id={`${id}.strategyId`}
      />

      <Input
        placeholder={"0x000...000"}
        id={`${id}.recipientAddress`}
        size={"xs"}
        flex={"1"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />

      <InputGroup
        flexBasis={"24"}
        flexShrink={"0"}
        startElement={false ? "#" : "%"}
      >
        <NumberInput
          id={`${id}.value`}
          allowMouseWheel={true}
          step={!false ? 0.1 : 1}
          max={!false ? 100 : 9999}
          min={0}
          size={"xs"}
          inputProps={{
            ps: "2.2em",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </InputGroup>

      {children}
    </>
  );
}
