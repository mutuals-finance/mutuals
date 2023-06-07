import React, { HTMLProps, useEffect } from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';

import clsxm from '@/lib/utils/clsxm';

import BaseFeedback from '@/components/Form/InputBase/BaseFeedback';
import BaseLabel from '@/components/Form/InputBase/BaseLabel';
import { BaseFeedbackProps, BaseLabelProps } from '@/components/Form/types';

type BaseWrapperProps = BaseFeedbackProps &
  BaseLabelProps &
  HTMLProps<HTMLDivElement> & {
    id?: string;
    /** Manual validation using RHF, it is encouraged to use yup resolver instead */
    validation?: RegisterOptions;
  };

export default function BaseWrapper({
  id,
  className,
  label,
  children,
  validation,
  ...props
}: BaseWrapperProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  return (
    <div className={clsxm('space-y-1', className, !!error && 'error')}>
      <BaseLabel
        label={label}
        htmlFor={id}
        isRequired={!!validation?.required}
      />

      <div className={clsxm('relative flex w-full items-center')}>
        {children}
      </div>

      <BaseFeedback error={error} {...props} />
    </div>
  );
}
