import type {
  ClaimCreateInput as MutualsClaimCreateInput,
  PoolCreateInput as MutualsPoolCreateInput,
} from "@mutuals/graphql-client-nextjs";
import type { TreeCollection, TreeView } from "@mutuals/ui";

export type ClaimCreateNode = Omit<MutualsClaimCreateInput, "children"> & {
  children: ClaimCreateNode[];
};

export type ClaimCreateTree = TreeCollection<ClaimCreateNode>;

export type PoolCreateInput = Omit<MutualsPoolCreateInput, "addClaims"> & {
  addClaims: ClaimCreateTree;
};

export interface ExtensionRenderInputProps {
  id: `${string}.addClaims.${string}`;
  onAddAfter?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onAddBefore?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onAddNested?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onRemove?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
}

export type ExtensionType<T> = {
  [K in keyof T]: T[K] & {
    renderInput?: (props: { id: string }) => React.ReactNode;
  };
};

export type ContractExecutionStatus =
  | "pendingApproval"
  | "txInProgress"
  | "complete"
  | "error";

export type DataLoadStatus = "success" | "error" | "loading";

export type RequestError = Error | null | undefined;
