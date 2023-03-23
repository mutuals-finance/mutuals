import React, { HTMLProps } from 'react';

import clsxm from '@/lib/utils/clsxm';

import BaseWrapper from '@/components/Form/InputBase/BaseWrapper';

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
  readOnly,
  icon,
  iconAfter,
  inputClassName,
  ...rest
}: InputBaseProps) {
  return (
    <BaseWrapper id={id} {...rest}>
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

      {!!iconAfter && <InputIcon className={'right-1'}>{iconAfter}</InputIcon>}
    </BaseWrapper>
  );
}
