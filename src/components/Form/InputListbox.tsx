import { Listbox, ListboxProps } from '@headlessui/react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import clsxm from '@/lib/utils/clsxm';

import BaseWrapper from '@/components/Form/InputBase/BaseWrapper';
import { BaseFieldProps } from '@/components/Form/types';

type InputListboxProps<TType> = Omit<BaseFieldProps, 'children'> &
  Omit<ListboxProps<'button', TType, TType>, 'children'> & {
    optionsWrapperClassNames?: string;
    displayFn?: (state: { items: TType[] }) => React.ReactNode | string;
    children?: (state: {
      item: TType;
      index: number;
      active: boolean;
      selected: boolean;
    }) => React.ReactNode;
    options?: TType[];
  };

export default function InputListbox<TType = string>({
  id = '',
  validation,
  className,
  displayFn,
  options = [],
  children,
  optionsWrapperClassNames,
  ...rest
}: InputListboxProps<TType>) {
  const { control } = useFormContext();

  return (
    <BaseWrapper
      id={id}
      validation={validation}
      className={clsxm('flex flex-col', className)}
      {...rest}
    >
      <Controller
        control={control}
        name={id}
        rules={validation}
        render={({ field: { ...field } }) => (
          <>
            <Listbox {...rest} {...field} as={'div'} className={'w-full'}>
              <Listbox.Button
                as={'button'}
                className={
                  'input input-readonly cursor-pointer hover:border-black dark:hover:border-neutral-50'
                }
              >
                {displayFn?.({ items: field.value })}
              </Listbox.Button>

              <Listbox.Options
                className={clsxm(
                  `rounded-default bg-default divide-default shadow-default border-default absolute left-0 top-full z-10 h-auto max-h-60 w-full translate-y-3 divide-y overflow-y-auto border  ${
                    options.length <= 0 ? 'hidden' : 'flex flex-col'
                  }`,
                  optionsWrapperClassNames
                )}
              >
                {options.map((item, index) => (
                  <Listbox.Option key={index} value={item}>
                    {({ active, selected }) => (
                      <>{children?.({ item, index, active, selected })}</>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </>
        )}
      />
    </BaseWrapper>
  );
}
