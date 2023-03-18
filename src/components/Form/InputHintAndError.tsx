import React from 'react';

import { InputDefaultProps } from '@/components/Form/types';

export interface InputHintAndErrorProps
  extends Pick<InputDefaultProps, 'helperText' | 'hideError'> {
  error?: any;
}

export default function InputHintAndError({
  helperText,
  hideError,
  error,
}: InputHintAndErrorProps) {
  return (
    <>
      {!!helperText && (
        <div className='mt-1'>
          <p className={'text-xxs text-neutral-500 dark:text-neutral-400'}>
            {helperText}
          </p>
        </div>
      )}

      {!(hideError || !error) && (
        <div className='mt-1'>
          {!!error && (
            <p className='label-error'>{error.message?.toString()}</p>
          )}
        </div>
      )}
    </>
  );
}
