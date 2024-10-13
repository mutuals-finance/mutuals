import React from "react";
import { get, RegisterOptions, useFormContext } from "react-hook-form";

import { Field, FieldProps } from "@mutuals/ui";

type BaseWrapperProps = FieldProps & {
  hideError?: boolean;
  validation?: RegisterOptions;
};

export default function InputBase({
  id,
  children,
  validation,
  hideError: _,
  ...props
}: BaseWrapperProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const errorText = get(errors, id);

  return (
    <Field asterisk={!!validation?.required} errorText={errorText} {...props}>
      {children}
    </Field>
  );
}
