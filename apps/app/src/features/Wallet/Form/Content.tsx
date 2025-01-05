"use client";

import React, { PropsWithChildren } from "react";
import { Input } from "@mutuals/ui";

export function WalletDrawerContent({ children }: PropsWithChildren) {
  return (
    <>
      {children}

      <Input id="name" label={"Name"} />

      <Input
        label={"Address"}
        disabled={true}
        id="address"
        rules={{
          required: "Please enter an address",
        }}
      />
    </>
  );
}
