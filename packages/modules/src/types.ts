import type { ClaimCreateInput as MutualsClaimCreateInput } from "@mutuals/graphql-client-nextjs";
import type { ReactNode } from "react";

export type ClaimCreateNode<TData = unknown> = MutualsClaimCreateInput & {
  id: string;
  data?: TData;
};

export interface ModuleRenderProps {
  id: string;
  isBranch: boolean;
}

export interface Module {
  id: string;
  moduleType: "Validation" | "Distribution";
  name: string;
  render: ((props: ModuleRenderProps) => ReactNode) | null;
}
