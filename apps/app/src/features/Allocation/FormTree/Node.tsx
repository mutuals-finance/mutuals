"use client";

import {
  Icon,
  IconButton,
  TreeView,
  useTreeViewNodeContext,
  useTreeViewContext,
  Input,
  Portal,
  Menu,
  Box,
  createListCollection,
  SelectCollectionItemProps,
  Select,
  Group,
} from "@mutuals/ui";
import React, { PropsWithChildren, useMemo } from "react";
import {
  IoChevronForwardSharp,
  IoEllipsisHorizontalSharp,
  IoTrashBinSharp,
} from "react-icons/io5";
import { BsArrowBarDown, BsArrowBarUp, BsArrowsCollapse } from "react-icons/bs";
import {
  StrategyExtensions,
  StateExtensions,
  PoolCreateInput,
  ClaimCreateNode,
} from "@mutuals/sdk-react";
import { useWatch } from "react-hook-form";
import { RiFolderReceivedLine, RiUserReceivedLine } from "react-icons/ri";

export type AllocationFormTreeNodeProps =
  TreeView.NodeRenderProps<ClaimCreateNode> & {
    onAddNested?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
    onAddAfter?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
    onAddBefore?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
    onRemove?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  };

const createAllocationCollection = (
  config: {
    [key: string]: { key: string; name: string };
  },
  configValue: string,
) =>
  createListCollection<SelectCollectionItemProps>({
    items: Object.values(config).map(({ key, name }) => ({
      value: key,
      children: name,
      configValue,
    })),
  });

const SELECT_ITEMS = {
  state: createAllocationCollection(StateExtensions, "state"),
  strategy: createAllocationCollection(StrategyExtensions, "strategy"),
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
        {nodeState.isBranch ? (
          <TreeView.BranchControl role="none" w={"full"} bg={"bg"} pr={"0"}>
            <AllocationFormTreeNodeContent />
          </TreeView.BranchControl>
        ) : (
          <TreeView.Item w={"full"} bg={"bg"} pr={"0"}>
            <AllocationFormTreeNodeContent />
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

function AllocationFormTreeNodeContent({ children }: PropsWithChildren) {
  const nodeState = useTreeViewNodeContext();
  const baseId = "addClaims.rootNode";
  const id =
    `${baseId}${nodeState.indexPath.map((p) => `.children.${p}`)}` as `addClaims.rootNode`;

  const [stateId, strategyId] = useWatch<PoolCreateInput>({
    name: [`${id}.stateId`, `${id}.strategyId`],
  });

  const selectedState = StateExtensions[stateId];
  const selectedStrategy = StrategyExtensions[strategyId];

  const renderProps = useMemo(() => ({ id }), [id]);

  return (
    <>
      <Icon flex={"0 0 auto"}>
        {nodeState.isBranch ? <RiFolderReceivedLine /> : <RiUserReceivedLine />}
      </Icon>

      <Select<string>
        placeholder={"State"}
        id={`${id}.stateId`}
        size={"md"}
        w={"28"}
        flex={"0 0 auto"}
        collection={SELECT_ITEMS.state}
        positioning={{ sameWidth: false }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        transform={{
          input: (value) => (!value ? undefined : [value]),
          output: (e) => (!e.value ? undefined : e.value[0]),
        }}
      />

      <Select<string>
        placeholder={"Strategy"}
        id={`${id}.strategyId`}
        collection={SELECT_ITEMS.strategy}
        size={"md"}
        w={"48"}
        flex={"0 0 auto"}
        positioning={{ sameWidth: false }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        transform={{
          input: (value) => (!value ? undefined : [value]),
          output: (e) => (!e.value ? undefined : e.value[0]),
        }}
      />

      {!nodeState.isBranch && (
        <Input
          placeholder={"Recipient address"}
          id={`${id}.recipientAddress`}
          size={"md"}
          w={"48"}
          flex={"1 0 auto"}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      )}

      {selectedState?.renderInput?.(renderProps)}

      {selectedStrategy?.renderInput?.(renderProps)}

      <Group position={"sticky"} right={"0"} gap={"0.5"} ml={"auto"}>
        {nodeState.isBranch && (
          <TreeView.BranchTrigger asChild>
            <IconButton
              css={{
                lg: {
                  opacity: 0,
                  "[role=treeitem]:hover &": { opacity: 1 },
                },
              }}
              shadow={"xs"}
              variant="subtle"
              aria-label="Toggle children"
              onClick={(e) => {
                e.stopPropagation();
              }}
              size={{ base: "xs", lg: "xs" }}
            >
              <TreeView.BranchIndicator asChild>
                <IoChevronForwardSharp />
              </TreeView.BranchIndicator>
            </IconButton>
          </TreeView.BranchTrigger>
        )}

        <Menu.Trigger asChild>
          <IconButton
            shadow={"xs"}
            variant="subtle"
            aria-label="Toggle menu"
            onClick={(e) => {
              e.stopPropagation();
            }}
            size={{ base: "xs", lg: "xs" }}
          >
            <IoEllipsisHorizontalSharp />
          </IconButton>
        </Menu.Trigger>
      </Group>

      {children}
    </>
  );
}
