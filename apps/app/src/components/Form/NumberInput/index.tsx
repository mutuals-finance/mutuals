import { InputNumberBaseProps } from "@/components/Form/types";
import { Controller, useFormContext } from "react-hook-form";
import InputBase from "@/components/Form/InputBase";
import {
  NumberInputField,
  NumberInputProps,
  NumberInputRoot,
} from "@mutuals/ui";
import React from "react";

function InnerNumberInput(props?: NumberInputProps) {
  return (
    <NumberInputRoot {...props}>
      <NumberInputField />
    </NumberInputRoot>
  );
}

export default function NumberInput({
  id = "",
  validation,
  inputProps,
  wrapperHidden,
  size,
  ...props
}: InputNumberBaseProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field }) => (
        <>
          {!wrapperHidden ? (
            <InputBase id={id} {...props}>
              <InnerNumberInput
                id={id}
                size={size}
                {...inputProps}
                {...field}
              />
            </InputBase>
          ) : (
            <InnerNumberInput id={id} size={size} {...inputProps} {...field} />
          )}
        </>
      )}
    />
  );
}
