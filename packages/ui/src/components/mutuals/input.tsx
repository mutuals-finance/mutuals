"use client";

import {
  Input as ChakraInput,
  type InputProps as ChakraInputProps,
  type NumberInputInputProps as ChakraNumberInputInputProps,
  type NumberInputRootProps as ChakraNumberInputRootProps,
  type SelectContentProps as ChakraSelectContentProps,
  SelectRoot as ChakraSelectRoot,
  type SelectRootProps as ChakraSelectRootProps,
  type SelectValueTextProps as ChakraSelectValueTextProps,
  Textarea as ChakraTextarea,
  type TextareaProps as ChakraTextareaProps,
  type NumberInputValueChangeDetails,
  type SelectValueChangeDetails,
} from "@chakra-ui/react";
import type React from "react";
import type { ChangeEvent, ReactNode } from "react";
import {
  Controller,
  type ControllerProps,
  useFormContext,
} from "react-hook-form";
import {
  NumberInputField as ChakraNumberInputField,
  NumberInputRoot as ChakraNumberInputRoot,
} from "../../components/ui/number-input";
import {
  PasswordInput as ChakraPasswordInput,
  type PasswordInputProps as ChakraPasswordInputProps,
} from "../../components/ui/password-input";
import {
  SelectContent as ChakraSelectContent,
  SelectItem as ChakraSelectItem,
  SelectItemGroup as ChakraSelectItemGroup,
  SelectTrigger as ChakraSelectTrigger,
  SelectValueText as ChakraSelectValueText,
  type SelectTriggerProps,
} from "../../components/ui/select";
import {
  Switch as ChakraSwitch,
  type SwitchProps as ChakraSwitchProps,
} from "../../components/ui/switch";

function groupBy<T>(
  array: T[],
  keyFn: (item: T) => string
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
    {} as Record<string, T[]>
  );
}

export interface Transform<TFieldValue, TEvent> {
  input: (value: TFieldValue) => undefined | string | number | string[];
  output: (event: TEvent, prevValue?: TFieldValue) => undefined | TFieldValue;
}

export type JsonObject = Record<string, unknown>;

export function createJsonTransform<
  TEvent,
  TObject extends JsonObject = JsonObject,
>(
  key: keyof TObject,
  defaultValue: TObject,
  mapInput: (decoded: TObject) => string | number | string[] | undefined,
  mapOutput: (event: TEvent) => TObject[typeof key] | undefined
): Transform<string, TEvent> {
  return {
    input: (value) => {
      if (!value) {
        return undefined;
      }
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
      if (newFieldValue === undefined) {
        return undefined;
      }

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
      render={({ field: { value, onChange, ...field } }) => (
        <ChakraInput
          id={id}
          {...props}
          onChange={(e) =>
            onChange(transform ? transform.output(e, value) : e.target.value)
          }
          value={transform ? transform.input(value) : value}
          {...field}
        />
      )}
      rules={rules}
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
      render={({ field: { onChange, value, ...field } }) => (
        <ChakraTextarea
          id={id}
          {...props}
          onChange={(e) =>
            onChange(transform ? transform.output(e, value) : e.target.value)
          }
          value={transform ? transform.input(value) : value}
          {...field}
        />
      )}
      rules={rules}
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
      render={({ field: { onChange, value, ...field } }) => (
        <ChakraNumberInputRoot
          id={id}
          onValueChange={(details) =>
            transform
              ? onChange(transform.output(details, value))
              : onChange(details.value)
          }
          value={transform ? transform.input(value) : value}
          {...field}
          {...props}
        >
          <ChakraNumberInputField {...inputProps} />
        </ChakraNumberInputRoot>
      )}
      rules={rules}
      {...controllerProps}
    />
  );
}

export interface PasswordInputProps
  extends BaseInputProps<string, ChangeEvent<HTMLInputElement>>,
    Omit<ChakraPasswordInputProps, "transform" | "onChange" | "value"> {}

export function PasswordInput({
  id = "",
  name = id,
  rules,
  transform,
  controllerProps,
  ...props
}: PasswordInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <ChakraPasswordInput
          id={id}
          {...props}
          onChange={(e) =>
            onChange(transform ? transform.output(e, value) : e.target.value)
          }
          value={transform ? transform.input(value) : value}
          {...field}
        />
      )}
      rules={rules}
      {...controllerProps}
    />
  );
}

