import { ClaimCreateInput as MutualsClaimCreateInput } from "@mutuals/graphql-client-nextjs";
import { ReactNode } from "react";
export type ClaimCreateNode<TData = unknown> = MutualsClaimCreateInput & {
  id: string;
  data?: TData;
};
export type ModuleRenderProps = {
  id: string;
};
export type Module = {
  id: string;
  name: string;
  render: ((props: ModuleRenderProps) => ReactNode) | null;
};
//# sourceMappingURL=types.d.ts.map
