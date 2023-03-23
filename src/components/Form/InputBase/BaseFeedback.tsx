import React from 'react';

import { BaseFeedbackProps } from '@/components/Form/types';

export default function BaseFeedback({
  helperText,
  hideError,
  error,
}: BaseFeedbackProps) {
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
