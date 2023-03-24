import React, { useEffect } from 'react';
import {
  FieldValues,
  FormProvider,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { UseFormProps } from 'react-hook-form/dist/types';
import {
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form/dist/types/form';

import clsxm from '@/lib/utils/clsxm';

interface FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> extends Omit<
      React.FormHTMLAttributes<HTMLFormElement>,
      'onSubmit' | 'children'
    >,
    UseFormProps<TFieldValues, TContext> {
  onSubmit?: SubmitHandler<TFieldValues>;
  onSubmitInvalid?: SubmitErrorHandler<TFieldValues>;
  children:
    | React.ReactNode
    | ((method: UseFormReturn<TFieldValues, TContext>) => React.ReactNode);
}

export default function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>({
  className,
  children,
  onSubmit,
  onSubmitInvalid,
  defaultValues,
  ...props
}: FormProps<TFieldValues, TContext>) {
  const methods = useForm<TFieldValues, TContext>({ defaultValues, ...props });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        className={clsxm(`flex w-full flex-col`, className)}
        onSubmit={onSubmit && handleSubmit(onSubmit, onSubmitInvalid)}
        {...props}
      >
        {typeof children == 'function' ? children(methods) : children}
      </form>
    </FormProvider>
  );
}
