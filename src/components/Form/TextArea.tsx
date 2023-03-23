import React, { HTMLProps } from 'react';
import { useFormContext } from 'react-hook-form';

import clsxm from '@/lib/utils/clsxm';

import BaseWrapper from '@/components/Form/InputBase/BaseWrapper';

import { BaseFieldProps } from './types';

type TextAreaProps = HTMLProps<HTMLTextAreaElement> & BaseFieldProps;

export default function TextArea({
  id = '',
  readOnly,
  validation,
  className,
  rows = 4,
  ...rest
}: TextAreaProps) {
  const { register } = useFormContext();

  const baseClasses = 'textarea flex-1';
  const readonlyClasses = 'input-readonly';

  return (
    <BaseWrapper id={id} validation={validation} {...rest}>
      <textarea
        id={id}
        aria-describedby={id}
        rows={rows}
        readOnly={readOnly}
        className={clsxm(baseClasses, readOnly && readonlyClasses, className)}
        {...register(id, validation)}
        {...rest}
      />
    </BaseWrapper>
  );
}
