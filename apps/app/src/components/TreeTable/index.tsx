import { TreeTableRowProps } from "@/components/TreeTable/Row";

export type TreeTableNode<TNode> = {
  value?: TNode;
  id?: string;
  index?: number;
  depth?: number;
};

export type TreeTableProps<TNode> = TreeTableRowProps<TNode>;

export default function TreeTable<TNode>({
  id = "",
  values,
  ...props
}: TreeTableProps<TNode>) {
  const { children, index = 0, depth = -1 } = props;

  if (!!values && values?.length > 0) {
    return <></>;
  }

  if (!!children && typeof children == "function") {
    return children?.({ id, index, depth, ...props });
  }

  return children;
}
