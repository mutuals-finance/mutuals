"use client";

import { DistributionModules, ValidationModules } from "@mutuals/modules";
import {
  Group,
  Icon,
  IconButton,
  Menu,
  Select,
  TreeView,
  useTreeViewNodeContext,
} from "@mutuals/ui";
import { type PropsWithChildren, useMemo } from "react";
import { useWatch } from "react-hook-form";
import {
  IoChevronForwardSharp,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";
import { RiFolderReceivedLine, RiUserReceivedLine } from "react-icons/ri";
import useClaimNodeId from "@/features/claim/use-claim-node-id";
import { createClaimCollection } from "@/features/claim/utils";

export default function ClaimTreeNodeContent({ children }: PropsWithChildren) {
  const { isBranch } = useTreeViewNodeContext();

  const { id } = useClaimNodeId();
  const [validationId, distributionId] = useWatch({
    name: [`${id}.validationId`, `${id}.distributionId`],
  });

  const selectedValidation = ValidationModules.map[validationId];
  const selectedDistribution = DistributionModules.map[distributionId];

  const renderProps = useMemo(() => ({ id, isBranch }), [id, isBranch]);

  return (
    <>
      <Icon>
        {isBranch ? <RiFolderReceivedLine /> : <RiUserReceivedLine />}
      </Icon>

      <Select<string>
        collection={createClaimCollection(ValidationModules.map, "Validation")}
        contentProps={{ minW: "60" }}
        id={`${id}.validationId`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        placeholder={"Validation"}
        positioning={{ sameWidth: false }}
        transform={{
          input: (value) => (value ? [value] : undefined),
          output: (e) => (e.value ? e.value[0] : undefined),
        }}
        w={"44"}
      />

      <Select<string>
        collection={createClaimCollection(
          DistributionModules.map,
          "Distribution"
        )}
        contentProps={{ minW: "52" }}
        id={`${id}.distributionId`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        placeholder={"Distribution"}
        positioning={{ sameWidth: false }}
        transform={{
          input: (value) => (value ? [value] : undefined),
          output: (e) => (e.value ? e.value[0] : undefined),
        }}
        w={"44"}
      />

      {selectedValidation?.render?.(renderProps)}

      {selectedDistribution?.render?.(renderProps)}

      <Group
        gap={"1"}
        ml={"auto"}
        pl={{ base: "2", lg: "0" }}
        position={"sticky"}
        right={{ base: "6", lg: "4" }}
      >
        {isBranch && (
          <TreeView.BranchTrigger asChild>
            <IconButton
              aria-label="Toggle children"
              css={{
                lg: {
                  opacity: 0,
                  "[role=treeitem]:hover &": { opacity: 1 },
                },
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              shadow={"sm"}
              size={{ base: "md", lg: "sm" }}
              variant="subtle"
            >
              <TreeView.BranchIndicator asChild>
                <IoChevronForwardSharp />
              </TreeView.BranchIndicator>
            </IconButton>
          </TreeView.BranchTrigger>
        )}

        <Menu.Trigger asChild={true}>
          <IconButton
            aria-label="Toggle menu"
            onClick={(e) => {
              e.stopPropagation();
            }}
            shadow={"sm"}
            size={{ base: "md", lg: "sm" }}
            variant="subtle"
          >
            <IoEllipsisHorizontalSharp />
          </IconButton>
        </Menu.Trigger>
      </Group>

      {children}
    </>
  );
}
