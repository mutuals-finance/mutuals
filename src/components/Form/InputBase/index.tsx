import React, { HTMLProps } from 'react';

import clsxm from '@/lib/utils/clsxm';

import BaseFeedback from '@/components/Form/InputBase/BaseFeedback';
import BaseLabel from '@/components/Form/InputBase/BaseLabel';

import { InputBaseProps } from '../types';

function InputIcon({ children, className }: HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className={`text-light absolute top-1/2 block -translate-y-1/2 ${className}`}
    >
      {children}
    </span>
  );
}

export default function InputBase({
  id = '',
  label,
  readOnly,
  validation,
  className,
  icon,
  iconAfter,
  inputClassName,
  error,
  ...rest
}: InputBaseProps) {
  return (
    <div className={clsxm(className, !!error && 'error')}>
      <BaseLabel
        label={label}
        isRequired={!!validation?.required}
        htmlFor={id}
      />

      <div className={clsxm('flex flex-1 items-center', !!label && 'mt-1')}>
        <div className={'relative flex flex-1'}>
          {!!icon && <InputIcon className={'left-1'}>{icon}</InputIcon>}

          <input
            id={id}
            aria-describedby={id}
            readOnly={readOnly}
            className={clsxm(
              'input flex-1',
              !!readOnly && 'input-readonly',
              !!icon && 'pl-9',
              !!iconAfter && 'pr-9',
              inputClassName
            )}
            {...rest}
          />

          {!!iconAfter && (
            <InputIcon className={'right-1'}>{iconAfter}</InputIcon>
          )}
        </div>
      </div>

      <BaseFeedback error={error} {...rest} />
    </div>
  );
}