type ReactNodeOrFn =
  | string
  | ReactNode
  | ((
      current: { item?: SelectCollectionItemProps; trigger: boolean },
      index?: number
    ) => React.ReactNode);

export interface SelectCollectionItemProps {
  children: ReactNodeOrFn;
  group?: string;
  // biome-ignore lint/suspicious/noExplicitAny: select value can be any renderable type
  value: any;
}

export interface SelectProps<TFieldValue = ChakraSelectRootProps["value"]>
  extends BaseInputProps<
      TFieldValue,
      SelectValueChangeDetails<SelectCollectionItemProps>
    >,
    Omit<
      ChakraSelectRootProps<SelectCollectionItemProps>,
      "children" | "transform" | "onValueChange" | "value"
    > {
  children?: ReactNodeOrFn;
  contentProps?: Omit<
    SelectContentProps<TFieldValue>,
    "collection" | "children"
  >;
  placeholder?: ChakraSelectValueTextProps["placeholder"];
  triggerProps?: SelectTriggerProps;
  valueTextProps?: Omit<ChakraSelectValueTextProps, "placeholder">;
}

interface SelectCollectionItemRenderProps {
  children?: ReactNodeOrFn;
  current: { item?: SelectCollectionItemProps; trigger: boolean };
  index: number;
}

function SelectCollectionItemContent({
  current,
  children,
  index,
}: SelectCollectionItemRenderProps) {
  const item = current.item;

  if (children) {
    return typeof children === "function" ? children(current, index) : children;
  }

  if (item?.children) {
    return typeof item.children === "function"
      ? item.children(current, index)
      : item.children;
  }

  if (item?.value) {
    return item.value;
  }

  return `unknown ${index}`;
}

export type SelectContentProps<TFieldValue> = Omit<
  ChakraSelectContentProps,
  "children"
> &
  Pick<SelectProps<TFieldValue>, "children" | "collection">;

function SelectContent<TFieldValue>({
  children,
  collection,
  ...props
}: SelectContentProps<TFieldValue>) {
  if (!collection?.items) {
    return <ChakraSelectContent {...props} />;
  }

  const hasGrouping = collection.items.some((item) => item.group !== undefined);

  if (hasGrouping) {
    const groupedItems = Object.entries(
      groupBy(collection.items, (item) => item.group ?? "")
    );

    return (
      <ChakraSelectContent {...props}>
        {groupedItems.map(([groupLabel, items]) => (
          <ChakraSelectItemGroup key={groupLabel} label={groupLabel}>
            {items.map((item, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: grouped select items may not have unique string keys
              <ChakraSelectItem item={item} key={`${groupLabel}-${i}`}>
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
    <ChakraSelectContent {...props}>
      {collection.items.map((item, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: select items may not have unique string keys
        <ChakraSelectItem item={item} key={i}>
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
  props: SelectProps<TFieldValue>
) {
  const {
    transform,
    rules,
    controllerProps,
    children,
    placeholder,
    valueTextProps,
    onInteractOutside,
    triggerProps,
    contentProps,
    ...rootProps
  } = props;

  const { id = "", name = id } = rootProps;

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...field } }) => (
        <ChakraSelectRoot
          {...rootProps}
          onInteractOutside={(event) => {
            field.onBlur();
            onInteractOutside?.(event);
          }}
          onValueChange={(details) =>
            transform
              ? onChange(transform.output(details, value))
              : onChange(details.value)
          }
          value={transform ? transform.input(value) : value}
          {...field}
        >
          <ChakraSelectTrigger {...triggerProps}>
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

          <SelectContent<TFieldValue>
            collection={rootProps.collection}
            {...contentProps}
          >
            {children}
          </SelectContent>
        </ChakraSelectRoot>
      )}
      rules={rules}
      {...controllerProps}
    />
  );
}

export interface SwitchInputProps
  extends BaseInputProps<
      boolean,
      {
        checked: boolean;
      }
    >,
    Omit<ChakraSwitchProps, "transform" | "onChange" | "value"> {}

export function SwitchInput({
  id = "",
  name = id,
  rules,
  transform,
  controllerProps,
  inputProps,
  ...props
}: SwitchInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <ChakraSwitch
          id={id}
          {...props}
          checked={transform ? transform.input(value) : value}
          inputProps={{ ...field, ...inputProps }}
          onCheckedChange={(e) =>
            onChange(transform ? transform.output(e, value) : e.checked)
          }
        />
      )}
      rules={rules}
      {...controllerProps}
    />
  );
}
