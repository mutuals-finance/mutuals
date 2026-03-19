"use client";

import type { PinInputValueChangeDetails as ChakraPinInputValueChangeDetails } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import {
  PinInput as ChakraPinInput,
  type PinInputProps as ChakraPinInputProps,
} from "../../ui/pin-input";
import type { BaseInputProps } from "../input";

export interface PinInputProps
  extends BaseInputProps<string, ChakraPinInputValueChangeDetails>,
    Omit<ChakraPinInputProps, "transform" | "onValueChange" | "value"> {}

export function PinInput({
  id = "",
  name = id,
  rules,
  transform,
  controllerProps,
  inputProps,
  ...props
}: PinInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <ChakraPinInput
          id={id}
          {...props}
          inputProps={{ ...inputProps, ...field }}
          onValueChange={(e) =>
            onChange(transform ? transform.output(e, value) : e.value)
          }
          value={transform ? transform.input(value) : value}
        />
      )}
      rules={rules}
      {...controllerProps}
    />
  );
}
