import React from "react";

import { ExtensionRenderInputProps } from "../../types";
import { ValueInput } from "../value-input";

export type DefaultAllocationInputProps = ExtensionRenderInputProps;

export function DefaultAllocationInput(props: DefaultAllocationInputProps) {
  return (
    <>
      <ValueInput {...props} />
    </>
  );
}
