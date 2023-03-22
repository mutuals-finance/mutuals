import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ControllerRenderProps } from 'react-hook-form/dist/types/controller';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { NumericFormat, type NumericFormatProps } from 'react-number-format';

import clsxm from '@/lib/utils/clsxm';

import FormItemHintAndError from '@/components/Form/FormItem/FormItemHintAndError';
import FormItemLabel from '@/components/Form/FormItem/FormItemLabel';
import InputNumberButton from '@/components/Form/InputNumber/InputNumberButton';
import useFormatValues from '@/components/Form/InputNumber/useFormatValues';

import { InputDefaultProps } from '../types';

export interface InputNumberProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'value' | 'id' | 'placeholder' | 'type' | 'defaultValue'
    >,
    Omit<InputDefaultProps, 'value' | 'defaultValue'>,
    Omit<NumericFormatProps, 'id' | 'placeholder'> {
  inputClassName?: string;
  step?: number;
  addDisabled?: boolean;
  removeDisabled?: boolean;
}

interface InputNumberInnerProps extends InputNumberProps {
  field: ControllerRenderProps;
}

function InputNumberInner({
  removeDisabled,
  step = 1,
  addDisabled,
  field,
  decimalScale = 1,
  placeholder,
  id,
  isAllowed,
  ...props
}: InputNumberInnerProps) {
  const { formatValues, setFormatValues } = useFormatValues(field.value, {
    step,
    decimalScale,
  });

  const isNextAllowed = !isAllowed || isAllowed(formatValues.next);
  const isPrevAllowed = !isAllowed || isAllowed(formatValues.prev);

  return (
    <div className={'relative flex flex-1'}>
      <InputNumberButton
        className={'left-1'}
        icon={<IoRemove />}
        disabled={removeDisabled || !isPrevAllowed}
        onLongPress={() => {
          isPrevAllowed && field.onChange(formatValues.prev.value);
        }}
      />

      <NumericFormat
        {...field}
        placeholder={!!placeholder ? placeholder : undefined}
        aria-describedby={id}
        decimalScale={decimalScale}
        id={id}
        isAllowed={isAllowed}
        onValueChange={(values) => setFormatValues?.(values)}
        {...props}
      />

      <InputNumberButton
        className={'right-1'}
        icon={<IoAdd />}
        disabled={addDisabled || !isNextAllowed}
        onLongPress={() => {
          isNextAllowed && field.onChange(formatValues.next.value);
        }}
      />
    </div>
  );
}

export default function InputNumber(props: InputNumberProps) {
  const {
    label,
    helperText,
    id,
    readOnly = false,
    hideError = false,
    validation,
    className,
    ...rest
  } = props;

  const { control } = useFormContext();

  const baseClasses = 'input flex-1 px-9 text-center';
  const readonlyClasses = 'input-readonly';

  const inputClasses = clsxm(baseClasses, readOnly && readonlyClasses);

  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field, fieldState: { error } }) => (
        <div className={clsxm(className, !!error && 'error')}>
          <FormItemLabel id={id} label={label} validation={validation} />

          <div className={clsxm('flex flex-1 items-center', !!label && 'mt-1')}>
            <InputNumberInner
              id={id}
              field={field}
              className={inputClasses}
              {...rest}
            />
          </div>

          <FormItemHintAndError
            helperText={helperText}
            hideError={hideError}
            error={error}
          />
        </div>
      )}
    />
  );
}
