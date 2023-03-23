import { Switch, SwitchProps } from '@headlessui/react';
import React from 'react';
import { Controller, FieldError, get, useFormContext } from 'react-hook-form';
import { IoCheckmark, IoClose } from 'react-icons/io5';

import clsxm from '@/lib/utils/clsxm';

import BaseFeedback from '@/components/Form/InputBase/BaseFeedback';
import BaseLabel from '@/components/Form/InputBase/BaseLabel';
import BaseWrapper from '@/components/Form/InputBase/BaseWrapper';
import { BaseFieldProps } from '@/components/Form/types';

type InputSwitchProps = SwitchProps<'button'> & BaseFieldProps;

export default function InputSwitch({
  id = '',
  validation,
  className,
  ...rest
}: InputSwitchProps) {
  const { control } = useFormContext();

  return (
    <Switch.Group as={'div'}>
      <BaseWrapper
        id={id}
        validation={validation}
        className={clsxm('flex flex-col', className)}
        {...rest}
      >
        <Controller
          control={control}
          name={id}
          rules={validation}
          render={({ field }) => (
            <>
              <Switch
                {...rest}
                {...field}
                id={id}
                checked={field.value}
                className={clsxm(
                  'border-default relative inline-flex h-6 w-12 items-center rounded-full border transition-colors focus:outline-none focus:ring-0',
                  field.value ? 'bg-carlo' : 'bg-default'
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
            </>
          )}
        />
      </BaseWrapper>
    </Switch.Group>
  );
}
