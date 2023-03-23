import React, { HTMLProps } from 'react';
import { FieldError, RegisterOptions } from 'react-hook-form';

export interface BaseLabelProps {
  /** Input label */
  label?: string;
}

export interface BaseFeedbackProps {
  /** Small text below input, useful for additional information */
  helperText?: string;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Error */
  error?: FieldError;
}

export interface BaseFieldProps extends BaseLabelProps, BaseFeedbackProps {
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
}

export interface InputBaseProps
  extends HTMLProps<HTMLInputElement>,
    BaseFieldProps {
  /** Icon before input */
  icon?: React.ReactNode;
  /** Icon after input */
  iconAfter?: React.ReactNode;
  /** Class of input */
  inputClassName?: string;
}

export interface FileWithPreview extends File {
  preview: string;
}
