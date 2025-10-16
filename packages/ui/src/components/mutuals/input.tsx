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
  SelectValueChangeDetails,
  NumberInputValueChangeDetails,
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
  SelectItemGroup as ChakraSelectItemGroup,
} from "../../components/ui/select";
import React, { ChangeEvent, ReactNode } from "react";

function groupBy<T>(
  array: T[],
  keyFn: (item: T) => string,
): Record<string, T[]> {
  return array.reduce(
    (groups, item) => {
      const key = keyFn(item);
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
      return groups;
    },
    {} as Record<string, T[]>,
  );
}

export interface Transform<TFieldValue, TEvent> {
  input: (value: TFieldValue) => undefined | string | number | string[];
  output: (event: TEvent, prevValue?: TFieldValue) => undefined | TFieldValue;
}

type JsonObject = Record<string, any>;

export function createJsonTransform<
  TEvent,
  TObject extends JsonObject = JsonObject,
>(
  key: keyof TObject,
  defaultValue: TObject,
  mapInput: (decoded: TObject) => string | number | string[] | undefined,
  mapOutput: (event: TEvent) => TObject[typeof key] | undefined,
): Transform<string, TEvent> {
  return {
    input: (value) => {
      if (!value) return undefined;
      try {
        const decoded = JSON.parse(value) as TObject;
        return mapInput(decoded);
      } catch {
        return undefined;
      }
    },
    output: (e, prevValue) => {
      const prevDecoded: TObject = prevValue
        ? (JSON.parse(prevValue) as TObject)
        : ({} as TObject);

      const newFieldValue = mapOutput(e);
      if (newFieldValue === undefined) return undefined;

      const merged: TObject = {
        ...defaultValue,
        ...prevDecoded,
        [key]: newFieldValue,
      };

      return JSON.stringify(merged);
    },
  };
}

export interface BaseInputProps<TFieldValue, TEvent> {
  controllerProps?: Omit<
    ControllerProps,
    "control" | "name" | "render" | "rules"
  >;
  rules?: ControllerProps["rules"];
  transform?: Transform<TFieldValue, TEvent>;
}

export interface InputProps
  extends BaseInputProps<string, ChangeEvent<HTMLInputElement>>,
    Omit<ChakraInputProps, "transform" | "onChange" | "value"> {}

export function Input({
  id = "",
  name = id,
  rules,
  transform,
  controllerProps,
  ...props
}: InputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, ...field } }) => (
        <ChakraInput
          id={id}
          {...props}
          value={transform ? transform.input(value) : value}
          onChange={(e) =>
            onChange(transform ? transform.output(e, value) : e.target.value)
          }
          {...field}
        />
      )}
      {...controllerProps}
    />
  );
}

export interface TextareaProps
  extends BaseInputProps<string, ChangeEvent<HTMLTextAreaElement>>,
    Omit<ChakraTextareaProps, "transform" | "onChange" | "value"> {}

export function Textarea({
  id = "",
  rules,
  transform,
  controllerProps,
  ...props
}: TextareaProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={id}
      rules={rules}
      render={({ field: { onChange, value, ...field } }) => (
        <ChakraTextarea
          id={id}
          {...props}
          value={transform ? transform.input(value) : value}
          onChange={(e) =>
            onChange(transform ? transform.output(e, value) : e.target.value)
          }
          {...field}
        />
      )}
      {...controllerProps}
    />
  );
}

export interface NumberInputProps<TFieldValue>
  extends BaseInputProps<TFieldValue, NumberInputValueChangeDetails>,
    Omit<ChakraNumberInputRootProps, "transform" | "onValueChange" | "value"> {
  inputProps?: ChakraNumberInputInputProps;
}

