import React from 'react';
import {
  FieldValues,
  get,
  useFieldArray,
  UseFieldArrayReturn,
  useFormContext,
} from 'react-hook-form';
import { IoAdd } from 'react-icons/io5';

import { ButtonLink, ButtonSecondary } from '@/components/Button';
import FormItemHintAndError from '@/components/Form/FormItem/FormItemHintAndError';
import { InputDefaultProps } from '@/components/Form/types';

import { InputFieldArrayItem } from './InputFieldArrayItem';

interface InputFieldArrayProps<TFieldValue>
  extends Omit<InputDefaultProps, 'label' | 'placeholder' | 'readOnly'> {
  defaultItem: TFieldValue;
  removeDisabled?: boolean;
  hideAdd?: boolean;
  children: (id: string) => React.ReactNode;
  contentBefore?: (
    method: UseFieldArrayReturn<FieldValues, string, 'id'>
  ) => React.ReactNode;
  contentAfter?: (
    method: UseFieldArrayReturn<FieldValues, string, 'id'>
  ) => React.ReactNode;
}

export default function InputFieldArray<TFieldValue>({
  id,
  validation,
  children,
  defaultItem,
  helperText,
  removeDisabled,
  hideError = false,
  hideAdd = false,
  contentBefore,
  contentAfter,
}: InputFieldArrayProps<TFieldValue>) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  const method = useFieldArray({
    name: id, // unique name for your Field Array
    rules: validation,
  });

  const { fields, append, remove } = method;
  return (
    <div className={'flex flex-col space-y-6'}>
      <>
        {contentBefore?.(method)}

        <ul className={'flex flex-col space-y-3'}>
          {fields.map((field, index) => (
            <InputFieldArrayItem
              key={field.id}
              removeDisabled={
                removeDisabled ||
                (!!validation?.minLength &&
                  fields.length <= validation.minLength)
              }
              onAdd={!hideAdd ? () => append(defaultItem) : undefined}
              onRemove={() => remove(index)}
            >
              {children(`${id}.${index}`)}
            </InputFieldArrayItem>
          ))}
        </ul>

        <FormItemHintAndError {...{ error, hideError, helperText }} />

        {contentAfter?.(method)}
      </>
    </div>
  );
}
