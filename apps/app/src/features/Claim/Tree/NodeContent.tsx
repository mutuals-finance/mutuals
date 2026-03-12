"use client";

import {
  Icon,
  IconButton,
  TreeView,
  useTreeViewNodeContext,
  Menu,
  Select,
  Group,
} from "@mutuals/ui";
import { PropsWithChildren, useMemo } from "react";
import {
  IoChevronForwardSharp,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";
import { ValidationModules, DistributionModules } from "@mutuals/modules";
import { useWatch } from "react-hook-form";
import { RiFolderReceivedLine, RiUserReceivedLine } from "react-icons/ri";
import { createClaimCollection } from "@/features/Claim/utils";
import useClaimNodeId from "@/features/Claim/useClaimNodeId";

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
        placeholder={"Validation"}
        id={`${id}.validationId`}
        w={"44"}
        collection={createClaimCollection(ValidationModules.map, "Validation")}
        positioning={{ sameWidth: false }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        transform={{
          input: (value) => (!value ? undefined : [value]),
          output: (e) => (!e.value ? undefined : e.value[0]),
        }}
        contentProps={{ minW: "60" }}
      />

      <Select<string>
        placeholder={"Distribution"}
        id={`${id}.distributionId`}
        collection={createClaimCollection(
          DistributionModules.map,
          "Distribution",
        )}
        w={"44"}
        positioning={{ sameWidth: false }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        transform={{
          input: (value) => (!value ? undefined : [value]),
          output: (e) => (!e.value ? undefined : e.value[0]),
        }}
        contentProps={{ minW: "52" }}
      />

      {selectedValidation?.render?.(renderProps)}

      {selectedDistribution?.render?.(renderProps)}

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
              shadow={"sm"}
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

        <Menu.Trigger asChild={true}>
          <IconButton
            shadow={"sm"}
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
