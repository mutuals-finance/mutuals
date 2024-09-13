import { VStack } from "@mutuals/ui";
import React from "react";
import {
  FieldValues,
  get,
  useFieldArray,
  UseFieldArrayReturn,
  useFormContext,
} from "react-hook-form";

import BaseFeedback from "@/components/Form/InputBase/BaseFeedback";
import { BaseFieldProps } from "@/components/Form/types";

type FieldArrayBaseFieldProps = Pick<
  BaseFieldProps,
  "id" | "validation" | "helperText" | "hideError"
>;

export interface InputFieldArrayGroupProps<TFieldValue>
  extends FieldArrayBaseFieldProps {
  children?: (
    method: UseFieldArrayReturn<FieldValues, string, "id">,
  ) => React.ReactNode;
  contentEmpty?: (
    method: UseFieldArrayReturn<FieldValues, string, "id">,
  ) => React.ReactNode;
  contentBefore?: (
    method: UseFieldArrayReturn<FieldValues, string, "id">,
  ) => React.ReactNode;
  contentAfter?: (
    method: UseFieldArrayReturn<FieldValues, string, "id">,
  ) => React.ReactNode;
}

export default function InputFieldArrayGroup<TFieldValue>({
  id = "",
  validation,
  children,
  helperText,
  hideError = false,
  contentEmpty,
  contentBefore,
  contentAfter,
}: InputFieldArrayGroupProps<TFieldValue>) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  const method = useFieldArray({
    name: id,
    rules: validation,
  });

  const { fields } = method;

  return (
    <VStack gap={"6"} flex={"1"} w={"100%"} alignItems={"stretch"}>
      {contentBefore?.(method)}

      {!!contentEmpty && fields.length <= 0 && contentEmpty?.(method)}

      {!!children && (
        <VStack gap={"3"} alignItems={"stretch"}>
          {children(method)}
        </VStack>
      )}

      <BaseFeedback {...{ error, hideError, helperText }} />

      {contentAfter?.(method)}
    </VStack>
  );
}
