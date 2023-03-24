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
        <div>
          <p className={'text-light text-xxs'}>{helperText}</p>
        </div>
      )}

      {!(hideError || !error) && (
        <div>
          {!!error && (
            <p className='label-error'>{error.message?.toString()}</p>
          )}
        </div>
      )}
    </>
  );
}
