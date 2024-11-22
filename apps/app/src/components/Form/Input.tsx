"use client";

import { Input as ChakraInput } from "@mutuals/ui";
import { Controller, useFormContext } from "react-hook-form";
import InputBase from "@/components/Form/InputBase";
import { InputBaseProps } from "@/components/Form/types";

export default function Input({
  id = "",
  validation,
  hideWrapper,
  ...rest
}: InputBaseProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field }) => (
        <InputBase
          id={id}
          validation={validation}
          hideWrapper={hideWrapper}
          {...rest}
        >
          <ChakraInput id={id} {...rest} {...field} />
        </InputBase>
      )}
    />
  );
}
