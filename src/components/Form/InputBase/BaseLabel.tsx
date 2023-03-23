import clsx from 'clsx';
import React, { HTMLProps } from 'react';

import { BaseLabelProps } from '@/components/Form/types';

interface FormItemLabelProps
  extends BaseLabelProps,
    HTMLProps<HTMLLabelElement> {
  isRequired?: boolean;
}

export default function BaseLabel({
  label,
  isRequired,
  className,
  ...props
}: FormItemLabelProps) {
  return !!label ? (
    <label className={clsx('label', className)} {...props}>
      {label}
      {!!isRequired && <span>*</span>}
    </label>
  ) : (
    <></>
  );
}
