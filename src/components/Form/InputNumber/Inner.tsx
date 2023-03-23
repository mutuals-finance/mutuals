import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { NumericFormat } from 'react-number-format';

import InputBase from '@/components/Form/InputBase';
import NumberButton from '@/components/Form/InputNumber/NumberButton';
import useFormatValues from '@/components/Form/InputNumber/useFormatValues';
import { InputNumberBaseProps } from '@/components/Form/types';

type InnerProps = InputNumberBaseProps & ControllerRenderProps;

export default function Inner({
  isAllowed,
  removeDisabled,
  addDisabled,
  step = 1,
  decimalScale = 0,
  onChange,
  value,
  ...props
}: InnerProps) {
  const { formatValues, setFormatValues } = useFormatValues(value, {
    step,
    decimalScale,
  });

  const icon = (
    <NumberButton
      icon={<IoRemove />}
      disabled={removeDisabled || !(!isAllowed || isAllowed(formatValues.prev))}
      onLongPress={() => onChange(formatValues.prev.value)}
    />
  );

  const iconAfter = (
    <NumberButton
      icon={<IoAdd />}
      disabled={addDisabled || !(!isAllowed || isAllowed(formatValues.next))}
      onLongPress={() => onChange(formatValues.next.value)}
    />
  );

  const allProps = {
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
      {...allProps}
      onValueChange={(values) => setFormatValues?.(values)}
    />
  );
}
