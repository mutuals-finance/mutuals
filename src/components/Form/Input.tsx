import { Input as ChakraInput } from '@chakra-ui/react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import BaseWrapper from '@/components/Form/InputBase/BaseWrapper';
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
            <BaseWrapper id={id} {...props}>
              <ChakraInput id={id} {...props} {...field} />
            </BaseWrapper>
          ) : (
            <ChakraInput id={id} {...props} {...field} />
          )}
        </>
      )}
    />
  );
}
