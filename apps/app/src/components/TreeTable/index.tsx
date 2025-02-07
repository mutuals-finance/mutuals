import { TreeTableRowProps } from "@/components/TreeTable/Row";

export type TreeTableNode<TNode> = {
  value?: TNode;
  id: string;
  index: number;
  depth: number;
};

export type TreeTableProps<TNode> = Omit<
  TreeTableRowProps<TNode>,
  "id" | "depth" | "value" | "index" | "render" | "children" | "nodes"
> & {
  id?: string;
  children?: TreeTableRowProps<TNode>["render"];
};

export default function TreeTable<TNode>({
  id = "",
  children,
  ...props
}: TreeTableProps<TNode>) {
  return children?.({ id, index: 0, depth: -1, ...props });
}
