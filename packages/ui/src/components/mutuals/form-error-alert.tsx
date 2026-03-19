"use client";

import { List } from "@chakra-ui/react";
import {
  ErrorMessage,
  type FieldValuesFromFieldErrors,
} from "@hookform/error-message";
import type { FieldErrors, FieldName, FieldValues } from "react-hook-form";
import { Alert, type AlertProps } from "../ui/alert";

export interface FormErrorAlertProps<
  TFieldValues extends FieldValues = FieldValues,
> extends Omit<AlertProps, "children"> {
  name?: FieldName<FieldValuesFromFieldErrors<FieldErrors<TFieldValues>>>;
}

export function FormErrorAlert<TFieldValues extends FieldValues = FieldValues>({
  status = "error",
  title = "There was an error processing your request",
  name = "root" as FieldName<
    FieldValuesFromFieldErrors<FieldErrors<TFieldValues>>
  >,
  ...props
}: FormErrorAlertProps<TFieldValues>) {
  return (
    <ErrorMessage
      name={name}
      render={({ message, messages }) => (
        <Alert status={status} title={title} {...props}>
          {messages ? (
            <List.Root>
              {Object.entries(messages).map(([t, m]) => (
                <List.Item _marker={{ color: "inherit" }} key={t}>
                  {m}
                </List.Item>
              ))}
            </List.Root>
          ) : (
            message
          )}
        </Alert>
      )}
    />
  );
}
