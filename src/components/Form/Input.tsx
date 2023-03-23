import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import FormItem from './FormItem';
import { InputDefaultProps } from './types';

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'id' | 'placeholder'
    >,
    InputDefaultProps {
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  /** Icon before input */
  icon?: React.ReactNode;
  /** Icon after input */
  iconAfter?: React.ReactNode;
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
  inputClassName?: string;
}

export default function Input(props: InputProps) {
  const { id, validation, ...rest } = props;

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field, fieldState: { error } }) => (
        <FormItem error={error} id={id} {...rest} {...field} />
      )}
    />
  );
}
