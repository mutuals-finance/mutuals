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
  createListCollection,
  SelectCollectionItemProps,
  Icon,
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
import {
  CALCULATION_TYPE_CONFIG,
  RECIPIENT_TYPE_CONFIG,
} from "@mutuals/sdk-react";

export type AllocationFormTreeNodeProps =
  TreeView.NodeRenderProps<AllocationNode> & {
    onAddNested?: (props: TreeView.NodeProviderProps<AllocationNode>) => void;
    onAddAfter?: (props: TreeView.NodeProviderProps<AllocationNode>) => void;
    onAddBefore?: (props: TreeView.NodeProviderProps<AllocationNode>) => void;
    onRemove?: (props: TreeView.NodeProviderProps<AllocationNode>) => void;
  };

const createAllocationCollection = (config: {
  [key: number]: { key: number; name: string };
}) =>
  createListCollection<SelectCollectionItemProps>({
    items: Object.values(config).map(({ key, name }) => ({
      value: key,
      children: name,
    })),
  });

const SELECT_ITEMS = {
  state: createAllocationCollection(RECIPIENT_TYPE_CONFIG),
  strategy: createAllocationCollection(CALCULATION_TYPE_CONFIG),
};

export default function AllocationFormTreeNode({
  onAddNested,
  onAddAfter,
  onAddBefore,
  onRemove,
  ...props
}: AllocationFormTreeNodeProps) {
  const tree = useTreeViewContext();
  const { node, nodeState } = props;

  return (
    <>
      <Menu.Root positioning={{ hideWhenDetached: true }}>
        {/*
        <Menu.ContextTrigger as={"div"}>
*/}
        {nodeState.isBranch ? (
          <TreeView.BranchControl role="">
            <AllocationFormTreeNodeContent />
          </TreeView.BranchControl>
        ) : (
          <TreeView.Item>
            <AllocationFormTreeNodeContent />
          </TreeView.Item>
        )}
        {/*
        </Menu.ContextTrigger>
*/}
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

function AllocationFormTreeNodeContent({ children }: PropsWithChildren) {
  const nodeState = useTreeViewNodeContext();
  const baseId = "claims.rootNode";
  const id = `${baseId}${nodeState.indexPath.map((p) => `.children.${p}`)}`;

  return (
    <>
      <Icon flex={"0 0 auto"}>
        {nodeState.isBranch ? (
          <IoPeopleCircleOutline />
        ) : (
          <IoPersonCircleOutline />
        )}
      </Icon>

      <AllocationFormTreeCombobox
        placeholder={"State"}
        id={`${id}.stateId`}
        size={"md"}
        w={"32"}
        flex={"0 0 auto"}
        collection={SELECT_ITEMS.state}
      />

      <AllocationFormTreeCombobox
        placeholder={"Strategy"}
        id={`${id}.strategyId`}
        size={"md"}
        w={"32"}
        flex={"0 0 auto"}
        collection={SELECT_ITEMS.strategy}
      />

      <Input
        placeholder={"0x000...000"}
        id={`${id}.recipientAddress`}
        size={"md"}
        w={"32"}
        flex={"1 0 auto"}
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
          size={"md"}
          inputProps={{
            ps: "2.2em",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </InputGroup>

      <Menu.Trigger asChild>
        <IconButton
          position={"sticky"}
          right={"0"}
          size={"md"}
          variant="ghost"
          bg={"bg"}
          aria-label="Toggle menu"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <IoEllipsisHorizontalSharp />
        </IconButton>
      </Menu.Trigger>

      {children}
    </>
  );
}
