import React, { ForwardedRef } from 'react';
import { useFormContext } from 'react-hook-form';

import clsxm from '@/lib/utils/clsxm';

import FormItemHintAndError from '@/components/Form/FormItem/FormItemHintAndError';
import FormItemLabel from '@/components/Form/FormItem/FormItemLabel';

import { InputDefaultProps } from './types';

export interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'id' | 'placeholder'>,
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
}

function InputIcon({
  children,
  className,
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span
      className={`absolute top-1/2 block -translate-y-1/2 text-neutral-400 ${className}`}
    >
      {children}
    </span>
  );
}

const Input = React.forwardRef(
  (
    {
      label,
      placeholder = '',
      helperText,
      id,
      type = 'text',
      readOnly = false,
      hideError = false,
      validation,
      className,
      icon,
      iconAfter,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();

    const baseClasses = 'input flex-1';
    const iconClasses = !icon ? '' : 'pl-9';
    const iconAfterClasses = !iconAfter ? '' : 'pr-9';
    const readonlyClasses = 'input-readonly';

    return (
      <div className={clsxm(!!errors[id] && 'error')}>
        <FormItemLabel {...{ id, label, validation }} />

        <div className={clsxm('relative flex flex-1', !!label && 'mt-1')}>
          {!!icon && <InputIcon className={'left-3'}>{icon}</InputIcon>}
          <input
            {...register(id, validation)}
            {...rest}
            type={type}
            name={id}
            id={id}
            readOnly={readOnly}
            className={clsxm(
              baseClasses,
              readOnly && readonlyClasses,
              iconClasses,
              iconAfterClasses,
              className
            )}
            placeholder={!!placeholder ? placeholder : undefined}
            aria-describedby={id}
            ref={ref}
          />
          {!!iconAfter && (
            <InputIcon className={'right-3'}>{iconAfter}</InputIcon>
          )}
        </div>

        <FormItemHintAndError
          {...{ helperText, hideError, error: errors[id] }}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
