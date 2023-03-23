import { Switch, SwitchProps } from '@headlessui/react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IoCheckmark, IoClose } from 'react-icons/io5';

import clsxm from '@/lib/utils/clsxm';

import BaseFeedback from '@/components/Form/InputBase/BaseFeedback';
import BaseLabel from '@/components/Form/InputBase/BaseLabel';
import { InputDefaultProps } from '@/components/Form/types';

interface InputSwitchProps
  extends Omit<SwitchProps<'button'>, 'id' | 'placeholder'>,
    InputDefaultProps {}

export default function InputSwitch({
  label,
  placeholder,
  helperText,
  id,
  readOnly = false,
  hideError = false,
  validation,
  className,
  checked,
  ...props
}: InputSwitchProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Switch.Group>
      <div className={clsxm('flex flex-col', className)}>
        <BaseLabel {...{ id, label, validation }} />

        <Controller
          control={control}
          name={id}
          rules={validation}
          render={({ field }) => (
            <>
              <Switch
                {...props}
                {...field}
                id={id}
                placeholder={!!placeholder ? placeholder : undefined}
                checked={field.value}
                className={clsxm(
                  'border-default relative inline-flex h-6 w-12 items-center rounded-full border transition-colors focus:outline-none focus:ring-0',
                  field.value ? 'bg-carlo' : 'bg-default',
                  !!label && 'mt-1'
                )}
              >
                <span
                  className={clsxm(
                    'inline-flex h-4 w-4 transform items-center justify-center rounded-full text-xs transition-transform',
                    field.value
                      ? 'translate-x-7 bg-white text-neutral-900'
                      : 'translate-x-1 bg-black text-neutral-50 dark:bg-white dark:text-neutral-900'
                  )}
                >
                  {field.value ? (
                    <IoCheckmark className={'block'} />
                  ) : (
                    <IoClose className={'block'} />
                  )}
                </span>
              </Switch>

              <BaseFeedback {...{ helperText, hideError, error: errors[id] }} />
            </>
          )}
        />
      </div>
    </Switch.Group>
  );
}
