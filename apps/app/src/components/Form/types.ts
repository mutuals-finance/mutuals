import { FieldProps, ImageProps, NumberInputRootProps } from "@mutuals/ui";
import { InputProps as ChakraInputProps } from "@mutuals/ui";
import { FieldError, RegisterOptions } from "react-hook-form";

export interface BaseLabelProps {
  id?: string;

  /** Input label */
  label?: string;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
}

export interface BaseFeedbackProps {
  /** Small text below input, useful for additional information */
  helperText?: string;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Error */
  error?: FieldError;
}

export interface BaseFieldProps extends FieldProps {
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
}

export type InputBaseProps = ChakraInputProps &
  BaseFieldProps & { hideWrapper?: boolean };

export type InputNumberBaseProps = InputBaseProps & {
  inputProps?: NumberInputRootProps;
};

export interface FileWithPreview extends Partial<File> {
  preview: ImageProps["src"];
}
