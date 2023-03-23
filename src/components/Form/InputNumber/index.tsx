import React from 'react';
import { useFormContext } from 'react-hook-form';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { NumericFormat, type NumericFormatProps } from 'react-number-format';

import clsxm from '@/lib/utils/clsxm';

import Input from '@/components/Form/Input';
import InputNumberButton from '@/components/Form/InputNumber/InputNumberButton';
import useFormatValues from '@/components/Form/InputNumber/useFormatValues';

import { InputDefaultProps } from '../types';

type DefaultProps = Omit<InputDefaultProps, 'value' | 'defaultValue'>;
type FormatProps = Omit<NumericFormatProps, 'id' | 'placeholder'>;

export interface InputNumberProps extends DefaultProps, FormatProps {
  step?: number;
  addDisabled?: boolean;
  removeDisabled?: boolean;
}

export default function InputNumber({
  id,
  readOnly = false,
  className,
  step = 1,
  decimalScale = 1,
  isAllowed,
  removeDisabled,
  addDisabled,
  placeholder,
  ...rest
}: InputNumberProps) {
  const { getValues, setValue } = useFormContext();
  const fieldValue = getValues(id);
  const setFieldValue = (...args: any) => setValue(id, args);

  const { formatValues, setFormatValues } = useFormatValues(fieldValue, {
    step,
    decimalScale,
  });

  const isNextAllowed = !isAllowed || isAllowed(formatValues.next);
  const isPrevAllowed = !isAllowed || isAllowed(formatValues.prev);

  return (
    <NumericFormat
      customInput={(props) => (
        <Input
          {...props}
          id={id}
          placeholder={placeholder}
          className={clsxm(className)}
          inputClassName={'text-center'}
          icon={
            <InputNumberButton
              icon={<IoRemove />}
              disabled={removeDisabled || !isPrevAllowed}
              onLongPress={() => {
                isPrevAllowed && setFieldValue(formatValues.prev.value);
              }}
            />
          }
          iconAfter={
            <InputNumberButton
              icon={<IoAdd />}
              disabled={addDisabled || !isNextAllowed}
              onLongPress={() => {
                isNextAllowed && setFieldValue(formatValues.next.value);
              }}
            />
          }
        />
      )}
      id={id}
      decimalScale={decimalScale}
      isAllowed={isAllowed}
      onValueChange={(values) => setFormatValues?.(values)}
      {...rest}
    />
  );
}
