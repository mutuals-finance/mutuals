import React, { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

import InputBase from "@/components/Form/InputBase";

import { InputBaseProps } from "../types";
import {
  SelectRoot,
  Select as ChakraSelect,
  SelectTrigger,
  SelectLabel,
  SelectValueText,
  SelectContent,
  SelectItem,
} from "@mutuals/ui";

type SelectProps<TItem> = Omit<InputBaseProps, "children"> & {
  items?: TItem[];
  placeholder?: ChakraSelect.ValueTextProps["placeholder"];
  children?: ReactNode | ((item: TItem, index: number) => ReactNode);
  inputProps?: Omit<ChakraSelect.RootProps, "items">;
  labelProps?: ChakraSelect.LabelProps;
};

export default function Select<TItem = string>({
  id = "",
  validation,
  items = [],
  children,
  placeholder,
  label,
  inputProps,
  labelProps,
  size,
  ...props
}: SelectProps<TItem>) {
  const { control } = useFormContext();

  return (
    <InputBase id={id!} validation={validation!} label={label} {...props}>
      <Controller
        control={control}
        name={id}
        rules={validation!}
        render={({ field }) => (
          <SelectRoot items={items} size={size} {...inputProps} {...field}>
            <SelectLabel {...labelProps}>
              {labelProps?.children || label}
            </SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {items.map((item, i) => (
                <SelectItem key={i} item={item}>
                  {typeof children == "function"
                    ? children(item, i)
                    : !children
                      ? typeof item == "string" && item
                      : children}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        )}
      />
    </InputBase>
  );
}
