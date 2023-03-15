import React from "react";

export default function AppBody({ children }: React.PropsWithChildren) {
  return (
    <div
      className={
        "w-full py-6 lg:py-12 flex-1 bg-default-1 rounded-default rounded-r-0"
      }
    >
      {children}
    </div>
  );
}
