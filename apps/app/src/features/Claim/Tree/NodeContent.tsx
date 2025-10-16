"use client";

import {
  Icon,
  IconButton,
  TreeView,
  useTreeViewNodeContext,
  Input,
  Menu,
  createListCollection,
  SelectCollectionItemProps,
  Select,
  Group,
} from "@mutuals/ui";
import React, { PropsWithChildren, useMemo } from "react";
import {
  IoChevronForwardSharp,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";
import { PoolCreateInput } from "@mutuals/sdk-react";
import { StateExtensions, StrategyExtensions } from "@mutuals/extensions";
import { useWatch } from "react-hook-form";
import { RiFolderReceivedLine, RiUserReceivedLine } from "react-icons/ri";
import { ClaimTreeNodeRootProps } from "@/features/Claim/Tree/NodeRoot";

export type ClaimTreeNodeProps = Omit<ClaimTreeNodeRootProps, "children">;

const createAllocationCollection = (
  config: {
    [id: string]: { id: string; name: string };
  },
  configValue: string,
) =>
  createListCollection<SelectCollectionItemProps>({
    items: Object.values(config).map(({ id, name }) => ({
      value: id,
      children: name,
      configValue,
    })),
  });

const SELECT_ITEMS = {
  state: createAllocationCollection(StateExtensions.map, "state"),
  strategy: createAllocationCollection(StrategyExtensions.map, "strategy"),
};

export default function ClaimTreeNodeContent({ children }: PropsWithChildren) {
  const nodeState = useTreeViewNodeContext();
  const baseId = "addClaims.rootNode";
  const id =
    `${baseId}${nodeState.indexPath.map((p) => `.children.${p}`)}` as `addClaims.rootNode`;

  const [stateId, strategyId] = useWatch<PoolCreateInput>({
    name: [`${id}.stateId`, `${id}.strategyId`],
  });

  const selectedState = StateExtensions.map[stateId];
  const selectedStrategy = StrategyExtensions.map[strategyId];

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

      {selectedState?.render?.(renderProps)}

      {selectedStrategy?.render?.(renderProps)}

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
