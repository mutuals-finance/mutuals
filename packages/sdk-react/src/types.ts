import {
  ClaimCreateInput as MutualsClaimCreateInput,
  PoolCreateInput as MutualsPoolCreateInput,
} from "@mutuals/graphql-client-nextjs";
import { TreeCollection, TreeView } from "@mutuals/ui";

export type ClaimCreateNode = Omit<MutualsClaimCreateInput, "children"> & {
  children: ClaimCreateNode[];
};

export type ClaimCreateTree = TreeCollection<ClaimCreateNode>;

export type PoolCreateInput = Omit<MutualsPoolCreateInput, "addClaims"> & {
  addClaims: ClaimCreateTree;
};

export type ExtensionRenderInputProps = {
  id: `${string}.addClaims.${string}`;
  onAddNested?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onAddAfter?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onAddBefore?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
  onRemove?: (props: TreeView.NodeProviderProps<ClaimCreateNode>) => void;
};

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RequestError = any;
