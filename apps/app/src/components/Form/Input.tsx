'use client';

import { Input as ChakraInput } from '@chakra-ui/react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import InputBase from '@/components/Form/InputBase';
import { InputBaseProps } from '@/components/Form/types';

export default function Input({
  id = '',
  validation,
  hideWrapper = false,
  ...props
}: InputBaseProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field }) => (
        <>
          {!hideWrapper ? (
            <InputBase id={id} {...props}>
              <ChakraInput id={id} {...props} {...field} />
            </InputBase>
          ) : (
            <ChakraInput id={id} {...props} {...field} />
          )}
        </>
      )}
    />
  );
}
