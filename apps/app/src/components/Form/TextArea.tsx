import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import InputBase from "@/components/Form/InputBase";

import { BaseFieldProps } from "./types";

type TextAreaProps = ChakraTextareaProps & BaseFieldProps;

export default function TextArea({
  id = "",
  validation,
  rows = 6,
  ...rest
}: TextAreaProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field }) => (
        <InputBase id={id} validation={validation} {...rest}>
          <ChakraTextarea id={id} rows={rows} {...rest} {...field} />
        </InputBase>
      )}
    />
  );
}
