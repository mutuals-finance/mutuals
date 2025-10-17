import { ClaimCreateInput as MutualsClaimCreateInput } from "@mutuals/graphql-client-nextjs";
import { ReactNode } from "react";

export type ClaimCreateNode<TData = unknown> = MutualsClaimCreateInput & {
  id: string;
  data?: TData;
};

export type ExtensionRenderProps = {
  id: string;
};

export type Extension = {
  id: string;
  name: string;
  render: ((props: ExtensionRenderProps) => ReactNode) | null;
};
