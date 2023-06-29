import { FormControl, FormControlProps, FormLabel } from '@chakra-ui/react';
import React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';

import BaseFeedback from '@/components/Form/InputBase/BaseFeedback';
import { BaseFeedbackProps, BaseLabelProps } from '@/components/Form/types';

type BaseWrapperProps = BaseFeedbackProps &
  BaseLabelProps &
  FormControlProps & {
    id?: string;
    /** Manual validation using RHF, it is encouraged to use yup resolver instead */
    validation?: RegisterOptions;
  };

export default function BaseWrapper({
  id,
  label,
  children,
  validation,
  helperText,
  hideError,
  ...props
}: BaseWrapperProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  return (
    <FormControl {...props}>
      {label && (
        <FormLabel htmlFor={id}>
          {label}
          {!!validation?.required && <span>*</span>}
        </FormLabel>
      )}

      {children}

      <BaseFeedback
        error={error}
        helperText={helperText}
        hideError={hideError}
      />
    </FormControl>
  );
}
