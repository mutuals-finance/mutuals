import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import InputBase from './InputBase';
import { InputBaseProps } from './types';

export default function Input({
  id = '',
  validation,
  ...props
}: InputBaseProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field }) => <InputBase id={id} {...props} {...field} />}
    />
  );
}
