"use client";

import { Input as ChakraInput } from "@mutuals/ui";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import InputBase from "@/components/Form/InputBase";
import { InputBaseProps } from "@/components/Form/types";

export default function Input({
  id = "",
  validation,
  hideWrapper = false,
  label,
  ...props
}: InputBaseProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => (
        <>
          {!hideWrapper ? (
            <InputBase
              id={id}
              label={label}
              {...{ invalid, isTouched, isDirty, error }}
            >
              <ChakraInput
                id={id}
                {...props}
                {...{ onChange, onBlur, value, name, ref }}
                {...{ error }}
              />
            </InputBase>
          ) : (
            <ChakraInput
              id={id}
              {...props}
              {...{ onChange, onBlur, value, name, ref }}
              {...{ error }}
            />
          )}
        </>
      )}
    />
  );
}
