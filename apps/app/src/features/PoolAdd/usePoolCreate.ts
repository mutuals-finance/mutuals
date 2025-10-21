"use client";

import { usePoolCreate as useMutualsPoolCreate } from "@mutuals/graphql-client-nextjs/client";
import { useCallback } from "react";
import { PoolCreateInput } from "@mutuals/sdk-react";
import {
  MutationResult,
  PoolCreateMutation,
} from "@mutuals/graphql-client-nextjs";

export function usePoolCreate(): [
  (input: PoolCreateInput) => void,
  MutationResult<PoolCreateMutation>,
] {
  const [baseCreatePool, result] = useMutualsPoolCreate();

  const createPool = useCallback(
    ({ addClaims: _addClaims, ..._input }: PoolCreateInput) => {
      const addClaims = _addClaims
        .flatten()
        .map(({ _parent, _children, _index, id: _id, children, ...node }) => ({
          ...node,
          children: children?.map((c) => c.id) ?? [],
          // TODO label, parentLabel, childrenLabels
        }));
      const input = { ..._input, addClaims };

      void baseCreatePool({
        fetchPolicy: "no-cache",
        variables: {
          input,
        },
      });
    },
    [baseCreatePool],
  );

  return [createPool, result];
}
