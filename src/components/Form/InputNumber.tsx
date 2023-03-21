import React, { useRef } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { IoAdd, IoRemove } from 'react-icons/io5';

import { ButtonOutline } from '@/components/Button';
import Input, { InputProps } from '@/components/Form/Input';

export interface InputNumberProps
  extends Omit<InputProps, 'type'>,
    InputProps {}

export default function InputNumber({
  validation,
  id,
  ...props
}: InputNumberProps) {
  const step = Number(props.step || 1);

  const { setValue, getValues } = useFormContext();

  const value = getValues(id);

  const defaultValidation = {};
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Input
      id={id}
      ref={inputRef}
      validation={{ ...defaultValidation, ...validation }}
      inputClassName={'px-10 text-center input-number'}
      iconAfter={
        <ButtonOutline
          size='sm'
          icon={<IoAdd />}
          onClick={(e) => {
            e.preventDefault();
            const newValue = Number(value) + step;
            setValue(
              id,
              validation?.max
                ? Math.min(newValue, Number(validation?.max))
                : newValue,
              {
                shouldTouch: true,
              }
            );
          }}
        />
      }
      icon={
        <ButtonOutline
          size='sm'
          icon={<IoRemove />}
          onClick={(e) => {
            e.preventDefault();
            const newValue = Number(value) - step;
            setValue(
              id,
              validation?.min
                ? Math.max(newValue, Number(validation?.min))
                : newValue,
              {
                shouldTouch: true,
              }
            );
          }}
        />
      }
      {...props}
    />
  );
}
