import React from "react";

import DefaultHeader from "./DefaultHeader";

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <DefaultHeader />
      <div>{children}</div>
    </>
  );
}
