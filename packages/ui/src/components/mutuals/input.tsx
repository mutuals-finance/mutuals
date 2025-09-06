"use client";

import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  NumberInputRootProps as ChakraNumberInputRootProps,
  NumberInputInputProps as ChakraNumberInputInputProps,
  SelectRoot as ChakraSelectRoot,
  SelectRootProps as ChakraSelectRootProps,
  SelectValueTextProps as ChakraSelectValueTextProps,
} from "@chakra-ui/react";
import { Controller, useFormContext, ControllerProps } from "react-hook-form";
import {
  NumberInputField as ChakraNumberInputField,
  NumberInputRoot as ChakraNumberInputRoot,
} from "../../components/ui/number-input";
import {
  SelectTrigger as ChakraSelectTrigger,
  SelectContent as ChakraSelectContent,
  SelectValueText as ChakraSelectValueText,
  SelectItem as ChakraSelectItem,
} from "../../components/ui/select";
import React, { ReactNode } from "react";

export interface BaseInputProps {
  controllerProps?: Omit<
    ControllerProps,
    "control" | "name" | "render" | "rules"
  >;
  rules?: ControllerProps["rules"];
}

export interface InputProps extends BaseInputProps, ChakraInputProps {}

export function Input({
  id = "",
  rules,
  controllerProps,
  ...props
}: InputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={id}
      rules={rules}
      render={({ field }) => <ChakraInput id={id} {...props} {...field} />}
      {...controllerProps}
    />
  );
}

export interface TextareaProps extends BaseInputProps, ChakraTextareaProps {}

export function Textarea({
  id = "",
  rules,
  controllerProps,
  ...props
}: TextareaProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={id}
      rules={rules}
      render={({ field }) => <ChakraTextarea id={id} {...props} {...field} />}
      {...controllerProps}
    />
  );
}

export interface NumberInputProps
  extends BaseInputProps,
    ChakraNumberInputRootProps {
  inputProps?: ChakraNumberInputInputProps;
}

export function NumberInput({
  id = "",
  rules,
  controllerProps,
  inputProps,
  ...props
}: NumberInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      rules={rules}
      render={({ field: { onChange, ...field } }) => (
        <ChakraNumberInputRoot
          id={id}
          onValueChange={({ value }) => {
            onChange(value);
          }}
          {...field}
          {...props}
        >
          <ChakraNumberInputField {...inputProps} />
        </ChakraNumberInputRoot>
      )}
      {...controllerProps}
    />
  );
}

type ReactNodeOrFn =
  | string
  | ReactNode
  | ((value?: SelectCollectionItemProps, index?: number) => React.ReactNode);

export type SelectCollectionItemProps = {
  value: any;
  children: ReactNodeOrFn;
};

// ChakraListCollection<SelectCollectionItemProps>

export interface SelectProps
  extends BaseInputProps,
    Omit<ChakraSelectRootProps<SelectCollectionItemProps>, "children"> {
  // collection: ChakraSelectRootProps<SelectCollectionItemProps>["collection"];
  children?: ReactNodeOrFn;
  placeholder?: ChakraSelectValueTextProps["placeholder"];
  valueTextProps?: Omit<ChakraSelectValueTextProps, "placeholder">;
}

type SelectCollectionItemRenderProps = {
  children?: ReactNodeOrFn;
  item?: SelectCollectionItemProps;
  index: number;
};

function SelectCollectionItemContent({
  item,
  children,
  index,
}: SelectCollectionItemRenderProps) {
  if (children) {
    return typeof children == "function" ? children(item, index) : children;
  }

  if (item?.children) {
    return typeof item.children == "function" ? item.children() : item.children;
  }
  /*
  if(typeof item == "string"){
    return item
  }
  collection.stringifyItem(item)
*/

  if (item?.value) {
    return item.value;
  }

  return `unknown ${index}`;
}

export function Select({
  id = "",
  rules,
  controllerProps,
  children,
  collection,
  placeholder,
  valueTextProps,
  onValueChange,
  onInteractOutside,
  ...props
}: SelectProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={id}
      rules={rules}
      render={({ field }) => (
        <ChakraSelectRoot
          id={id}
          collection={collection}
          onValueChange={(details) => {
            field.onChange(details.value);
            onValueChange?.(details);
          }}
          onInteractOutside={(event) => {
            field.onBlur();
            onInteractOutside?.(event);
          }}
          {...props}
          {...field}
        >
          <ChakraSelectTrigger>
            <ChakraSelectValueText
              placeholder={placeholder}
              {...valueTextProps}
            >
              {(items: SelectCollectionItemProps[]) => (
                <SelectCollectionItemContent item={items[0]} index={0}>
                  {children}
                </SelectCollectionItemContent>
              )}
            </ChakraSelectValueText>
          </ChakraSelectTrigger>
          <ChakraSelectContent>
            {collection?.items.map((item, i) => (
              <ChakraSelectItem key={i} item={item}>
                <SelectCollectionItemContent item={item} index={i}>
                  {children}
                </SelectCollectionItemContent>
              </ChakraSelectItem>
            ))}
          </ChakraSelectContent>
        </ChakraSelectRoot>
      )}
      {...controllerProps}
    />
  );
}
