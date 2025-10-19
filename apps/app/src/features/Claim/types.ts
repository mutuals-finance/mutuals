import { TreeView } from "@mutuals/ui";
import { ClaimCreateNode } from "@mutuals/sdk-react";

export type ClaimTreeHandlerProps = {
  onAddNested?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onAddAfter?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onAddBefore?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onRemove?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
};

export type ClaimTreeNodeProps = TreeView.NodeRenderProps<ClaimCreateNode> &
  ClaimTreeHandlerProps;
