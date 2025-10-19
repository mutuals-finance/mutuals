"use client";

import { useTreeViewNodeContext } from "@mutuals/ui";

export type UseClaimNodeIdArgs = {
  id?: string;
  indexPath?: number[];
};

export type UseClaimNodeIdResult = {
  baseId: string;
  id: `addClaims.rootNode`;
  indexPath: number[];
};

export default function useClaimNodeId(
  args: UseClaimNodeIdArgs = {},
): UseClaimNodeIdResult {
  const { id: baseId = "addClaims.rootNode", indexPath: baseIndexPath } = args;
  const { indexPath: treeViewIndexPath } = useTreeViewNodeContext();

  const indexPath = baseIndexPath ?? treeViewIndexPath ?? [];
  const indexPathStr = indexPath.map((p) => `children.${p}`).join(".");

  const id = `${baseId}.${indexPathStr}` as `addClaims.rootNode`;

  return {
    id,
    baseId,
    indexPath,
  };
}
