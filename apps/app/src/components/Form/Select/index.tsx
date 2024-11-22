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
  ListCollection,
} from "@mutuals/ui";

type ReactNodeOrFn<TItem> =
  | ReactNode
  | ((value: TItem, index: number) => ReactNode);

type SelectCollectionItemProps<TItem> = {
  value: TItem;
  children: ReactNodeOrFn<TItem>;
};

type SelectProps<TItem> = Omit<InputBaseProps, "children"> & {
  collection: ListCollection<SelectCollectionItemProps<TItem>>;
  placeholder?: ChakraSelect.ValueTextProps["placeholder"];
  children?: ReactNodeOrFn<TItem>;
  inputProps?: Omit<ChakraSelect.RootProps, "collection">;
  labelProps?: ChakraSelect.LabelProps;
};

export default function Select<TItem = string>({
  id = "",
  validation,
  collection,
  children,
  placeholder,
  label,
  inputProps,
  labelProps,
  size,
  hideWrapper,
  ...props
}: SelectProps<TItem>) {
  const { control } = useFormContext();

  return (
    <InputBase
      id={id!}
      validation={validation!}
      label={label}
      hideWrapper={hideWrapper}
      {...props}
    >
      <Controller
        control={control}
        name={id}
        rules={validation!}
        render={({ field: { onChange, onBlur, ...field } }) => (
          <SelectRoot
            size={size as ChakraSelect.RootProps["size"]}
            {...props}
            {...inputProps}
            id={id}
            onValueChange={({ value }) => onChange(value)}
            onInteractOutside={() => onBlur()}
            collection={collection!}
            {...field}
          >
            {/*<SelectLabel {...labelProps}>*/}
            {/*  {labelProps?.children || label}*/}
            {/*</SelectLabel>*/}
            <SelectTrigger>
              <SelectValueText placeholder={placeholder}>
                {(items: Array<SelectCollectionItemProps<TItem>>) => {
                  const item = items[0]!;
                  return typeof children == "function"
                    ? children(item.value, 0)
                    : !children
                      ? typeof item == "string" && item
                      : collection.stringifyItem(item);
                }}
              </SelectValueText>
            </SelectTrigger>
            <SelectContent>
              {collection?.items.map((item, i) => (
                <SelectItem key={i} item={item}>
                  {typeof children == "function"
                    ? children(item.value, i)
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
