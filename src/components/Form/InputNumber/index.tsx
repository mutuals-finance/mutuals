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

type BaseProps = Omit<InputBaseProps, 'defaultValue' | 'type' | 'value'>;
type FormatProps = Omit<NumericFormatProps, 'onChange'>;

interface InputNumberInnerProps extends BaseProps, FormatProps {
  addDisabled?: boolean;
  removeDisabled?: boolean;
  step?: number;
  field: ControllerRenderProps;
}

export type InputNumberProps = InputNumberInnerProps;

function InputNumberInner({
  field,
  isAllowed,
  removeDisabled,
  addDisabled,
  step = 1,
  decimalScale = 0,
  ...props
}: InputNumberInnerProps) {
  const { formatValues, setFormatValues } = useFormatValues(field.value, {
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
        isPrevAllowed && field.onChange(formatValues.prev.value);
      }}
    />
  );

  const iconAfter = (
    <InputNumberButton
      icon={<IoAdd />}
      disabled={addDisabled || !isNextAllowed}
      onLongPress={() => {
        isNextAllowed && field.onChange(formatValues.next.value);
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
    ...props,
  };

  return (
    <NumericFormat
      {...innerProps}
      {...field}
      onValueChange={(values) => setFormatValues?.(values)}
    />
  );
}

export default function InputNumber({
  id = '',
  validation,
  ...rest
}: InputNumberProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field }) => (
        <InputNumberInner id={id} {...rest} field={field} />
      )}
    />
  );
}
