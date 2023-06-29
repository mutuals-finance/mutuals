import { Switch, SwitchProps } from '@chakra-ui/react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IoCheckmark, IoClose } from 'react-icons/io5';

import clsxm from '@/lib/utils/clsxm';

import BaseWrapper from '@/components/Form/InputBase/BaseWrapper';
import { BaseFieldProps } from '@/components/Form/types';

type InputSwitchProps = SwitchProps & BaseFieldProps;

export default function InputSwitch({
  id = '',
  validation,
  className,
  ...rest
}: InputSwitchProps) {
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
        render={({ field }) => <Switch {...rest} {...field} id={id} />}
      />
    </BaseWrapper>
  );
}
