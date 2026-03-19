"use client";

import type { PropsWithChildren } from "react";
import FeatureUpcoming from "@/features/user/feature-upcoming";

export function WalletDrawerContent({
  children: _children,
}: PropsWithChildren) {
  return (
    <>
      <FeatureUpcoming />

      {/*
     {children}

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
