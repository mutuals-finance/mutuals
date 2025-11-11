"use client";

import { Controller, useFormContext } from "react-hook-form";
import { BaseInputProps } from "../input";
import {
  PinInput as ChakraPinInput,
  PinInputProps as ChakraPinInputProps,
} from "../../ui/pin-input";
import { PinInputValueChangeDetails as ChakraPinInputValueChangeDetails } from "@chakra-ui/react";

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
      rules={rules}
      render={({ field: { value, onChange, ...field } }) => (
        <ChakraPinInput
          id={id}
          {...props}
          value={transform ? transform.input(value) : value}
          onValueChange={(e) =>
            onChange(transform ? transform.output(e, value) : e.value)
          }
          inputProps={{ ...inputProps, ...field }}
        />
      )}
      {...controllerProps}
    />
  );
}
