import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IoAdd, IoRemove } from 'react-icons/io5';

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
    InputDefaultProps {
  inputClassName?: string;
}

function InputButton({
  children,
  className,
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span
      className={`absolute top-1/2 block -translate-y-1/2 text-neutral-400 ${className}`}
    >
      {children}
    </span>
  );
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const {
      label,
      placeholder = '',
      helperText,
      id,
      readOnly = false,
      hideError = false,
      validation,
      className,
      ...rest
    } = props;

    const { control } = useFormContext();

    const baseClasses = 'input flex-1 px-9';
    const readonlyClasses = 'input-readonly';

    const inputClasses = clsxm(baseClasses, readOnly && readonlyClasses);

    return (
      <Controller
        control={control}
        name={id}
        rules={validation}
        render={({ field, fieldState: { error } }) => (
          <div className={clsxm(className, !!error && 'error')}>
            <FormItemLabel {...{ id, label, validation }} />

            <div
              className={clsxm('flex flex-1 items-center', !!label && 'mt-1')}
            >
              <div className={'relative flex flex-1'}>
                <InputButton>
                  <ButtonOutline
                    className={'left-1'}
                    size='sm'
                    icon={<IoRemove />}
                    onClick={(e) => {
                      e.preventDefault();
                      /*
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
*/
                    }}
                  />
                </InputButton>

                <input
                  className={inputClasses}
                  placeholder={!!placeholder ? placeholder : undefined}
                  aria-describedby={id}
                  {...{ id, readOnly, ...rest, ...field, ref }}
                />

                <InputButton>
                  <ButtonOutline
                    className={'right-1'}
                    size='sm'
                    icon={<IoRemove />}
                    onClick={(e) => {
                      e.preventDefault();
                      /*
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
*/
                    }}
                  />
                </InputButton>
              </div>
            </div>

            <FormItemHintAndError {...{ helperText, hideError, error }} />
          </div>
        )}
      />
    );
  }
);

InputNumber.displayName = 'InputNumber';
export default InputNumber;
