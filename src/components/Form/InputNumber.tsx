import React, { useRef } from 'react';
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from 'react-hook-form';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import {
  InputAttributes,
  NumericFormatProps,
} from 'react-number-format/types/types';
import { useLongPress, useRafLoop } from 'react-use';

import clsxm from '@/lib/utils/clsxm';

import { ButtonOutline } from '@/components/Button';
import FormItemHintAndError from '@/components/Form/FormItem/FormItemHintAndError';
import FormItemLabel from '@/components/Form/FormItem/FormItemLabel';

import { InputDefaultProps } from './types';

export interface InputNumberProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'id' | 'placeholder'
    >,
    InputDefaultProps,
    NumericFormatProps<InputAttributes> {
  inputClassName?: string;
  step?: number;
  addDisabled?: boolean;
  removeDisabled?: boolean;
}

interface InputNumberButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
  onLongPress: () => void;
  icon: React.ReactNode;
  disabled?: boolean;
}
function InputNumberButton({
  className,
  onLongPress,
  icon,
  disabled,
}: InputNumberButtonProps) {
  const longPressEvent = useLongPress(onLongPress, { delay: 0 });

  return (
    <span
      className={`absolute top-1/2 block -translate-y-1/2 text-neutral-400 ${className}`}
    >
      <ButtonOutline
        size='sm'
        disabled={disabled}
        icon={icon}
        {...longPressEvent}
      />
    </span>
  );
}

export default function InputNumber(props: InputNumberProps) {
  const {
    label,
    placeholder = '',
    helperText,
    id,
    readOnly = false,
    hideError = false,
    validation,
    className,
    step = 1,
    addDisabled,
    removeDisabled,
    ...rest
  } = props;

  const isAllowed = ({ floatValue }: NumberFormatValues) => {
    const value = floatValue || 0.0;
    return value <= 100.0 && value >= 0.0;
  };

  const { control } = useFormContext();

  const baseClasses = 'input flex-1 px-9 text-center';
  const readonlyClasses = 'input-readonly';

  const inputClasses = clsxm(baseClasses, readOnly && readonlyClasses);

  function getFormats(floatValue: number) {
    const value = floatValue.toFixed(2);
    const formats = {
      value,
      formattedValue: value,
      floatValue,
    };
    return formats;
  }

  return (
    <Controller
      control={control}
      name={id}
      rules={validation}
      render={({ field, fieldState: { error } }) => (
        <div className={clsxm(className, !!error && 'error')}>
          <FormItemLabel {...{ id, label, validation }} />

          <div className={clsxm('flex flex-1 items-center', !!label && 'mt-1')}>
            <div className={'relative flex flex-1'}>
              <InputNumberButton
                className={'left-1'}
                icon={<IoRemove />}
                disabled={
                  removeDisabled ||
                  !isAllowed(
                    getFormats(parseFloat(field.value || '0.00') - step)
                  )
                }
                onLongPress={() => {
                  const floatValue = parseFloat(field.value || '0.00') - step;
                  const formats = getFormats(floatValue);
                  isAllowed(formats) && field.onChange(formats.value);
                }}
              />

              <NumericFormat
                className={inputClasses}
                {...field}
                placeholder={!!placeholder ? placeholder : undefined}
                aria-describedby={id}
                decimalScale={2}
                allowNegative={false}
                fixedDecimalScale={true}
                isAllowed={isAllowed}
                {...{ id, readOnly, ...rest }}
                defaultValue={0.0}
              />

              <InputNumberButton
                className={'right-1'}
                icon={<IoAdd />}
                disabled={
                  addDisabled ||
                  !isAllowed(
                    getFormats(parseFloat(field.value || '0.00') + step)
                  )
                }
                onLongPress={() => {
                  const floatValue = parseFloat(field.value || '0.00') + step;
                  const formats = getFormats(floatValue);
                  isAllowed(formats) && field.onChange(formats.value);
                }}
              />
            </div>
          </div>

          <FormItemHintAndError {...{ helperText, hideError, error }} />
        </div>
      )}
    />
  );
}