export function NumberInput<TFieldValue = number | string>({
  id = "",
  name = id,
  rules,
  transform,
  controllerProps,
  inputProps,
  ...props
}: NumberInputProps<TFieldValue>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value, ...field } }) => (
        <ChakraNumberInputRoot
          id={id}
          value={transform ? transform.input(value) : value}
          onValueChange={(details) =>
            transform
              ? onChange(transform.output(details, value))
              : onChange(details.value)
          }
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
  | ((
      current: { item?: SelectCollectionItemProps; trigger: boolean },
      index?: number,
    ) => React.ReactNode);

export type SelectCollectionItemProps = {
  value: any;
  children: ReactNodeOrFn;
  group?: string;
};

export interface SelectProps<TFieldValue = ChakraSelectRootProps["value"]>
  extends BaseInputProps<
      TFieldValue,
      SelectValueChangeDetails<SelectCollectionItemProps>
    >,
    Omit<
      ChakraSelectRootProps<SelectCollectionItemProps>,
      "children" | "transform" | "onValueChange" | "value"
    > {
  placeholder?: ChakraSelectValueTextProps["placeholder"];
  valueTextProps?: Omit<ChakraSelectValueTextProps, "placeholder">;
  children?: ReactNodeOrFn;
}

type SelectCollectionItemRenderProps = {
  children?: ReactNodeOrFn;
  current: { item?: SelectCollectionItemProps; trigger: boolean };
  index: number;
};

function SelectCollectionItemContent({
  current,
  children,
  index,
}: SelectCollectionItemRenderProps) {
  const item = current.item;

  if (children) {
    return typeof children == "function" ? children(current, index) : children;
  }

  if (item?.children) {
    return typeof item.children == "function"
      ? item.children(current, index)
      : item.children;
  }

  if (item?.value) {
    return item.value;
  }

  return `unknown ${index}`;
}

type SelectContentProps<TFieldValue> = SelectProps<TFieldValue>;

function SelectContent<TFieldValue>({
  children,
  collection,
}: SelectContentProps<TFieldValue>) {
  if (!collection?.items) {
    return <ChakraSelectContent />;
  }

  const hasGrouping = collection.items.some((item) => item.group !== undefined);

  if (hasGrouping) {
    const groupedItems = Object.entries(
      groupBy(collection.items, (item) => item.group ?? ""),
    );

    return (
      <ChakraSelectContent>
        {groupedItems.map(([groupLabel, items]) => (
          <ChakraSelectItemGroup key={groupLabel} label={groupLabel}>
            {items.map((item, i) => (
              <ChakraSelectItem key={`${groupLabel}-${i}`} item={item}>
                <SelectCollectionItemContent
                  current={{ item, trigger: false }}
                  index={i}
                >
                  {children}
                </SelectCollectionItemContent>
              </ChakraSelectItem>
            ))}
          </ChakraSelectItemGroup>
        ))}
      </ChakraSelectContent>
    );
  }

  return (
    <ChakraSelectContent>
      {collection.items.map((item, i) => (
        <ChakraSelectItem key={i} item={item}>
          <SelectCollectionItemContent
            current={{ item, trigger: false }}
            index={i}
          >
            {children}
          </SelectCollectionItemContent>
        </ChakraSelectItem>
      ))}
    </ChakraSelectContent>
  );
}

export function Select<TFieldValue = ChakraSelectRootProps["value"]>(
  props: SelectProps<TFieldValue>,
) {
  const {
    transform,
    rules,
    controllerProps,
    children,
    placeholder,
    valueTextProps,
    onInteractOutside,
    ...rootProps
  } = props;

  const { id = "", name = id } = rootProps;

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value, ...field } }) => (
        <ChakraSelectRoot
          {...rootProps}
          value={transform ? transform.input(value) : value}
          onValueChange={(details) =>
            transform
              ? onChange(transform.output(details, value))
              : onChange(details.value)
          }
          onInteractOutside={(event) => {
            field.onBlur();
            onInteractOutside?.(event);
          }}
          {...field}
        >
          <ChakraSelectTrigger>
            <ChakraSelectValueText
              placeholder={placeholder}
              {...valueTextProps}
            >
              {(items: SelectCollectionItemProps[]) => (
                <SelectCollectionItemContent
                  current={{ item: items[0], trigger: true }}
                  index={0}
                >
                  {children}
                </SelectCollectionItemContent>
              )}
            </ChakraSelectValueText>
          </ChakraSelectTrigger>

          <SelectContent<TFieldValue> {...props} />
        </ChakraSelectRoot>
      )}
      {...controllerProps}
    />
  );
}
