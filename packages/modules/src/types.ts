import { ClaimCreateInput as MutualsClaimCreateInput } from "@mutuals/graphql-client-nextjs";
import { ReactNode } from "react";

export type ClaimCreateNode<TData = unknown> = MutualsClaimCreateInput & {
  id: string;
  data?: TData;
};

export type ModuleRenderProps = {
  id: string;
  isBranch: boolean;
};

export type Module = {
  id: string;
  name: string;
  moduleType: "Validation" | "Distribution";
  render: ((props: ModuleRenderProps) => ReactNode) | null;
};
