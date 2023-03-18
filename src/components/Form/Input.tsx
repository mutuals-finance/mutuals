import React, { ForwardedRef } from 'react';
import { useFormContext } from 'react-hook-form';

import clsxm from '@/lib/utils/clsxm';

import { InputDefaultProps } from './types';

export interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'id'>,
    InputDefaultProps {
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
    const errorClasses =
      'border-red-500 focus:border-red-500 focus:ring-red-500';

    return (
      <div>
        {!!label && (
          <label className={'label'} htmlFor={id}>
            {label}
          </label>
        )}
        <div className={'relative flex flex-1'}>
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
              errors[id] && errorClasses,
              iconClasses,
              iconAfterClasses
            )}
            placeholder={placeholder}
            aria-describedby={id}
            ref={ref}
          />
          {!!iconAfter && (
            <InputIcon className={'right-3'}>{iconAfter}</InputIcon>
          )}
          {/*
            {!hideError && errors[id] && (
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                    <HiExclamationCircle className='text-xl text-red-500' />
                </div>
            )}
*/}
        </div>

        {/*
            <div className='mt-1'>
                {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
                {!hideError && errors[id] && (
                    <span className='text-sm text-red-500'>
            {errors[id]?.message as unknown as string}
          </span>
                )}
            </div>
*/}

        {/*

            {!!error && <span className={'label-error'}>{error}</span>}
*/}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
