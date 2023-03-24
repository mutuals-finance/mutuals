import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import Inner from '@/components/Form/InputNumber/Inner';
import { InputNumberBaseProps } from '@/components/Form/types';

type InputNumberProps = InputNumberBaseProps;

export default function InputNumber({
  id = '',
  validation,
  ...props
}: InputNumberProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field }) => <Inner id={id} {...props} {...field} />}
    />
  );
}
