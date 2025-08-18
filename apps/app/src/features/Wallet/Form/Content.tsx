"use client";

import React, { PropsWithChildren } from "react";

export function WalletDrawerContent({ children }: PropsWithChildren) {
  return (
    <>
      {children}

      {/*
      <Input id="name" />

      <Input
        disabled={true}
        id="address"
        rules={{
          required: "Please enter an address",
        }}
      />
*/}
    </>
  );
}
