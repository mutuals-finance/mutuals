import React from 'react';

import { InputDefaultProps } from '@/components/Form/types';

export type FormItemLabelProps = Pick<
  InputDefaultProps,
  'label' | 'validation' | 'id'
>;

export default function FormItemLabel({
  label,
  validation,
  id,
}: FormItemLabelProps) {
  return !!label ? (
    <label className={'label'} htmlFor={id}>
      {label}
      {!!validation?.required && <span>*</span>}
    </label>
  ) : (
    <></>
  );
}
