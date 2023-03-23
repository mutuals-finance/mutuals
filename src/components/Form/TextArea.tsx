import React, { ForwardedRef } from 'react';
import { useFormContext } from 'react-hook-form';

import clsxm from '@/lib/utils/clsxm';

import BaseFeedback from '@/components/Form/InputBase/BaseFeedback';
import BaseLabel from '@/components/Form/InputBase/BaseLabel';

import { InputDefaultProps } from './types';

export interface TextAreaProps
  extends Omit<
      React.ComponentPropsWithoutRef<'textarea'>,
      'id' | 'placeholder'
    >,
    InputDefaultProps {}

const TextArea = React.forwardRef(
  (
    {
      label,
      placeholder = '',
      helperText,
      id,
      readOnly = false,
      hideError = false,
      validation,
      className,
      rows = 4,
      ...rest
    }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();

    const baseClasses = 'textarea flex-1';
    const readonlyClasses = 'input-readonly';

    return (
      <div className={clsxm(!!errors[id] && 'error')}>
        <BaseLabel {...{ id, label, validation }} />

        <textarea
          {...register(id, validation)}
          {...rest}
          rows={rows}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsxm(baseClasses, readOnly && readonlyClasses, className)}
          placeholder={!!placeholder ? placeholder : undefined}
          aria-describedby={id}
          ref={ref}
        />

        <BaseFeedback {...{ helperText, hideError, error: errors[id] }} />
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
