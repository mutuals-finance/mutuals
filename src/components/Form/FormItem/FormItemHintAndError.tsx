import React from 'react';

import { InputDefaultProps } from '@/components/Form/types';

export interface FormItemHintAndErrorProps
  extends Pick<InputDefaultProps, 'helperText' | 'hideError'> {
  error?: any;
}

export default function FormItemHintAndError({
  helperText,
  hideError,
  error,
}: FormItemHintAndErrorProps) {
  return (
    <>
      {!!helperText && (
        <div className='mt-1'>
          <p className={'text-light text-xxs'}>{helperText}</p>
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
