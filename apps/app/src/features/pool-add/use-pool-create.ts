"use client";

import { usePoolCreate as useMutualsPoolCreate } from "@mutuals/graphql-client-nextjs/client";
import type { PoolCreateInput } from "@mutuals/sdk-react";
import { useCallback } from "react";

export function usePoolCreate(): [
  (input: PoolCreateInput) => void,
  ReturnType<typeof useMutualsPoolCreate>[1],
] {
  const [baseCreatePool, result] = useMutualsPoolCreate();

  const createPool = useCallback(
    ({ addClaims: _addClaims, ..._input }: PoolCreateInput) => {
      const addClaims = _addClaims
        .flatten()
        .map(({ _parent, _children, _index, children, ...node }) => ({
          ...node,
          children: children?.map((c) => c.label ?? "") ?? [],
          // TODO parentLabel, childrenLabels
        }));
      const input = { ..._input, addClaims };

      baseCreatePool({
        fetchPolicy: "no-cache",
        variables: {
          input,
        },
      });
    },
    [baseCreatePool]
  );

  return [createPool, result];
}
