import { get } from 'lodash';
import React, { HTMLProps } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

import clsxm from '@/lib/utils/clsxm';

import BaseFeedback from '@/components/Form/InputBase/BaseFeedback';
import BaseLabel from '@/components/Form/InputBase/BaseLabel';

import { BaseFieldProps } from './types';

type TextAreaProps = HTMLProps<HTMLTextAreaElement> & BaseFieldProps;

export default function TextArea({
  id = '',
  label,
  readOnly,
  validation,
  className,
  rows = 4,
  ...rest
}: TextAreaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const baseClasses = 'textarea flex-1';
  const readonlyClasses = 'input-readonly';
  const error = get(errors, id) as FieldError;

  return (
    <div className={clsxm(!!error && 'error')}>
      <BaseLabel
        label={label}
        isRequired={!!validation?.required}
        htmlFor={id}
      />

      <textarea
        id={id}
        aria-describedby={id}
        rows={rows}
        readOnly={readOnly}
        className={clsxm(baseClasses, readOnly && readonlyClasses, className)}
        {...register(id, validation)}
        {...rest}
      />

      <BaseFeedback error={error} {...rest} />
    </div>
  );
}
