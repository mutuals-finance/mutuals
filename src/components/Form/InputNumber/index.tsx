import React from 'react';
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from 'react-hook-form';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { NumericFormat, type NumericFormatProps } from 'react-number-format';

import InputBase from '@/components/Form/InputBase';
import InputNumberButton from '@/components/Form/InputNumber/InputNumberButton';
import useFormatValues from '@/components/Form/InputNumber/useFormatValues';
import { InputBaseProps } from '@/components/Form/types';

type InputNumberBaseProps = InputBaseProps &
  NumericFormatProps & {
    addDisabled?: boolean;
    removeDisabled?: boolean;
  };

type InputNumberInnerProps = InputNumberBaseProps & ControllerRenderProps;
type InputNumberProps = InputNumberBaseProps;

function InputNumberInner({
  isAllowed,
  removeDisabled,
  addDisabled,
  step = 1,
  decimalScale = 0,
  onChange,
  value,
  ...props
}: InputNumberInnerProps) {
  const { formatValues, setFormatValues } = useFormatValues(value, {
    step,
    decimalScale,
  });

  const isNextAllowed = !isAllowed || isAllowed(formatValues.next);
  const isPrevAllowed = !isAllowed || isAllowed(formatValues.prev);

  const icon = (
    <InputNumberButton
      icon={<IoRemove />}
      disabled={removeDisabled || !isPrevAllowed}
      onLongPress={() => {
        isPrevAllowed && onChange(formatValues.prev.value);
      }}
    />
  );

  const iconAfter = (
    <InputNumberButton
      icon={<IoAdd />}
      disabled={addDisabled || !isNextAllowed}
      onLongPress={() => {
        isNextAllowed && onChange(formatValues.next.value);
      }}
    />
  );

  const innerProps = {
    customInput: InputBase,
    inputClassName: 'text-center',
    icon,
    iconAfter,
    decimalScale,
    isAllowed,
    value,
    onChange,
    ...props,
  };

  return (
    <NumericFormat
      {...innerProps}
      onValueChange={(values) => setFormatValues?.(values)}
    />
  );
}

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
      render={({ field }) => <InputNumberInner id={id} {...props} {...field} />}
    />
  );
}
