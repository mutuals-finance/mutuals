"use client";

import {
  Field as ChakraField,
  FieldProps as ChakraFieldProps,
} from "../../components/ui/field";
import { useFormContext } from "react-hook-form";

export interface FieldProps extends ChakraFieldProps {}

export function Field({ id = "", ...props }: FieldProps) {
  const { getFieldState } = useFormContext();
  const { invalid, error } = getFieldState(id);
  return (
    <ChakraField
      id={id}
      invalid={invalid}
      errorText={error?.message}
      {...props}
    />
  );
}
