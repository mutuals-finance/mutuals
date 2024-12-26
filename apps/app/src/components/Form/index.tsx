"use client";

import { StackProps, VStack } from "@mutuals/ui";
import React from "react";
import {
  FieldValues,
  FormProvider,
  useForm,
  UseFormReturn,
  type UseFormProps,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";

export interface FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = never,
> extends Omit<StackProps, "children" | "onSubmit">,
    UseFormProps<TFieldValues, TContext> {
  onSubmit?: SubmitHandler<TFieldValues>;
  onSubmitInvalid?: SubmitErrorHandler<TFieldValues>;
  children:
    | React.ReactNode
    | ((method: UseFormReturn<TFieldValues, TContext>) => React.ReactNode);
}

export default function Form<
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
      <form onSubmit={onSubmit && handleSubmit(onSubmit, onSubmitInvalid)}>
        <VStack alignItems={"stretch"} gap={"6"} {...props}>
          {typeof children == "function" ? children(methods) : children}
        </VStack>
      </form>
    </FormProvider>
  );
}
