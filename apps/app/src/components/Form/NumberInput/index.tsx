import { InputNumberBaseProps } from "@/components/Form/types";
import { Controller, useFormContext } from "react-hook-form";
import InputBase from "@/components/Form/InputBase";
import {
  NumberInputField,
  NumberInputProps,
  NumberInputRoot,
} from "@mutuals/ui";
import React, { forwardRef } from "react";

const InnerNumberInput = forwardRef<HTMLDivElement, NumberInputProps>(
  (props, ref) => {
    return (
      <NumberInputRoot ref={ref} {...props}>
        <NumberInputField />
      </NumberInputRoot>
    );
  },
);

InnerNumberInput.displayName = "InputNumberInput";

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
      render={({ field: { onChange, ...field } }) => (
        <>
          {!wrapperHidden ? (
            <InputBase id={id} {...props}>
              <InnerNumberInput
                id={id}
                size={size}
                {...inputProps}
                {...field}
                onValueChange={({ value }) => {
                  onChange(value);
                }}
              />
            </InputBase>
          ) : (
            <InnerNumberInput
              id={id}
              size={size}
              {...(props as NumberInputProps)}
              {...inputProps}
              {...field}
              onValueChange={({ value }) => {
                onChange(value);
              }}
            />
          )}
        </>
      )}
    />
  );
}
