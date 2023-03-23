import React from 'react';
import { Controller, FieldError, useFormContext } from 'react-hook-form';

import clsxm from '@/lib/utils/clsxm';

import FormItemHintAndError from '@/components/Form/FormItem/FormItemHintAndError';
import FormItemLabel from '@/components/Form/FormItem/FormItemLabel';

import { InputDefaultProps } from '../types';

interface FormItemBaseInputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'id' | 'placeholder'
    >,
    InputDefaultProps {
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  /** Icon before input */
  icon?: React.ReactNode;
  /** Icon after input */
  iconAfter?: React.ReactNode;
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
  inputClassName?: string;

  error?: FieldError;
}

function InputIcon({
  children,
  className,
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span
      className={`text-light absolute top-1/2 block -translate-y-1/2 ${className}`}
    >
      {children}
    </span>
  );
}

export default function FormItemBase(props: FormItemBaseInputProps) {
  const {
    label,
    placeholder = '',
    helperText,
    id = '',
    readOnly = false,
    hideError = false,
    validation,
    className,
    icon,
    iconAfter,
    contentBefore,
    contentAfter,
    inputClassName,
    error,
    ...rest
  } = props;

  const baseClasses = 'input flex-1';
  const iconClasses = !icon ? '' : 'pl-9';
  const iconAfterClasses = !iconAfter ? '' : 'pr-9';
  const readonlyClasses = 'input-readonly';

  const inputClasses = clsxm(
    baseClasses,
    readOnly && readonlyClasses,
    iconClasses,
    iconAfterClasses,
    inputClassName
  );

  return (
    <div className={clsxm(className, !!error && 'error')}>
      <FormItemLabel {...{ id, label, validation }} />

      <div className={clsxm('flex flex-1 items-center', !!label && 'mt-1')}>
        {contentBefore}
        <div className={'relative flex flex-1'}>
          {!!icon && <InputIcon className={'left-1'}>{icon}</InputIcon>}

          <input
            className={inputClasses}
            placeholder={!!placeholder ? placeholder : undefined}
            aria-describedby={id}
            {...{ id, readOnly, ...rest }}
          />
          {!!iconAfter && (
            <InputIcon className={'right-1'}>{iconAfter}</InputIcon>
          )}
        </div>
        {contentAfter}
      </div>

      <FormItemHintAndError {...{ helperText, hideError, error }} />
    </div>
  );
}
