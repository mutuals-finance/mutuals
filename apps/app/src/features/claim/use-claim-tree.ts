"use client";

import type {
  ClaimCreateNode,
  ClaimCreateTree,
  PoolCreateInput,
} from "@mutuals/sdk-react";
import type { TreeView } from "@mutuals/ui";
import { useCallback } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import type { ClaimTreeHandlerProps } from "@/features/claim/types";
import { createClaim } from "@/features/claim/utils";

export interface UseClaimTreeProps {
  id?: "addClaims";
}

export interface UseClaimTreeResult {
  addAfter: ClaimTreeHandlerProps["onAddAfter"];
  addBefore: ClaimTreeHandlerProps["onAddBefore"];
  addNested: ClaimTreeHandlerProps["onAddNested"];
  data: ClaimCreateTree;
  remove: ClaimTreeHandlerProps["onRemove"];
}

export default function useClaimTree({
  id = "addClaims",
}: UseClaimTreeProps): UseClaimTreeResult {
  const { setValue, control } = useFormContext<PoolCreateInput>();

  const data: ClaimCreateTree = useWatch<PoolCreateInput>({
    control,
    name: id,
  });

  const remove = useCallback(
    (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
      setValue(id, data.remove([props.indexPath]));
    },
    [id, data, setValue]
  );

  const addBefore = useCallback(
    (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
      const { indexPath } = props;
      const newClaims = data.insertBefore(indexPath, [createClaim()]);
      if (newClaims) {
        setValue(id, newClaims);
      }
    },
    [id, data, setValue]
  );

  const addAfter = useCallback(
    (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
      const { indexPath } = props;
      const newClaims = data.insertAfter(indexPath, [createClaim()]);
      if (newClaims) {
        setValue(id, newClaims);
      }
    },
    [id, data, setValue]
  );

  const addNested = useCallback(
    (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
      const { node, indexPath } = props;
      const children = [createClaim(), ...(node.children ?? [])];
      const newData = data.replace(indexPath, { ...node, children });
      setValue(id, newData);
    },
    [id, data, setValue]
  );

  return {
    data,
    remove,
    addBefore,
    addAfter,
    addNested,
  };
}
