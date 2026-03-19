import type { ClaimCreateNode } from "@mutuals/sdk-react";
import type { TreeView } from "@mutuals/ui";

export interface ClaimTreeHandlerProps {
  onAddAfter?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onAddBefore?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onAddNested?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onRemove?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
}

export type ClaimTreeNodeProps = TreeView.NodeRenderProps<ClaimCreateNode> &
  ClaimTreeHandlerProps;
