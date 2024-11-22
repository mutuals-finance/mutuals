import { InputNumberBaseProps } from "@/components/Form/types";
import { Controller, useFormContext } from "react-hook-form";
import InputBase from "@/components/Form/InputBase";
import {
  NumberInputField,
  NumberInputProps,
  NumberInputRoot,
} from "@mutuals/ui";
import React from "react";

export default function NumberInput({
  id = "",
  validation,
  inputProps,
  size,
  hideWrapper,
  label,
  ...props
}: InputNumberBaseProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field: { onChange, ...field } }) => (
        <InputBase id={id} hideWrapper={hideWrapper} label={label} {...props}>
          <NumberInputRoot
            id={id}
            size={size as NumberInputProps["size"]}
            onValueChange={({ value }) => {
              onChange(value);
            }}
            {...inputProps}
            {...field}
            {...props}
          >
            <NumberInputField />
          </NumberInputRoot>
        </InputBase>
      )}
    />
  );
}
