import { get } from 'lodash';
import React from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

import InputBase from './InputBase';
import { InputBaseProps } from './types';

export default function Input({
  id = '',
  validation,
  ...props
}: InputBaseProps) {
  const { register } = useFormContext();

  return <InputBase id={id} {...props} {...register(id, validation)} />;
}
