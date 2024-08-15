import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import InputBase from "@/components/Form/InputBase";

import { BaseFieldProps } from "../types";
import {
  GroupBase,
  Props,
  Select as ChakraReactSelect,
} from "chakra-react-select";

type SelectProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
> = Omit<BaseFieldProps, "size" | "as"> & Props<Option, IsMulti, Group>;

export default function Select<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({ id = "", validation, ...rest }: SelectProps<Option, IsMulti, Group>) {
  const { control } = useFormContext();
  const {
    isMulti: _isMulti,
    selectedOptionStyle: _selectedOptionStyle,
    hideSelectedOptions: _hideSelectedOptions,
    getOptionValue: _getOptionValue,
    isSearchable: _isSearchable,
    closeMenuOnSelect: _closeMenuOnSelect,
    ...props
  } = rest;
  return (
    <InputBase id={id!} validation={validation!} {...props}>
      <Controller
        control={control!}
        name={id!}
        rules={validation!}
        render={({ field }) => <ChakraReactSelect {...rest} {...field} />}
      />
    </InputBase>
  );
}
