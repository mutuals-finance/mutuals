"use client";

import {
  Icon,
  IconButton,
  TreeView,
  useTreeViewNodeContext,
  Input,
  Menu,
  Select,
  Group,
} from "@mutuals/ui";
import { PropsWithChildren, useMemo } from "react";
import {
  IoChevronForwardSharp,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";
import { PoolCreateInput } from "@mutuals/sdk-react";
import { StateExtensions, StrategyExtensions } from "@mutuals/extensions";
import { useWatch } from "react-hook-form";
import { RiFolderReceivedLine, RiUserReceivedLine } from "react-icons/ri";
import { createClaimCollection } from "@/features/Claim/utils";
import useClaimNodeId from "@/features/Claim/useClaimNodeId";

export default function ClaimTreeNodeContent({ children }: PropsWithChildren) {
  const { isBranch } = useTreeViewNodeContext();

  const { id } = useClaimNodeId();
  console.log("NodeContent", { id });
  const [stateId, strategyId] = useWatch<PoolCreateInput>({
    name: [`${id}.stateId`, `${id}.strategyId`],
  });

  const selectedState = StateExtensions.map[stateId];
  const selectedStrategy = StrategyExtensions.map[strategyId];

  const renderProps = useMemo(() => ({ id }), [id]);

  return (
    <>
      <Icon>
        {isBranch ? <RiFolderReceivedLine /> : <RiUserReceivedLine />}
      </Icon>

      <Select<string>
        placeholder={"State"}
        id={`${id}.stateId`}
        size={"md"}
        w={"28"}
        collection={createClaimCollection(StateExtensions.map, "state")}
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
        collection={createClaimCollection(StrategyExtensions.map, "strategy")}
        size={"md"}
        w={"44"}
        positioning={{ sameWidth: false }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        transform={{
          input: (value) => (!value ? undefined : [value]),
          output: (e) => (!e.value ? undefined : e.value[0]),
        }}
      />

      {!isBranch && (
        <Input
          placeholder={"Recipient address"}
          id={`${id}.recipientAddress`}
          size={"md"}
          w={"64"}
          flex={"1 0 auto"}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      )}

      {selectedState?.render?.(renderProps)}

      {selectedStrategy?.render?.(renderProps)}

      <Group
        position={"sticky"}
        right={{ base: "6", lg: "4" }}
        gap={"1"}
        ml={"auto"}
        pl={{ base: "2", lg: "0" }}
      >
        {isBranch && (
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
              size={{ base: "md", lg: "sm" }}
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
            size={{ base: "md", lg: "sm" }}
          >
            <IoEllipsisHorizontalSharp />
          </IconButton>
        </Menu.Trigger>
      </Group>

      {children}
    </>
  );
}
