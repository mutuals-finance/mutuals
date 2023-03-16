import { Combobox } from '@headlessui/react';
import React from 'react';

interface InputComboboxProps<T> {
  label?: string;
  className?: string;
  onChange?: (value: T) => void;
  name?: string | undefined;
  by: keyof T;
  value: T;
  items: T[];
  children: (state: { index: number; item: T }) => React.ReactNode;
}

function InputCombobox<T>({
  label,
  items,
  children,
  className,
  value,
  onChange,
  by,
  ...props
}: InputComboboxProps<T>) {
  const keyOf = (item: T) => item[by] as string;

  const filteredItems =
    keyOf(value) === ''
      ? items
      : items.filter((item) => {
          return keyOf(item).includes(keyOf(value));
        });

  return (
    <Combobox
      as={'div'}
      className={`relative ${className}`}
      value={value}
      onChange={onChange}
      {...props}
    >
      {!!label && (
        <Combobox.Label className='label mb-1'>{label}</Combobox.Label>
      )}
      <Combobox.Button as='div'>
        <Combobox.Input
          onChange={(event) => {
            onChange?.({ ...value, [by]: event.target.value });
          }}
          displayValue={keyOf}
        />
      </Combobox.Button>

      <Combobox.Options
        className={`absolute top-full left-0 z-10 h-auto max-h-60 w-full overflow-y-auto rounded bg-white py-2 shadow ${
          filteredItems.length <= 0 ? 'hidden' : 'flex flex-col'
        }`}
      >
        {filteredItems.map((item, index) => children({ item, index }))}
      </Combobox.Options>
    </Combobox>
  );
}

interface InputComboboxOptionProps<T> extends React.PropsWithChildren<unknown> {
  value: T;
  disabled?: boolean;
}

// eslint-disable-next-line react/display-name
export function InputComboboxOption<T>({
  children,
  disabled,
  ...props
}: InputComboboxOptionProps<T>) {
  return (
    <Combobox.Option {...props} disabled={disabled}>
      {children}
    </Combobox.Option>
  );
}

InputCombobox.Option = InputComboboxOption;

export default InputCombobox;
