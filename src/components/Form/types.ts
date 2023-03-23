import { RegisterOptions } from 'react-hook-form';

export interface InputDefaultProps {
  /** Input label */
  label?: string;
  /** Small text below input, useful for additional information */
  helperText?: string | false;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
}

export interface FileWithPreview extends File {
  preview: string;
}
