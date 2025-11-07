"use client";

import React, { PropsWithChildren } from "react";
import FeatureUpcoming from "@/features/User/FeatureUpcoming";

export function WalletDrawerContent({ children }: PropsWithChildren) {
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
