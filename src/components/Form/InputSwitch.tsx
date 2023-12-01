import { Switch, SwitchProps } from '@chakra-ui/react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import InputBase from '@/components/Form/InputBase';
import { BaseFieldProps } from '@/components/Form/types';

type InputSwitchProps = SwitchProps & BaseFieldProps;

export default function InputSwitch({
  id = '',
  validation,
  helperText,
  ...rest
}: InputSwitchProps) {
  const { control } = useFormContext();

  return (
    <InputBase id={id!} validation={validation!} helperText={helperText!} {...rest}>
      <Controller
        control={control!}
        name={id!}
        rules={validation!}
        render={({ field }) => <Switch {...rest} {...field} id={id!} />}
      />
    </InputBase>
  );
}
