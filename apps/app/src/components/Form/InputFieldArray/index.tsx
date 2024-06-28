import { VStack } from "@splitfi/ui";
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

import { InputFieldArrayItem } from "./InputFieldArrayItem";

type FieldArrayBaseFieldProps = Pick<
  BaseFieldProps,
  "id" | "validation" | "helperText" | "hideError"
>;

interface InputFieldArrayProps<TFieldValue> extends FieldArrayBaseFieldProps {
  defaultItem: TFieldValue;
  removeDisabled?: boolean;
  hideAdd?: boolean;
  children: (id: string) => React.ReactNode;
  contentBefore?: (
    method: UseFieldArrayReturn<FieldValues, string, "id">,
  ) => React.ReactNode;
  contentAfter?: (
    method: UseFieldArrayReturn<FieldValues, string, "id">,
  ) => React.ReactNode;
}

export default function InputFieldArray<TFieldValue>({
  id = "",
  validation,
  children,
  defaultItem,
  helperText,
  removeDisabled,
  hideError = false,
  hideAdd = false,
  contentBefore,
  contentAfter,
}: InputFieldArrayProps<TFieldValue>) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  const method = useFieldArray({
    name: id,
    rules: validation,
  });

  const { fields, append, remove } = method;
  return (
    <VStack spacing={"6"} flex={"1"} w={"100%"} alignItems={"stretch"}>
      {contentBefore?.(method)}

      <VStack spacing={"3"} alignItems={"stretch"}>
        {fields.map((field, index) => (
          <InputFieldArrayItem
            key={field.id}
            removeDisabled={
              removeDisabled ||
              (!!validation?.minLength &&
                fields.length <= Number(validation.minLength))
            }
            onAdd={!hideAdd ? () => append(defaultItem) : undefined}
            onRemove={() => remove(index)}
          >
            {children(`${id}.${index}`)}
          </InputFieldArrayItem>
        ))}
      </VStack>

      <BaseFeedback {...{ error, hideError, helperText }} />

      {contentAfter?.(method)}
    </VStack>
  );
}
