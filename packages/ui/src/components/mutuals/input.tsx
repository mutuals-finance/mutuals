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
  ListCollection as ChakraListCollection,
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
  | ((value?: any, index?: number) => React.ReactNode);

export type SelectCollectionItemProps = {
  value: any;
  children: ReactNodeOrFn;
};

export interface SelectProps
  extends BaseInputProps,
    Omit<ChakraSelectRootProps, "children"> {
  collection: ChakraListCollection<SelectCollectionItemProps>;
  children?: ReactNodeOrFn;
  placeholder?: ChakraSelectValueTextProps["placeholder"];
  valueTextProps?: Omit<ChakraSelectValueTextProps, "placeholder">;
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
              {(items: SelectCollectionItemProps[]) => {
                const item = items[0]!;
                return typeof children == "function"
                  ? children(item.value, 0)
                  : !children
                    ? typeof item == "string" && item
                    : collection.stringifyItem(item);
              }}
            </ChakraSelectValueText>
          </ChakraSelectTrigger>
          <ChakraSelectContent>
            {collection?.items.map((item, i) => (
              <ChakraSelectItem key={i} item={item}>
                {typeof children == "function"
                  ? children(item.value, i)
                  : !children
                    ? typeof item == "string" && item
                    : children}
              </ChakraSelectItem>
            ))}
          </ChakraSelectContent>
        </ChakraSelectRoot>
      )}
      {...controllerProps}
    />
  );
}
