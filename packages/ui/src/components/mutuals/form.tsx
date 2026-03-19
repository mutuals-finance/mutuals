"use client";

import { Stack, type StackProps } from "@chakra-ui/react";
import type React from "react";
import {
  type FieldValues,
  FormProvider,
  type SubmitErrorHandler,
  type SubmitHandler,
  type UseFormProps,
  type UseFormReturn,
  useForm,
} from "react-hook-form";

export interface FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = never,
> extends Omit<StackProps, "children" | "onSubmit">,
    UseFormProps<TFieldValues, TContext> {
  autoComplete?: string;
  children:
    | React.ReactNode
    | ((method: UseFormReturn<TFieldValues, TContext>) => React.ReactNode);
  noValidate?: boolean;
  onSubmit?: SubmitHandler<TFieldValues>;
  onSubmitInvalid?: SubmitErrorHandler<TFieldValues>;
}

export function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
>({
  children,
  onSubmit,
  onSubmitInvalid,
  ...props
}: FormProps<TFieldValues, TContext>) {
  const methods = useForm<TFieldValues, TContext>({ ...props });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Stack
        as="form"
        onSubmit={onSubmit && handleSubmit(onSubmit, onSubmitInvalid)}
        {...props}
      >
        {typeof children === "function" ? children(methods) : children}
      </Stack>
    </FormProvider>
  );
}
