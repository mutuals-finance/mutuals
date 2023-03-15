import React from "react";

export default function RootBody({ children }: React.PropsWithChildren) {
  return <main className={"flex flex-col flex-1"}>{children}</main>;
}
