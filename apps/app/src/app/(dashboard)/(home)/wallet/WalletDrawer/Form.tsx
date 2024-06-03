"use client";

import React, { PropsWithChildren } from "react";
import FormGroup from "@/components/Form/FormGroup";
import Input from "@/components/Form/Input";

type WalletData = {
  name: string;
  address: string;
};

interface WalletDrawerProps {}

export function WalletDrawerForm({ children }: PropsWithChildren) {
  return (
    <>
      {children}

      <FormGroup>
        <Input label="Name" id="name" />
      </FormGroup>

      <FormGroup>
        <Input
          disabled={true}
          label="Address"
          id="address"
          validation={{
            required: "Please enter an address",
          }}
        />
      </FormGroup>
    </>
  );
}
