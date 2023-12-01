import { GroupBase, Select } from 'chakra-react-select';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Props } from 'react-select';

import InputBase from '@/components/Form/InputBase';
import { BaseFieldProps } from '@/components/Form/types';

type InputListboxProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
> = Omit<BaseFieldProps, 'size' | 'as'> & Props<Option, IsMulti, Group>;

export default function InputListbox<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({ id = '', validation, ...rest }: InputListboxProps<Option, IsMulti, Group>) {
  const { control } = useFormContext();

  return (
    <InputBase id={id} validation={validation} {...rest}>
      <Controller
        control={control}
        name={id}
        rules={validation}
        render={({ field }) => <Select {...rest} {...field} />}
      />
    </InputBase>
  );
}
