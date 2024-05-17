import { GroupBase } from "chakra-react-select";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Props } from "react-select";

import InputBase from "@/components/Form/InputBase";
import { BaseFieldProps } from "@/components/Form/types";
import dynamic from "next/dynamic";

// Import <Select /> because react-select seems to not be optimized for SSR - https://github.com/JedWatson/react-select/issues/5459
const Select = dynamic(
  () => import("chakra-react-select").then((mod) => mod.Select),
  { ssr: false },
);

type InputListboxProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
> = Omit<BaseFieldProps, "size" | "as"> & Props<Option, IsMulti, Group>;

export default function InputListbox<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({ id = "", validation, ...rest }: InputListboxProps<Option, IsMulti, Group>) {
  const { control } = useFormContext();
  const {
    isMulti,
    selectedOptionStyle,
    hideSelectedOptions,
    getOptionValue,
    isSearchable,
    closeMenuOnSelect,
    ...props
  } = rest;
  return (
    <InputBase id={id!} validation={validation!} {...props}>
      <Controller
        control={control!}
        name={id!}
        rules={validation!}
        render={({ field }) => <Select {...rest} {...field} />}
      />
    </InputBase>
  );
}
