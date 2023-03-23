import React from 'react';
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from 'react-hook-form';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { NumericFormat, type NumericFormatProps } from 'react-number-format';

import FormItem from '@/components/Form/FormItem';
import InputNumberButton from '@/components/Form/InputNumber/InputNumberButton';
import useFormatValues from '@/components/Form/InputNumber/useFormatValues';

import { InputDefaultProps } from '../types';

type DefaultProps = Omit<InputDefaultProps, 'value' | 'defaultValue'>;

export interface InputNumberProps extends DefaultProps, NumericFormatProps {
  step?: number;
  addDisabled?: boolean;
  removeDisabled?: boolean;
}

interface InputNumberInnerProps extends InputNumberProps {
  field: ControllerRenderProps;
}

function InputNumberInner({
  field,
  step = 1,
  decimalScale = 0,
  isAllowed,
  removeDisabled,
  addDisabled,
  ...props
}: InputNumberInnerProps) {
  const { formatValues, setFormatValues } = useFormatValues(field.value, {
    step,
    decimalScale,
  });

  const isNextAllowed = !isAllowed || isAllowed(formatValues.next);
  const isPrevAllowed = !isAllowed || isAllowed(formatValues.prev);

  return (
    <NumericFormat
      customInput={FormItem}
      {...field}
      {...{
        inputClassName: 'text-center',
        icon: (
          <InputNumberButton
            icon={<IoRemove />}
            disabled={removeDisabled || !isPrevAllowed}
            onLongPress={() => {
              isPrevAllowed && field.onChange(formatValues.prev.value);
            }}
          />
        ),
        iconAfter: (
          <InputNumberButton
            icon={<IoAdd />}
            disabled={addDisabled || !isNextAllowed}
            onLongPress={() => {
              isNextAllowed && field.onChange(formatValues.next.value);
            }}
          />
        ),
        ...props,
      }}
      decimalScale={decimalScale}
      isAllowed={isAllowed}
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
        <InputNumberInner id={id} field={field} {...rest} />
      )}
    />
  );
}
