import { ClaimCreateInput as MutualsClaimCreateInput } from "@mutuals/graphql-client-nextjs";
import { TreeView } from "@mutuals/ui";
import { ReactNode } from "react";

export type ClaimCreateNode<TData = unknown> = MutualsClaimCreateInput & {
  id: string;
  data?: TData;
};

export type ExtensionRenderInputProps = {
  id: `${string}.addClaims.${string}`;
  onAddNested?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onAddAfter?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onAddBefore?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onRemove?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
};

export type Extension = {
  id: string;
  name: string;
  render: ((props: ExtensionRenderInputProps) => ReactNode) | null;
};
