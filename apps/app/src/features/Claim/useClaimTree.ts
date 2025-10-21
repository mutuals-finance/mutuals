"use client";

import { useFormContext, useWatch } from "react-hook-form";
import {
  ClaimCreateNode,
  ClaimCreateTree,
  PoolCreateInput,
} from "@mutuals/sdk-react";
import { TreeView } from "@mutuals/ui";
import { useCallback } from "react";
import { createClaim } from "@/features/Claim/utils";
import { ClaimTreeHandlerProps } from "@/features/Claim/types";

export type UseClaimTreeProps = {
  id?: "addClaims";
};

export type UseClaimTreeResult = {
  data: ClaimCreateTree;
  remove: ClaimTreeHandlerProps["onRemove"];
  addBefore: ClaimTreeHandlerProps["onAddBefore"];
  addAfter: ClaimTreeHandlerProps["onAddAfter"];
  addNested: ClaimTreeHandlerProps["onAddNested"];
};

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
    [id, data, setValue],
  );

  const addBefore = useCallback(
    (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
      const { indexPath } = props;
      const newClaims = data.insertBefore(indexPath, [createClaim()]);
      if (newClaims) {
        setValue(id, newClaims);
      }
    },
    [id, data, setValue],
  );

  const addAfter = useCallback(
    (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
      const { indexPath } = props;
      const newClaims = data.insertAfter(indexPath, [createClaim()]);
      if (newClaims) {
        setValue(id, newClaims);
      }
    },
    [id, data, setValue],
  );

  const addNested = useCallback(
    (props: TreeView.NodeProviderProps<ClaimCreateNode>) => {
      const { node, indexPath } = props;
      const children = [createClaim(), ...(node.children ?? [])];
      const newData = data.replace(indexPath, { ...node, children });
      setValue(id, newData);
    },
    [id, data, setValue],
  );

  return {
    data,
    remove,
    addBefore,
    addAfter,
    addNested,
  };
}
