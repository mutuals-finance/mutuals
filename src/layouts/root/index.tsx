import React from "react";
import RootHeader from "./RootHeader";
import RootBody from "./RootBody";
import RootFooter from "./RootFooter";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className={"w-full min-h-screen flex flex-col"}>
        <RootHeader />
        <RootBody>{children}</RootBody>
      </div>
      <RootFooter />
    </>
  );
}
