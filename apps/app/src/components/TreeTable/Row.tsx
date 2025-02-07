import React, { Fragment, ReactNode } from "react";
import { TreeTableNode } from "@/components/TreeTable";
import { Separator, Stack } from "@mutuals/ui";

export type TreeTableRowProps<TNode> = {
  render?: (props: Omit<TreeTableRowProps<TNode>, "nodes">) => ReactNode;
  children?:
    | ReactNode
    | ((props: Omit<TreeTableRowProps<TNode>, "nodes">) => ReactNode);
  getKey?: (props: Omit<TreeTableRowProps<TNode>, "nodes">) => string;
  nodes: TNode[];
} & TreeTableNode<TNode>;

export default function TreeTableRow<TNode>({
  nodes,
  id,
  depth,
  value,
  index,
  ...props
}: TreeTableRowProps<TNode>) {
  const parent = { id, depth, value, index };
  const { getKey, render, children } = props;

  return (
    <Stack direction={"row"}>
      {depth > 0 && (
        <Separator
          flexShrink={"0"}
          mx={"4"}
          variant="dashed"
          orientation="vertical"
        />
      )}

      <Stack flex={"1"}>
        {!(children && value)
          ? null
          : typeof children == "function"
            ? children?.({ ...props, ...parent })
            : children}
        {nodes.map((_value, j) => {
          const _props = {
            ...props,
            id: `${id}.${j}`,
            depth: depth + 1,
            value: _value,
            index: j,
          };
          return <Fragment key={getKey?.(_props)}>{render?.(_props)}</Fragment>;
        })}
      </Stack>
    </Stack>
  );
}
