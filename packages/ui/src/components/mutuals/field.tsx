"use client";

import { useFormContext } from "react-hook-form";
import {
  Field as ChakraField,
  type FieldProps as ChakraFieldProps,
} from "../../components/ui/field";

export interface FieldProps extends ChakraFieldProps {}

export function Field({ id = "", ...props }: FieldProps) {
  const { getFieldState } = useFormContext();
  const { invalid, error } = getFieldState(id);
  return (
    <ChakraField
      errorText={error?.message}
      id={id}
      invalid={invalid}
      {...props}
    />
  );
}
